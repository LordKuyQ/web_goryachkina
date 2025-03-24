document.addEventListener('DOMContentLoaded', function(arr) {
    let STOP = true;
    document.getElementById('stop').addEventListener('click', function() {
        STOP = !STOP;
    });

    // part I
    // t1
    function * genRandomNM(n,m) {
        for(let i = 0; i < 10; i++) {
            yield Math.floor(Math.random() * (m - n + 1)) + n;
        }
    }

    let n = 10;
    let m = 25;

    let help = [...genRandomNM(n,m)];
    document.getElementById('answer-t1').value = help;

    // t2

    // t3

    // part II
    // t1

    // t2












});
