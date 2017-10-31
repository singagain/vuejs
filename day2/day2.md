#绑定事件
v-on:xxx来绑定事件,相当于@
```html
<button v-on:click="login()">登录</button>
//等价于
<button @click="login">登录</button>
```
而事件在methods里面声明,注意this的指向
```js
...
methods: {
	login: function() {
		var self = this;
		console.log(this.username, this.password)
		$.ajax({
			url: "http://localhost/qd1704/day2/",
			type: "GET",
			data: {
				username: self.username,
				password: self.password
			},
			success: function(data) {
				console.log(this)
				self.content = data
			}
		})
	},
	logout: function() {
		this.login();
		console.log("注销")
	}
}
...
```