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

        // t3
        function delay(N) {
            return new Promise((resolve) => {
                setTimeout(resolve, N*1000);
            });
        }
        
        document.getElementById('start-t3').addEventListener('click', function() {
            console.log("click");

            n = document.getElementById('input-t3').value;

            delay(n).then(() => {
                document.getElementById('answer-t3').value = `Прошло ${n} секунд`;
            });
            });

        // t4
        
        document.getElementById('start-t4').addEventListener('click', function() {
            console.log("click");

            n = document.getElementById('input-t4').value;

            function updN(n) {
                if (n < 0) return;
        
                document.getElementById('answer-t4').value = `Счетчик равен ${n}`;
                delay(1).then(() => {
                    updN(n - 1);
                });
            }
        
            updN(n);
            });

        // t5

        class HttpError extends Error {
            constructor(response) {
              super(`${response.status} for ${response.url}`);
              this.name = 'HttpError';
              this.response = response;
            }
          }
          
          function loadJson(url) {
            return fetch(url)
              .then(response => {
                if (response.status == 200) {
                  return response.json();
                } else {
                  throw new HttpError(response);
                }
              })
          }
          
          function getGithubUser() {
            let name = document.getElementById('input-t5').value;
          
            return loadJson(`https://api.github.com/users/${name}`)
              .then(user => {
                document.getElementById('answer-t5').value = user.repos_url;
                console.log("log1");
                return user.repos_url;
              })
              .catch(err => {
                if (err instanceof HttpError && err.response.status == 404) {
                  document.getElementById('answer-t5').value = "Такого пользователя нет";
                  return demoGithubUser();
                } else {
                  throw err;
                }
              });
          }

          function getGithubRepos(reposUrl) {
            return loadJson(reposUrl)
              .then(repos => {
                if (repos.length > 0) {
                    document.getElementById('answer-2-t5').value = `Реп-ий: ${repos[0].full_name}.`;
                  } 
                else {
                    document.getElementById('answer-2-t5').value = "Нет";
                  }
                return repo;
              })
              .catch(err => {
                if (err instanceof HttpError && err.response.status == 404) {
                  document.getElementById('answer-2-t5').value = "Такого json нет";
                  return demoGithubUser();
                } else {
                  throw err;
                }
              });
          }
          
          
          document.getElementById('start-t5').addEventListener('click', function() {
            console.log("click");
            getGithubUser()
                .then(reposUrl => {
                return getGithubRepos(reposUrl);
                })
                .catch(err => {
                console.error("Error:", err);
                });
            });

        // t6


          async function loadJson_t6(url) {
            const response = await fetch(url);
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        }
          
          async function getGithubUser_t6() {
            let name = prompt("Введите логин?", "lordkuyq");
          
            const response = await loadJson_t6(`https://api.github.com/users/${name}`);
              try{
                console.log(response);
                  alert(`Полное имя: ${response.login}.`);
                }
              catch(err) {
                if (err instanceof HttpError && err.response.status == 404) {
                  alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                  return demoGithubUser();
                } else {
                  throw err;
                }
              }
          }

          document.getElementById('start-t6').addEventListener('click', function() {
              getGithubUser_t6();
            });
            
});
