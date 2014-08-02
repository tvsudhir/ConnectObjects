app = {

	init: function () {
		this.connectObjects();
	},

	connectObjects: function () {
		connect(this.src, 'srcFoo', this.target, 'targetFoo');
		connect(this.src, 'srcFoo', this.target2, 'target2Foo');

		connect(this.src2, 'src2Foo', this.target, 'targetFoo');
		connect(this.src2, 'src2Foo', this.target2, 'target2Foo');

		console.log("Connected Objects.");
	},

	testConnect: function () {
		console.log('Test Connect called.');

		this.src.srcFoo('src arg1', 'src arg2');
		this.src2.src2Foo('src2 arg1', 'src2 arg2');
	},

	src : {
		srcFoo : function () {
			console.log('src arguments: ', arguments);
		}
	},

	src2: {
		src2Foo : function () {
			console.log('src2 arguments: ', arguments);
		}
	},

	target : {
		targetFoo : function () {
			console.log('target arguments: ', arguments);
		}
	},

	target2 : {
		target2Foo : function () {
			console.log('target2 arguments', arguments);
		}
	}
};
