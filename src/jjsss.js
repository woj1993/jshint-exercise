/**
 * Created by seba on 08.04.15.
 */
/*jslint forin: true */
/*global doSomething */
var arr = [],
    i;

for (i in arr) {
    doSomething(arr[i]);
}

/*jshint freeze: true */
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
