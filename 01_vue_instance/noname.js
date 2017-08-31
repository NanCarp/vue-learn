var vm = new Vue({
	
});

//---
var MyComponent = Vue.extend({
	
});
var myComponentInstance = new MyComponent();

//---
var data = { a: 1 };
var vm = new Vue({
	data: data
});

vm.a === data.a // -> true

vm.a = 2;
data.a // -> 2

data.a = 3;
vm.a // -> 3

//---
var data = { a: 1 };
var vm = new Vue({
	el: '#example',
	data: data
});

vm.$data === data; // -> true
vm.$el === document.getElementById('example'); // -> true
//$watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal)) {
	// 这个回调将在 `vm.a`  改变后调用
}

//---
var vm = new Vue({
	data: {
		a: 1
	},
	created: function () {
		// `this` 指向 vm 实例
		console.log('a is: ' + this.a);
	}
});// -> "a is: 1"