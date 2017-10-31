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