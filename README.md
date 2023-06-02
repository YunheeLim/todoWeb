# todoWeb

## Description
A website for todo-list.<br/>
You can manage things(todo-lists) you should do through many different kinds of functions.<br/>
You can also journal simply and even communicate simply with your following/followers.
![image](https://github.com/YunheeLim/todo_mate/assets/92131041/d4d74090-ab2c-408f-9f71-ab44e5300f05)

## Prerequisite
```shell
npm --version
8.1.0
```
## Usage
Open your terminal and start this project like below.
```shell
cd client
npm install
cd ../server
npm install
cd ..
npm install
npm start
```
You should enter your mySQL information for the database and your Gmail information for the email authenticaiton
### server/config/secret.js 
```javascript
const secret ={}

secret.db={
    DB_USER:"*** YOUR USER ID ***",
    DB_PASSWORD:"*** YOUR PASSWORD ***",
    DB_DATABASE:"*** YOUR DB NAME ***",

}

secret.eAuth={
    user: '*** YOUR GMAIL ID ***',
    pass: '*** YOUR GMAIL PW ***', 
}


module.exports=secret;
```
