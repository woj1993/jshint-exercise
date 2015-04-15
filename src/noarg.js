/**
 * Created by Daniel on 2015-04-08.
 */
function foo () {

    function create(n) {
            if (n <= 1) {
                return 1;
            }
            return n * create(n - 1);
    }
    create();

    var result = foo(create(5)); // returns 120 (5 * 4 * 3 * 2 * 1)
}