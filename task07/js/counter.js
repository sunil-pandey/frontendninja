var Counter = (function () {
	var no = 0;
	return {
		get : function() { return no; },
		increment : function() { return ++no; },
		reset : function() { no = 0; }
	};
}());

// typical usage will be 

var number = Counter.get(); // returns 0

Counter.increment(); // internally increments number

number = Counter.get() // now returns 1

Counter.reset(); // internally resets to 0

number = Counter.get(); // now returns 0