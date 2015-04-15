/**
 * Created by Daniel on 2015-04-08.
 */
// jshint maxstatements:4
    function inner() {
        var i2 = 1;
        var j2 = 1;
        return i2 + j2;
    }
function main() {

    var i = 0;
    var j = 0;

    // Function declarations count as one statement. Their bodies
    // don't get taken into account for the outer function.
    inner();
    j = i + j;
    return j; // JSHint: Too many statements per function. (5)
}