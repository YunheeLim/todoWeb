const secret ={}

// mysql 계정 설정
secret.db={
    DB_USER:"root",
    DB_PASSWORD:"0000",
    DB_DATABASE:"todo_db",
}

// 인증코드 메일 발송을 위한 계정 설정
secret.eAuth={
    user: '*** YOUR GMAIL ID ***',
    pass: '*** YOUR GMAIL PW ***',
}


module.exports=secret;
