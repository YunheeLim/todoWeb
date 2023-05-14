import React, { Component } from 'react';
import { useState } from 'react';
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

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
                <form action="/main" method="post" className={styles.login}
                    onSubmit={function(e){
                        if(e.target.nickName.value === "" || e.target.email.value === "" || e.target.pw.value === ""){
                            e.preventDefault();
                        }
                        if(e.target.pw.value !== e.target.pw_test.value){
                            e.preventDefault();
                            onChangeMode();
                            }
                        }
                    }>
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

