const session=require('express-session');
const MemoryStore=require('memorystore')(session);


const maxAge = 1000 * 60 * 5; // session 유지 기간

// session 설정
const sessionConfig={
  secret:'Itssecret',
  resave:false,
  saveUninitialized:true,
  store:new MemoryStore({checkPeriod:maxAge}),
  cookie:{
    maxAge:maxAge
  }
};

module.exports=function(app){
    app.use(session(sessionConfig));
};