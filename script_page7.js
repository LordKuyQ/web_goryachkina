document.addEventListener('DOMContentLoaded', function(arr) {
    let STOP = false;
    document.getElementById('stop').addEventListener('click', function() {
        STOP = !STOP;
        console.log(STOP);
    });

    // part I
    // t1
    
    function counter(n) {
        const intervalId = setInterval(() => {
            if (STOP) {
                clearInterval(intervalId);
            } else {
                if (n >= 0) {
                    document.getElementById('answer-t1').value = n;
                    n = n-1;
                }
            }
        }, 1000);
    }

    document.getElementById('start-t1').addEventListener('click', function() {
        let n = document.getElementById('input-t1').value;
        counter(n)});

    // t2
    function createCounter(n){
        let counter_ = {
            timerId: null,
            timer: n,
            digit: 0,
            pause: true
          };
          
          counter_.start = function() {
            if (counter_.timerId) {
                clearInterval(counter_.timerId);
            }
            counter_.timerId = setInterval(() => {
                if (counter_.pause) {
                    document.getElementById('answer-t2').value = counter_.digit;
                    counter_.digit++;
                }
            }, counter_.timer);
          };

          counter_.paused = function() {
            counter_.pause = !counter_.pause
          };

          counter_.stop = function() {
            if (counter_.timerId) {
                clearInterval(counter_.timerId);
                counter_.timerId = null;
            }
            counter_.digit = 0;
          };

          
        return counter_;
    }

    let timer2;
    document.getElementById('start-t2').addEventListener('click', function() {
        console.log("click");
        let n = document.getElementById('input-t2').value;
        timer2 = createCounter(n) });

        document.getElementById('t2-start').addEventListener('click', function() {
            console.log("click");
            if (timer2) {
                timer2.start();
            }
        });
        
        document.getElementById('t2-pause').addEventListener('click', function() {
            console.log("click");
            if (timer2) {
                timer2.paused();
            }
        });
        
        document.getElementById('t2-stop').addEventListener('click', function() {
            console.log("click");
            if (timer2) {
                timer2.stop();
            }
        });
});
