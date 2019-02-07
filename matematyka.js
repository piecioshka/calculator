var okres = 100
var kwotaNetto = 109900
var rata = 1569
var oprocentowanie = 0.0799 //powinno być {{interestValue / 100}}
var oprocentowanie2 = 0.09382252
var oprocentowanie3 = 0.09441188
var oprocentowanie4 = 0.09441287
var oprocentowanie5 = 0.09441287



function getDaysInCurrentYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return 366
    } else return 365
}


function tki(i) {
    var date = new Date
    var currentYear = date.getFullYear()
    return (i * 30.41666) / getDaysInCurrentYear(currentYear)
        //return (i * 30) / 360
}

function aki(i) {
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
        return aki(i) / Math.pow(1 + oprocentowanie, tki(i))
    }
}

function deriv1(i) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie, tki(i) + 1) ===
        0
    ) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie, tki(i) + 1)
    }
}

function fun2(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie2, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie2, tki(i))
    }
}

function deriv2(i) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie2, tki(i) + 1) ===
        0
    ) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie2, tki(i) + 1)
    }
}

function fun3(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie3, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie3, tki(i))
    }
}

function deriv3(i) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie3, tki(i) + 1) ===
        0
    ) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie3, tki(i) + 1)
    }
}

function fun4(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie4, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie4, tki(i))
    }
}

function deriv4(i) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie4, tki(i) + 1) ===
        0
    ) {
        return null
    } else {
        return -(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie4, tki(i) + 1)
    }
}

function fun5(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie5, tki(i)) === 0) {
        return null
    } else {
        return aki(i) / Math.pow(1 + oprocentowanie5, tki(i))
    }
}

function deriv5(i) {
    if (i === 0) {
        return null
    } else if (-(aki(i) * tki(i)) / Math.pow(1 + oprocentowanie5, tki(i) + 1) ===
        0
    ) {
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
    return resultantRate5(i)
}

//suma_funkcja1 = suma (funkcja1 1 + funkcja1 2 + … + funkcja1 i )
//suma_pochodna1 = suma(pochodna1 2 + … pochodna1 i )
//stopa_wynikowa2 = stopa_wynikowa1 - suma_funkcja2/ suma_pochodna2

// tworzymy array z odpowiednią ilością pól
var tabela = []

for (var i = 0; i <= okres; i++) {
    tabela[i] = {
        tki: tki(i),
        aki: aki(i),
        fun1: fun1(i),
        deriv1: deriv1(i),
        fun2: fun2(i),
        deriv2: deriv2(i),
        fun3: fun3(i),
        deriv3: deriv3(i),
        fun4: fun4(i),
        deriv4: deriv4(i),
        fun5: fun5(i),
        deriv5: deriv5(i),
        resultantRate1: resultantRate1(i),
        resultantRate2: resultantRate2(i),
        resultantRate3: resultantRate3(i),
        resultantRate4: resultantRate4(i),
        resultantRate5: resultantRate5(i),
        myRRSO: myRRSO(i)
    };
}

var fun1Sum = tabela.reduce(function(total, row) {
    return total + row.fun1
}, 0);

var deriv1Sum = tabela.reduce(function(total, row) {
    return total + row.deriv1
}, 0);

var fun2Sum = tabela.reduce(function(total, row) {
    return total + row.fun2
}, 0);

var deriv2Sum = tabela.reduce(function(total, row) {
    return total + row.deriv2
}, 0);

var fun3Sum = tabela.reduce(function(total, row) {
    return total + row.fun3
}, 0);

var deriv3Sum = tabela.reduce(function(total, row) {
    return total + row.deriv3
}, 0);

var fun4Sum = tabela.reduce(function(total, row) {
    return total + row.fun4
}, 0);

var deriv4Sum = tabela.reduce(function(total, row) {
    return total + row.deriv4
}, 0);

var fun5Sum = tabela.reduce(function(total, row) {
    return total + row.fun5
}, 0);

var deriv5Sum = tabela.reduce(function(total, row) {
    return total + row.deriv5
}, 0);

console.log(getDaysInCurrentYear((new Date).getFullYear()))
