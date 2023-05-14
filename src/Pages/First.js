import React, { Component } from 'react';
import styles from "./First.module.css";
import character from './img/character.png';
import { Link } from "react-router-dom";

class First extends Component{
    render(){
        return(
            <body>
                <div className={styles.container}>
                    <img className={styles.character}src={character}/>
                    <div className={styles.welcome}>todo mate</div>
                    <div className={styles.description}>할 일을 작성, 계획, 관리하세요.</div>
                    <Link to="/login">
                        <button className={styles.login_btn}>로그인</button>
                    </Link>
                    <Link to="/signup">
                        <button className={styles.signUp_btn}>회원가입</button>
                    </Link>
                </div>
            </body>

        );
    }
}

export default First;