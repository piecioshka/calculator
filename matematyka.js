const moment = require('moment')

const start = moment()
const end = start.add(100, 'M')


var okres = 81
var kwotaNetto = 6700
var oprocentowanie = 0.0799 //interestValue.innerHTML / 100

function getDaysInCurrentYear(year) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            return moment(year, 'YYYY').add(i, 'M').daysInMonth()
        })
        .reduce((total, current) => total + current, 0)
}

function tki(i) {
    let today = start.add(i, 'M')
    let currentYear = today.format('YYYY')

    return ((i * 30.41666) / getDaysInCurrentYear(currentYear))
}

function aki(i) {
    var rata = 120
    if (i === 0) {
        return kwotaNetto
    } else if (i - 1 <= okres) {
        return rata * -1
    } else {
        return 0
    }
}

function fun1(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / Math.pow(1 + oprocentowanie, tki(i)))
    }
}

function deriv1(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / Math.pow(1 + oprocentowanie, tki(i) + 1) === 0) {
        return 0
    } else {
        return (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie, tki(i) + 1))
    }
}


function fun2(i, oprocentowanie2) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie2, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / Math.pow(1 + oprocentowanie2, tki(i)))
    }
}

function deriv2(i, oprocentowanie2) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie2, tki(i) + 1) === 0) {
        return null
    } else {
        return (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie2, tki(i) + 1))
    }
}

function fun3(i, oprocentowanie3) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie3, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie3, tki(i));
    }
}

function deriv3(i, oprocentowanie3) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie3, tki(i) + 1) === 0) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie3, tki(i) + 1)
    }
}

function fun4(i, oprocentowanie4) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie4, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie4, tki(i))
    }
}

function deriv4(i, oprocentowanie4) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie4, tki(i) + 1) === 0) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie4, tki(i) + 1)
    }
}

function fun5(i, oprocentowanie5) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie5, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie5, tki(i));
    }
}

function deriv5(i, oprocentowanie5) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie5, tki(i) + 1) === 0) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie5, tki(i) + 1)
    }
}

function resultantRate1(i) {
    return oprocentowanie - fun1Sum / deriv1Sum
}

function resultantRate2(i) {
    return resultantRate1(i) - fun2Sum / deriv2Sum
}

function resultantRate3(i) {
    return resultantRate2(i) - fun3Sum / deriv3Sum
}

function resultantRate4(i) {
    return resultantRate3(i) - fun4Sum / deriv4Sum
}

function resultantRate5(i) {
    return resultantRate4(i) - fun5Sum / deriv5Sum
}

function myRRSO(i) {
    return (resultantRate5(i) * 100).toFixed(2) + "%"
}

//suma_funkcja1 = suma (funkcja1 1 + funkcja1 2 + … + funkcja1 i )
//suma_pochodna1 = suma(pochodna1 2 + … pochodna1 i )
//stopa_wynikowa2 = stopa_wynikowa1 - suma_funkcja2/ suma_pochodna2

var tabela = []

for (var i = 0; i <= okres; i++) {
    tabela[i] = {
        tki: tki(i),
        aki: aki(i),
        fun1: fun1(i),
        deriv1: deriv1(i),
        // fun2: fun2(i),
        // deriv2: deriv2(i),
        // fun3: fun3(i),
        // deriv3: deriv3(i),
        // fun4: fun4(i),
        // deriv4: deriv4(i),
        // fun5: fun5(i),
        // deriv5: deriv5(i),
    };
}

var fun1Sum = tabela.reduce(function(total, row) {
    return total + row.fun1
}, 0);

var deriv1Sum = tabela.reduce(function(total, row) {
    return total + row.deriv1
}, 0);

let oprocentowanie2 = oprocentowanie - (fun1Sum / deriv1Sum);

tabela.forEach((row, i) => {
    tabela[i].fun2 = fun2(i, oprocentowanie2)
    tabela[i].deriv2 = deriv2(i, oprocentowanie2)
})


var fun2Sum = tabela.reduce(function(total, row) {
    return total + row.fun2
}, 0);

var deriv2Sum = tabela.reduce(function(total, row) {
    return total + row.deriv2
}, 0);

let oprocentowanie3 = oprocentowanie2 - (fun2Sum / deriv2Sum)

tabela.forEach((row, i) => {
    tabela[i].fun3 = fun3(i, oprocentowanie3)
    tabela[i].deriv3 = deriv3(i, oprocentowanie3)
})


var fun3Sum = tabela.reduce(function(total, row) {
    return total + row.fun3
}, 0);

var deriv3Sum = tabela.reduce(function(total, row) {
    return total + row.deriv3
}, 0);

let oprocentowanie4 = oprocentowanie3 - (fun3Sum / deriv3Sum)

tabela.forEach((row, i) => {
    tabela[i].fun4 = fun4(i, oprocentowanie4)
    tabela[i].deriv4 = deriv4(i, oprocentowanie4)
})

var fun4Sum = tabela.reduce(function(total, row) {
    return total + row.fun4
}, 0);

var deriv4Sum = tabela.reduce(function(total, row) {
    return total + row.deriv4
}, 0);

let oprocentowanie5 = oprocentowanie4 - (fun4Sum / deriv4Sum)

tabela.forEach((row, i) => {
    tabela[i].fun5 = fun5(i, oprocentowanie5)
    tabela[i].deriv5 = deriv5(i, oprocentowanie5)
})

var fun5Sum = tabela.reduce(function(total, row) {
    return total + row.fun5
}, 0);

var deriv5Sum = tabela.reduce(function(total, row) {
    return total + row.deriv5
}, 0);

console.log(myRRSO(i))
