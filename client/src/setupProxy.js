const { createProxyMiddleware }=require('http-proxy-middleware');

module.exports=(app)=>{
    app.use(
        createProxyMiddleware("/api",{
            target:"http://localhost:8080", // 백엔드 서버의 port: 8080
            changeOrigin:true,
        })
    );
};