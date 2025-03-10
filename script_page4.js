document.addEventListener('DOMContentLoaded', function() {
    // part I
    // t1
    let name;
    let admin;
    name = "Джон";
    admin = name;
    document.getElementById('answer-t1').value = admin;

    // t2
    let a = 1;
    let b = 2;
    document.getElementById('answer-t2').value = Number(a) + Number(b);

    // t3
    let resultT3 = '';
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            resultT3 += i + ' ';
        }
    }
    document.getElementById('answer-t3').value = resultT3.trim();

    // t4
    let i = 0;
    let resultT4 = '';
    while (i < 3) {
        resultT4 += ` ${i}! `;
        i++;
    }
    document.getElementById('answer-t4').value = resultT4;

    // t5
    let bolshe100 = null;
    while (bolshe100 <= 100) {
        //bolshe100 = 1;
        if (bolshe100 != null){
            document.getElementById('answer-t5').value = "НЕПРАВИЛЬНО, ПЕРЕДЕЛАЙ";
            //bolshe100 = 101;
        }
        bolshe100 = prompt("введи число большее 100", 101);
    }

    // t6
    function isprime(num) {
        if (num <= 1){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    a = 10;
    let resultT6 = '';
    for (let i = 0; i <= a; i++) {
        if (isprime(i) == true) {
            resultT6 += i + ' ';
        }
    }
    document.getElementById('answer-t6').value = resultT6.trim();

    // part II
    // Z1
    // t1
    function conv(num) {
        return Number(num.toString().split('').reverse().join(''));
    }

    a = 123;
    document.getElementById('answer-z1-t1').value = conv(a);

    // t2
    function remove_repeat(num) {
        let help = num.toString().split('');
        let unique = help.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return Number(unique.join(''));
    }

    a = 111333345677;
    document.getElementById('answer-z1-t2').value = remove_repeat(a);

    // t3
    function count_repeat(num1, num2) {
        let help = num1.toString().split('');
        let repeat = 0;
        for (let i = 0; i < help.length; i +=1 ) {
            if (help[i] == num2) {
                repeat += 1;
            }
        }
        return Number(repeat);
    }

    a = 1355567;
    b = 5;
    document.getElementById('answer-z1-t3').value = count_repeat(a, b);

    // t4
    function count_null(num) {
        let help_1 = num.toString(2);
        let help_2 = help_1.toString().split('');
        let repeat = 0;
        for (let i = 0; i < help_2.length; i +=1 ) {
            if (help_2[i] == '0') {
                repeat += 1;
            }
        }
        return Number(repeat);
    }

    a = 5;
    document.getElementById('answer-z1-t4').value = count_null(a);

    // Z2
    // t1
    function fund_not_repeat(num) {
        for (let l of num)
            if (num.indexOf(l) === num.lastIndexOf(l))
              return l;
        return null;
    }

    a = "фывфавыапрс";
    document.getElementById('answer-z2-t1').value = fund_not_repeat(a);

    // t2
    function generate_string(num) {
        let str = "";
        while (num >= 10) {
            str = str + (Math.random().toString(36).substring(2, 10 + 2));
            num = num - 10;
        }
        str = str + (Math.random().toString(36).substring(2, num + 2));
        return str;
    }

    a = 2123;
    let help = generate_string(a);
    document.getElementById('answer-z2-t2').value = help;
    document.getElementById('answer-z2-t2_count').value = help.length;
    // t3
    function return_not_repeat(num) {
        let help = num.toString().split('');
        let unique = help.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return unique.join('');
    }

    a = "позволяеткопироватьтекстиз";
    document.getElementById('answer-z2-t3').value = return_not_repeat(a);
});
