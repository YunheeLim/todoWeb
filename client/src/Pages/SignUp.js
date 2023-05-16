import React, { Component } from 'react';
import { useState } from 'react';
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios"; // 서버에 api 요청 보내기 위한 모듈


export default function SignUp(){
    let [mode, setMode] = useState('correct');
    let onChangeMode = () => {
        setMode('incorrect');
    }
    const errorMsg = () =>{
        if (mode === 'incorrect'){
            return "비밀번호가 일치하지 않습니다.";
        }
        else{
            return ;
        }
    }

    /** signup 폼의 데이터 유효성 검사, 검사 통과 시 서버로 signup 요청 전송 */
    const validCheck=(e)=>{
        console.log('validCheck is called.')
        let isValid=false;

        // --- 서버에서 하고 있는 유효성 검사 ---
        // 아이디: 영문 5자 이상, 20자 이내
        // 닉네임: 영문 30자 이내 또는 한글 10자 이내
        // 이메일: ~~ @ ~~ . ~~ 의 형식 제한
        // 비밀번호: 8자 이상,20자 이내
        // 이에 맞지 않는 입력은 회원가입요청 결과로 '유효하지 않은 입력입니다'를 줌

        //!! 유효성 검사 추가 필요!!
        if(e.target.usrId.value === "" || e.target.nickName.value === "" || e.target.email.value === "" || e.target.pw.value === ""){
            e.preventDefault();
        }
        else if(e.target.pw.value !== e.target.pw_test.value){
            e.preventDefault();
            onChangeMode();
        }
        else {
            e.preventDefault();
            isValid=true;
        }

        if(isValid){ // 모든 검사 통과 시, 서버로 요청 보내는 handler 호출
            e.preventDefault();
            handleSubmit(e)
        }
    }

    /** signup 폼의 데이터로 서버에 signup 요청 전송 */
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본으로 발생하는 이벤트 차단
        console.log('handleSubmit is called.')
        
        const id = e.target.usrId.value;
        const name = e.target.nickName.value;
        const password = e.target.pw.value;
        const email = e.target.email.value;
        
        try {
          const response = await axios.post('/api/signup', { // 서버로 회원가입 요청 전송
            id:id,
            name:name,
            email:email,
            password:password
          });
          
          console.log(response.data); // 서버의 응답 출력
          // !!회원가입 성공 시 다음 페이지 어디로 갈지 작성 필요!!
        } catch (error) {
          console.error(error);
        }
      };
      
    let msg = errorMsg();
        
    return(
        <body>
            <div className={styles.container}>
                <div className={styles.navigation}>
                <Link to="/first">
                    <button className={styles.back}>&#60;</button>
                </Link>
                    <div className={styles.nav_text}>회원가입</div>
                </div>
                {/* <form action="/main" method="post" className={styles.login} */}
                <form className={styles.login} onSubmit={ validCheck }>
                    <input type="text" name="usrId" className={styles.usrId} placeholder="아이디"/>
                    <input type="text" name="nickName" className={styles.nickName} placeholder="닉네임"/>
                    <input type="text" name="email" className={styles.email} placeholder="이메일"/>
                    <input type="password" name="pw" className={styles.password} placeholder="비밀번호"/>
                    <input type="password" name="pw_test" className={styles.password_test} placeholder="비밀번호 확인"/>
                    <div className={styles.error_msg}>{msg}</div>
                    <input type="submit" className={styles.submit} value="확인"/>
                </form>
            </div>    
        </body>
    );
}

