const express = require("express");
const app = express();

// body parser 미들웨어
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
    console.log("서버 실행 중");
});