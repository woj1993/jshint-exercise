/* jshint funcscope: false */
function test(x) {
	if (true) {
		x = 0;
	}

	x += 1; // Default: 'x' used out of scope.
	// No warning when funcscope:true
}