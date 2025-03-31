document.addEventListener('DOMContentLoaded', function(arr) {
    // part I
    // t1
    function maxDifference(arr) {
        let min = arr[0];
        let max = arr[0];
        let maxDiff = arr[1] - arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        if (max - min > maxDiff) {
            maxDiff = max - min;
        }

        return maxDiff;
    }

    let array = [2, 3, 10, 6, 4, 8, 1];
    document.getElementById('answer-t1').value = maxDifference(array);

    // t2
    
    function return_not_repeat(arr) {
        let help = arr;
        let unique = help.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return unique;
    }

    array = [2, 10, 10, 6, 6, 8, 8];
    document.getElementById('answer-t2').value = return_not_repeat(array);

    // t3

    function return_true(arr) {
        let help = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].idDone == true) {
                help.push( arr[i] ) ;
            }
        }

        return help;
    }

    array = [ {id: 1, idDone: true}, 
        {id: 2, idDone: false},
        {id: 3, idDone: true} ];
    
    let resultString = JSON.stringify(return_true(array));
    document.getElementById('answer-t3-page5').value = resultString;

    // Z2
    // t1

    function moreThanA(arr, a) {
        let help = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > a) {
                help.push( arr[i] ) ;
            }
        }

        return help;
    }

    let a = 2;
    array = [ 1, 4, 6, 3, 2 ];
    
    document.getElementById('answer-t4').value = moreThanA(array, a);

    // t2 

    function flatMassive(arr) {
        let help = [];
        for (let i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                help = help + arr[i] + ",";
            }
            else {
                help = help + arr[i];
            }
        }
        return help;
    }

    array = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
    
    document.getElementById('answer-t5').value = flatMassive(array);
    
    // t3

    function pairSumm(arr) {
        let help = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == 0) {
                    console.log(arr[i], arr[j])
                    help = help + 1;
                }
            }
        }
        return help;
    }

    array = [-1, 2, 4, 7, -4, 1, -2];
    
    document.getElementById('answer-t6').value = pairSumm(array);

    // t4

    function setSumm(arr) {
        let help = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                for (let z = j + 1; z < arr.length; z++)
                if (arr[i] + arr[j] + arr[z] == 0) {
                    console.log(arr[i], arr[j], arr[z])
                    help = help + 1;
                }
            }
        }
        return help;
    }

    array = [-7, 12, 4, 6, -4, -12, 0];
    
    document.getElementById('answer-t7').value = setSumm(array);
});