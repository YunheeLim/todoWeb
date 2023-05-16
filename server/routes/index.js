const express = require('express');
const router = express.Router();
const session=require('express-session');


const auth=require('../controller/auth.js');
const db=require('../config/db.js');
const sess=require('../controller/sessionChecker.js');



// index 페이지 
router.get('/', sess.sessionExist,function(req, res, next) {
  res.redirect('/main');
});

// index 페이지 렌더링
router.get('/index', (req, res) => {
  res.render('index');
});

// signup 페이지 렌더링
router.get('/signup',sess.sessionNotExist, (req, res) => {
  res.render('signup');
});

// 회원 가입 요청 처리
router.post('/signup',(req, res) => {
  const { id,name, email,password } = req.body;
  const user = { id,name,email, password };
  console.log(user)
  if(!auth.isValidInput(user)){ // 서버에서 입력 폼의 데이터 검사
    console.log('user: ',req.body.id+' - sign up fail: invalid input data');
    res.render('signup',{error:'유효하지 않은 입력입니다.'});
  }
  db.query('SELECT * FROM User WHERE id=?',[id],(err,data)=>{
    if(data.length==0){ // DB에 해당 id에 대한 정보가 없을 경우
      db.query('INSERT INTO User SET ?',user,(err,result)=>{
        if(err){
          throw err;
        }
      })
      console.log('user: ',req.body.id+' - sign up success');
      res.redirect('/signupResult');
    }else{ // DB에 중복된 id가 있을 경우
      console.log('user: ',req.body.id+' - sign up fail: ID already exist');
      res.render('signup',{error:'이미 사용중인 ID 입니다.',id:user.id,name:user.name,email:user.email});
    }
  })
});

router.get('/signupResult',(req,res)=>{
  res.render('signupResult');
})

// login 페이지 렌더링
router.get('/login',sess.sessionNotExist, (req, res) => {
  res.render('login');
});

// 로그인 요청 처리
router.post('/login',(req,res)=>{
  const id=req.body.id;
  const pw=req.body.password;
  db.query('SELECT * FROM User WHERE id=? AND password=?',[id,pw],(err,result)=>{
    if(err){
      throw err;
    }
    if(result.length!=0){
      console.log('user: ',req.body.id+' - login success');
      req.session.is_logined=true;
      req.session.userId=req.body.id;
      res.redirect('main');
    }else{
      console.log('user: ',req.body.id+' - login fail');
      res.render('login',{error:'존재하지 않는 ID 또는 PW 입니다.'});
    }
  })
})

// main 페이지 렌더링
router.get('/main', sess.sessionExist,(req, res) => {
  res.render('main',{name:req.session.userId});
});

// logout 페이지 렌더링
router.get('/logout', (req, res) => {
  req.session.destroy()
  // req.session.is_logined=false;
  res.render('logout');
});

module.exports = router;
