# node-study

### 자바스크립트 비동기 처리

1. 콜백함수 활용 : 가장 간단

2. 프로미스 : 프로미스 객체와 콜백함수 활용

3. async/await 예약어를 사용해서 실행순서 제어

---

### Node.js 모듈

- 프로그램을 작은 기능 단위로 쪼개고 파일 형태로 저장해 놓은 것
- 코드의 중복작성할 필요 없음
- 수정이 필요할 경우 필요한 모듈만 수정하면 됨

#### Node 코어 모듈

- fs : 파일시스템 관련
- HTTP : http 통신

* 글로벌 모듈 : require 없이 사용할 수 있는 모듈 ex) console.log
* 글로벌 객체 : 글로벌 모듈에 있는 객체
* __dirname / __filenmae : 현재 모듈 위치의 폴더 이름, 파일 이름을 가져옴

---

### path 모듈

path 모듈이 필요한 이유 : window, mac 등 시스템별 다른 경로구분자 통일 가능, 여러 문자열을 묶어서 경로로 표현 가능
https://nodejs.org/docs/latest/api/path.html


#### 절대경로 vs 상대경로
- 절대경로 : 루트폴더부터 파일까지 전부 나타냄
- 상대경로 : 기준이 되는 파일이 있을 경우 사용하는 경로

---

### 라우팅
- 클라이언트에서 들어오는 요청에 따라 그에 맞는 함수를 실행하는 것
- 사용자가 입력하는 URL에 따라 다른 내용을 보여줄 수 있음
- GET, POST, PUT, DELETE 같은 요청 메서드에 따라 처리할 함수를 다르게 연결 가능

---

### Express 요청 객체의 속성

| 속성      | 설명                                  |
|-----------|---------------------------------------|
| req.body  | POST 요청 시 넘겨준 정보 포함         |
| req.cookies | 쿠키정보                            |
| req.headers | 헤더정보                            |
| req.params  | URL 뒤에 라우트 파라미터 정보       |
| req.query   | 요청 URL에 포함된 질의 매개변수     |


### Express 응답 객체의 함수
| 함수       | 설명               |
|-----------|-------------------|
| res.download | 파일 다운로드 |
| res.end | 응답 프로세스 종료 |
| res.json | json 응답 전송 |
| res.jsonp | jsonp 지원을 통해 json 응답 전송 |
| res.redirect | 요청 경로를 재지정해서 강제 이동 |
| res.render | 뷰 템플릿 화면에 렌더링 |
| res.send | res.send() 괄호 안의 내용을 전송 |
| res.sendFile | 지정한 경로의 파일을 읽어서 내용 전송 |
| res.sendStatus | 상태메시지와 함께 HTTP 상태코드 전송 |
| res.status | 응답의 상태코드 설정 |

---

### 미들웨어

요청과 응답 중간에 있으면서 요청을 처리하거나 원하는 형태로 응답을 수정하는 기능을 가진 함수
ex) 로그인 미들웨어 : 사용자 인증과정

#### 라우터 미들웨어
- 모듈화 `contactRoutes.js` 파일로 처리
```
// "/contacts" 공통 url 은 app.js에서 처리
router.route("/")
.get((req, res) => {
    res.send("Contact Page");
})
.post((req, res) => {
    res.send("Create Contacts");
});
```

#### 바디파서 미들웨어
- 요청 본문에 담긴 것을 파싱하는 미들웨어

|함수           | 설명                      |
|--------------|--------------------------|
|.json()       | JSON 형식의 본문 파싱        |
|.urlencoded() | URL로 인코딩된 본문을 파싱    |
|.raw()        | 가공되지 않은 바이너리 자료 파싱 | 
|.text()       | 텍스트 형식의 본문을 파싱      |

### Async-Handler
try-catch 문의 생략이 가능