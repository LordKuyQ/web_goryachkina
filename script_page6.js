document.addEventListener('DOMContentLoaded', function(arr) {
    let STOP = false;
    document.getElementById('stop').addEventListener('click', function() {
        STOP = !STOP;
        console.log(STOP);
    });

    // part I
    // t1
    function* genRandomNM(n, m) {
        while (true) {
            yield Math.floor(Math.random() * (m - n + 1)) + n;
        }
    }
    
    function displayRandomNumbers(n, m) {
        const generator = genRandomNM(n, m);
        const intervalId = setInterval(() => {
            if (STOP) {
                clearInterval(intervalId);
            } else {
                const randomNumber = generator.next().value;
                document.getElementById('answer-t1').value = randomNumber;
            }
        }, 1000);
    }
    

    let n = 10;
    let m = 25;

    document.getElementById('start-t1').addEventListener('click', function() {
        displayRandomNumbers(n, m)
    });

    // t2
    function* genPadovana() {
        let p0 = 1, p1 = 1, p2 = 1;
    yield p0;
    yield p1;
    yield p2;
    while (true) {
        const next = p1 + p0;
        yield next;
        p0 = p1;
        p1 = p2;
        p2 = next;
    }
    }
    
    function displayPadovana() {
        const generator = genPadovana();
        const intervalId = setInterval(() => {
            if (STOP) {
                clearInterval(intervalId);
            } else {
                const randomNumber = generator.next().value;
                document.getElementById('answer-t2').value = randomNumber;
            }
        }, 1000);
    }

    document.getElementById('start-t2').addEventListener('click', function() {
        displayPadovana()
    });
    // t3
    function* genSimple() {
        let n = 2;
        yield n;
        while (true) {  
        if (isPrime(n)) {
            yield n;
        }
        n++;
    }
    }
    
    function isPrime(n) {
        for (i = 2; i < Math.sqrt(n)+1; i++) {
            if (n % i == 0){
                return false;
            }
        }
        return true;
    }

    function displaySimple() {
        const generator = genSimple();
        const intervalId = setInterval(() => {
            if (STOP) {
                clearInterval(intervalId);
            } else {
                const randomNumber = generator.next().value;
                document.getElementById('answer-t3').value = randomNumber;
            }
        }, 1000);
    }

    document.getElementById('start-t3').addEventListener('click', function() {
        displaySimple()
    });
    // part II
    // t1
    document.getElementById('start-t4').addEventListener('click', function() {
    let countMap = new Map();
    let help = document.getElementById('input-t4').value;
    let letters = help.split('');

    letters.forEach(letter => {
        if (countMap.has(letter)) {
            countMap.set(letter, countMap.get(letter) + 1);
        } else {
            countMap.set(letter, 1);
        }
    });

    let result = '';
    countMap.forEach((count, letter) => {
        result += `${letter}: ${count}\n | `;
    });
    document.getElementById('answer-t4').value = result;
    });

    // t2

    function isPrime1(n) {
        for (let i = 2; i <= Math.sqrt(Number(n)) + 1; i++) {
            if (n % BigInt(i) === BigInt(0)) {
                return false;
            }
        }
        return true;
    }
    
    function getPrime(nums) {
        let count = BigInt(0);
        let num = BigInt(2);
    
        while (count < nums) {
            if (isPrime1(num)) {
                count++;
            }
            num++;
        }
        return num - BigInt(1);
    }
    
    document.getElementById('start-t5').addEventListener('click', function() {
        const num = BigInt(document.getElementById('input-t5').value);
        if (num === BigInt(0)) {
            document.getElementById('answer-t5').value = "инвалид";
            return;
        }
    
        const result = getPrime(num);
        document.getElementById('answer-t5').value = result.toString();
    });

});
