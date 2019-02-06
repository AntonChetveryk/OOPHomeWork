function circleCircumference(circle) {
	return 2 * Math.PI * circle.radius
}

var myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);


function maps(x){
   for (var i=0; i < x.length; i++) {
				x[i] *= 2;
			}
      return x
}

function maps(arr) {
    return arr.map(function (el) {
        return el * 2;
    });
}