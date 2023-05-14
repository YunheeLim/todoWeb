import React, { Component } from 'react';
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

class Login extends Component{
    render(){
        return(
            <body>
                <div className={styles.container}>
                    <div className={styles.navigation}>
                    <Link to="/first">
                        <button className={styles.back}>&#60;</button>
                    </Link>
                        <div className={styles.nav_text}>로그인</div>
                    </div>
                    <form action="/main" method="post" className={styles.login}
                        onSubmit={function(e){
                            if(e.target.email.value === "" || e.target.pw.value === ""){
                                e.preventDefault();
                            }
                        }}>
                        <input type="text" name="email" className={styles.email} placeholder="이메일" />
                        <input type="password" name="pw" className={styles.password} placeholder="비밀번호"/>
                        <input type="submit" className={styles.submit} value="확인"/>
                    </form>
                </div>    
            </body>
        );
    }
}

export default Login;