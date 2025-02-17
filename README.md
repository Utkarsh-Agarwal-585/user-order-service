# User Service

## Overview
The **User Service** is responsible for managing user-related operations.
The **Order Service** is responsible for managing order-related operations.


## Installation

Clone the project

```bash
  git clone https://github.com/Utkarsh-Agarwal-585/user-order-service.git
```


```bash
cd user-order-service
```

Install dependencies and run the server
```bash
cd orderservice
```
or 

```bash
cd userService
```

```bash
  npm i
```

```bash
  node app.js
```

It will Start the server on `port:3000` for orderservice and `port:3001` for userService


## API Endpoints

### **1. create Order**
#### **POST `/order`**
create order and notify user

#### **Request Body:**
```json
{
  "userId": "123",
  "orderDetails": "2 x Pizza, 1 x Soda"
}
```

``` json
{
  "status" : 200,
  "data": "Created: Order placed and user notified"
}
```


### **2. Notify User**
#### **POST `/notify`**
Notifies the user about their order status.

#### **Request Body:**
```json
{
  "userId": "123",
  "orderDetails": "2 x Pizza, 1 x Soda"
}
```

``` json
{
  "status" : 200,
  "message": "User notified successfully"
}
```