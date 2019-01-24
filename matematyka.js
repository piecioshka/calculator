var okres = 100
var kwotaNetto = 109900
var rata = 1569
var oprocentowanie = 0.0799

function tki(i) {
    return ((i * 30) / 360)
}

function aki(i) {
    if (i === 0) {
        return kwotaNetto
    } else if ((i - 1) <= okres) {
        return rata * -1
    } else {
        return 0
    }
}


function fn(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie, tki(i))))
    }
}




// tworzymy array z odpowiednią ilością pól
var tabela = []

for (var i = 0; i <= okres; i++) {
    tabela[i] = {
        'tki': tki(i),
        'aki': aki(i),
        'fn': fn(i),
    }
}

var fnSum = tabela.reduce(function(total, row) {
    return total + row.fn
}, 0)

console.log(fnSum)




// function tki(ile_dni, i) {
//     //tki1 = ile_dni 1 / JEŻELI(czy_rok_przestepny 1 ;366;365)
//     //tkii = ile_dni i / JEŻELI(czy_rok_przestepny i ;366;365)

//     return []
// }




// console.log(monthlyRate(time, value));
// console.log(monthlyRate(time, value) === 10835);

//10 835