
const start = moment()
const end = start.add(100, 'M')

const commission = 0.0399 //commissionValue.innerHTML / 100
const period = 100
const netValue = 109900
const percent = 0.0799 //interestValue.innerHTML / 100
const monthlyRate = Math.round((netValue + netValue * commission) * percent / 12 / (1 - Math.pow((1 + percent / 12), (-period))))
const insuranceMultiplier = 0.00218
const insurance = (netValue + netValue * commission) * insuranceMultiplier
const totalInsurance = insurance * period
const monthlyRateWithInsurance = Math.round((netValue + netValue * commission + totalInsurance) * percent / 12 / (1 - Math.pow((1 + percent / 12), (-period))))

function getDaysInCurrentYear(year) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        .map((i) => {
            return moment(year, 'YYYY').add(i, 'M').daysInMonth()
        })
        .reduce((total, current) => total + current, 0)
}

function tki(i) {
    const today = start.add(i, 'M')
    const currentYear = today.format('YYYY')
    return ((i * 30.41666) / getDaysInCurrentYear(currentYear))
}

function aki(i) {
    if (i === 0) {
        return netValue
    } else if (i - 1 <= period) {
        return monthlyRate * -1
    } else {
        return 0
    }
}

function fun1(i) {
    if (i === 0) {
        return netValue
    } else if (aki(i) / Math.pow(1 + percent, tki(i)) === 0) {
        return null
    } else {
        return (aki(i) / Math.pow(1 + percent, tki(i)))
    }
}

function deriv1(i) {
    if (i === 0) {
        return null
    } else if ((aki(i) * tki(i)) / Math.pow(1 + percent, tki(i) + 1) === 0) {
        return 0
    } else {
        return (-(aki(i) * tki(i)) / Math.pow(1 + percent, tki(i) + 1))
    }
}


function fun2(i, oprocentowanie2) {
    if (i === 0) {
        return netValue
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
        return netValue
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
        return netValue
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
        return netValue
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

function resultantRate1() {
    return percent - fun1Sum / deriv1Sum
}

function resultantRate2() {
    return resultantRate1() - fun2Sum / deriv2Sum
}

function resultantRate3() {
    return resultantRate2() - fun3Sum / deriv3Sum
}

function resultantRate4() {
    return resultantRate3() - fun4Sum / deriv4Sum
}

function resultantRate5() {
    return resultantRate4() - fun5Sum / deriv5Sum
}

function myRRSO() {
    return (resultantRate5() * 100).toFixed(2) + "%"
}

function init(period, netValue, percent, monthlyRate) {

    const tabela = []

    for (var i = 0; i <= period; i++) {
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
        }
    }

    const fun1Sum = tabela.reduce(function (total, row) {
        return total + row.fun1
    }, 0)

    const deriv1Sum = tabela.reduce(function (total, row) {
        return total + row.deriv1
    }, 0)

    const oprocentowanie2 = percent - (fun1Sum / deriv1Sum);


    const fun2Sum = tabela.reduce(function (total, row) {
        return total + row.fun2
    }, 0)

    const deriv2Sum = tabela.reduce(function (total, row) {
        return total + row.deriv2
    }, 0)

    const oprocentowanie3 = oprocentowanie2 - (fun2Sum / deriv2Sum)


    const fun3Sum = tabela.reduce(function (total, row) {
        return total + row.fun3
    }, 0)

    const deriv3Sum = tabela.reduce(function (total, row) {
        return total + row.deriv3
    }, 0)

    const oprocentowanie4 = oprocentowanie3 - (fun3Sum / deriv3Sum)

    const fun4Sum = tabela.reduce(function (total, row) {
        return total + row.fun4
    }, 0)

    const deriv4Sum = tabela.reduce(function (total, row) {
        return total + row.deriv4
    }, 0)

    const oprocentowanie5 = oprocentowanie4 - (fun4Sum / deriv4Sum)

    tabela.forEach((row, i) => {
        tabela[i].fun2 = fun2(i, oprocentowanie2)
        tabela[i].deriv2 = deriv2(i, oprocentowanie2)
        tabela[i].fun3 = fun3(i, oprocentowanie3)
        tabela[i].deriv3 = deriv3(i, oprocentowanie3)
        tabela[i].fun4 = fun4(i, oprocentowanie4)
        tabela[i].deriv4 = deriv4(i, oprocentowanie4)
        tabela[i].fun5 = fun5(i, oprocentowanie5)
        tabela[i].deriv5 = deriv5(i, oprocentowanie5)
    });
}
