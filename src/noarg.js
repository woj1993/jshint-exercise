/**
 * Created by Daniel on 2015-04-08.
 */
function foo () {

    function create() {

        return function (n) {
            if (n <= 1) {
                return 1;
            }
            return n * arguments.callee(n - 1);
        };
    }
    create();

    var result = foo()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
}