const express = require('express') /*const  คือวิธีการเก็บตัวแปล เหมือนประกาศตัวแปล ประกาศตัวแปล express */

const { twig } = require('twig') 

const app = express()

app.set('view ebgine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

/*app.get('/', function(req, res) { /*สั่ง app ไปรัน ฟังชั่น แล้วส่ง hello เข้าไ*/
	//res,send('Hello')
	/*res.send('Hello')*/
app.get('/', homeController.index)
app.get('/news', newsController.index)
app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))
/*app.get('/home', function(req, res){
	res.send('home')
})*/

app.listen(8000, function(err){  
	console.log('Server is running on port 8000')  /*console คือแสดงค่าในตัวที่รัน*/
})