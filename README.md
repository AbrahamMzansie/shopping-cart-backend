# API Authentication and verification when getting data

# How to run this project
# (a)-Install Dependencies (frontend & backend)
Naviagate to the folder shopping-cart-backend and do the following . Image below show the same technique to install dependencies . Run the following command
#npm install
![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/install%20dependences.png)

# (b) Run the project 
 Go to shopping-cart-backend/backend and issue the following command
 # node server
 For example in my machine l did this 
 #PS C:\PROJECTS\shopping-cart-backend\backend> node server
 
 # ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 # Testing endpoints with PostMan
 First of all you need to register in order to get unique token created using # Json Web Token(JWT)
 
 # (a)How to register
 
 using the following end point 
 URL : http://localhost:3000/api/auth/register
 method : POST 
 body data :  {
    "name" : "system",
    "email" : "admin.admin@gmail.com",
    "password" : "12345678",
    "isAdmin" : "false"
}
 
 ![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/register.png)
 
 # (b) Login to get Token 
 using the following end point 
 URL : http://localhost:3000/api/auth/login
 method : POST 
 body data :  {
    "email" : "admin.admin@gmail.com",
    "password" : "12345678"
}

# (c) WHERE TO GET TOKEN 
Send your rest api to the server to get your secrect key to use it in cart endpoint .
![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(88).png)
 
 
 # ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 # TESTING CART END POINT
 
 # (1) how to create a cart 
 using the following end point 
 URL : http://localhost:3000/api/cart/create-cart
 Authorization type : Bearer token 
 method : POST 
 body data :  {
    "cartItems" : {
           "product" : "6154724cd721e64a14361c4b",
           "quantity" : "1"      
    }
    
}

# Image below show you how to create cart 

First you need to attach your secrect obtained when login in 
Do the following to add your token to your create cart end point(without token you cannot create cart)
# Choose "Bearer token" as your  Authorization Type and add your token as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(89).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(90).png)


# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


 
 # (1) HOW TO GET CART
 using the following end point 
 URL : http://localhost:3000/api/cart/get-cart
 method :GET 
 Authorization type : Bearer token

# Image below show you how to get cart 

First you need to attach your secrect obtained when login in 
Do the following to add your token to your get cart end point(without token you cannot get your cart)
# Choose "Bearer token" as your  Authorization Type and add your token as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(89).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(91).png)

# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


# (1) HOW TO UPDATE CART
 using the following end point 
 URL : http://localhost:3000/api/cart/update-cart
 method :PUT 
 Authorization type : Bearer token

# Image below show you how to update cart 

First you need to attach your secrect obtained when login in 
Do the following to add your token to your update cart end point(without token you cannot update your cart)
# Choose "Bearer token" as your  Authorization Type and add your token as shown below

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(89).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(92).png)

# #-----------------------------------------------------------------------------------------------------------------------------------------------------------------------#


# (1) HOW TO DELETE CART
 using the following end point 
 parameter : <enter cart id like below URL> for example URL = (http://localhost:3000/api/cart/delete-cart/) , parameter = 6154c477c437a05124670c80
  URL : http://localhost:3000/api/cart/delete-cart/6154c477c437a05124670c80
  Authorization type : Bearer token
 method :DELETE
  
# Image below show you how to delete cart

First you need to attach your secrect obtained when login in 
Do the following to add your token to your delete cart end point(without token you cannot delete your cart)
# Choose "Bearer token" as your  Authorization Type and add your token as shown below
  
![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(89).png)

![alt text](https://github.com/AbrahamMzansie/Screenshots/blob/master/Screenshot%20(93).png)
  
  # --------------------------------------------------------------------------------------------------------------------------------------------------------#




 
 
 
