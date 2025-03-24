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
    document.getElementById('answer-t3').value = resultString;

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

    
});