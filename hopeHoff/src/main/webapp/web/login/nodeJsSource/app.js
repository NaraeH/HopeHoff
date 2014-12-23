/**
 * 노드 프로젝트 이름은 loginCheck로 만들었으며 이 파일을 복사시에
 * loginCheck 밑에 javaScriptScoure File을 만든다. 이름은 app.js로 그리고 이 내용을 가져다
 * 붙이고 사용하면된다.
 * 
 * db키고 난 후, Run As 에서 -> Node Application으로 실행 시키면 된다.
 */


/*
 * 내 패키지 제이슨임
 * 
{
  "name": "loginCheck",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "3.2.6",
    "jade": "*"
  }
}

 */


var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();



var mysql = require('mysql');
var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'study',
    password : 'study',
    database:'studydb'
});




// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


app.get('/loginCheck', function(request,response){
	//에이잭스 : 비동기방식으로 서버에 요청받는것
	// : 나한테 온 요청 다 받것슴
	response.setHeader("Access-Control-Allow-Origin", "*");
    var query = connection.query('select UID from MEMBERS WHERE UID=?',[request.param('id')],function(err,result){
    	
    	console.log(result);
    	
    	if(result.length){
    		console.log('아이디 있음ㅠㅠ');	
    		response.send({
    			"result":"중복된 아이디가 있습니다."
    		});
    	}else{
    		console.log('아이디 없음!!!!!');
    		response.send({
    			"result":"사용가능한 아이디입니다."
    		});
    	}
    });
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
