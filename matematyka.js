var okres = 100
var kwotaNetto = 109900
var rata = 1569
var oprocentowanie = 0.0799
var oprocentowanie2 = 0.09382252
var oprocentowanie3 = 0.09441188
var oprocentowanie4 = 0.09441287
var oprocentowanie5 = 0.09441287


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


function fun1(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie, tki(i))))
    }
}

function deriv1(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie, tki(i) + 1)) === 0) {
        return null
    } else {
        return ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie, tki(i) + 1)))
    }
}

function fun2(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie2, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie2, tki(i))))
    }
}

function deriv2(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie2, tki(i) + 1)) === 0) {
        return null
    } else {
        return ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie2, tki(i) + 1)))
    }
}

function fun3(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie3, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie3, tki(i))))
    }
}

function deriv3(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie3, tki(i) + 1)) === 0) {
        return null
    } else {
        return ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie3, tki(i) + 1)))
    }
}

function fun4(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie4, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie4, tki(i))))
    }
}

function deriv4(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie4, tki(i) + 1)) === 0) {
        return null
    } else {
        return ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie4, tki(i) + 1)))
    }
}

function fun5(i) {
    if (i === 0) {
        return kwotaNetto
    } else if (aki(i) / Math.pow(1 + oprocentowanie5, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / (Math.pow(1 + oprocentowanie5, tki(i))))
    }
}

function deriv5(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie5, tki(i) + 1)) === 0) {
        return null
    } else {
        return ((aki(i) * tki(i)) / (Math.pow(1 + oprocentowanie5, tki(i) + 1)))
    }
}




// tworzymy array z odpowiednią ilością pól
var tabela = []

for (var i = 0; i <= okres; i++) {
    tabela[i] = {
        'tki': tki(i),
        'aki': aki(i),
        'fun1': fun1(i),
        'deriv1': deriv1(i),
        'fun2': fun2(i),
        'deriv2': deriv2(i),
        'fun3': fun3(i),
        'deriv3': deriv3(i),
        'fun4': fun4(i),
        'deriv4': deriv4(i),
        'fun5': fun5(i),
        'deriv5': deriv5(i),
    }
}

var fnSum = tabela.reduce(function (total, row) {
    return total + row.fn
}, 0)

console.log(tabela)
