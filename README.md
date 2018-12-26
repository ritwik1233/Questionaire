# Questionaire

## Project Description
* This application is used to demonstrate the MERN STACK(Mongo,Express,React,Node)
* The application consists of 3 kinds of users.

          1. Members
          2. Leaders
          3. Admin
* A web application where new users(members) join in answer questions and earn reward.
* Questions are created by leaders.
* Admin has the authority to choose a new leader from the members.
* Members can view the analytics of the questions answered by them and the rewards earned.
* Leaders can view the analytics of questions they created .
* Admin can view analytics of total numbers of questions and also total number of members and leaders.

## TechStack
* NodeJS
* ReactJS
* Redux
* Express
* MongoDB(MLab)
* Materialise CSS

## Project Setup 

### Database Setup(Mlab)
* Create a mlab account
* Create a db and the user details .Update the url by changing the username and password as the username and password create.Copy the mlab url
* Create a folder in the root directory named keys and create a keys.js file inside the keys folder
* create a json object with key='MongoURI' and value='copied mlab url'

### Cookie Setup
* Open the keys.js file in keys folder and add a new key='cookieKey' and value=the cookie value

### Install Project Dependency
* Open Root Directory in command prompt
* run command "npm install" to install all server side npm packages.
* Navigate to client folder in command prompt
* run command "npm install" to install all client side npm packages.

### Run Server
* Open root directory in command prompt
* run command npm run build to run 

### Users Details

Below are the few user details that can be used to view and explore the application 

| User Name  | Password | User Type  |
| ---------- | -------- | ---------- |
| ritwiksinha@gmail.com | 12345  | Admin |
| ritwiksinha12@gmail.com  | 12345 | Leader |
| ritwiksinha123@gmail.com  | 12345 | Leader |
| ritwiksinha25@gmail.com  | 12345 | Member |
| ritwiksinha251@gmail.com  | 12345 | Member |



