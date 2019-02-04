var period = 100;
var netValue = 109900;
var instalmentValue = 1569;
var interest = 0.0799;
var interest2 = 0.09382252;
var interest3 = 0.09441188;
var interest4 = 0.09441287;
var interest5 = 0.09441287;

function tki(i) {
  return (i * 30) / 360;
}

function aki(i) {
  if (i === 0) {
    return netValue;
  } else if (i - 1 <= period) {
    return instalmentValue * -1;
  } else {
    return 0;
  }
}

function fun1(i) {
  if (i === 0) {
    return netValue;
  } else if (aki(i) / Math.pow(1 + interest, tki(i)) === 0) {
    return null;
  } else {
    return aki(i) / Math.pow(1 + interest, tki(i));
  }
}

function deriv1(i) {
  if (i === 0) {
    return null;
  } else if (
    (aki(i) * tki(i)) / Math.pow(1 + interest, tki(i) + 1) ===
    0
  ) {
    return null;
  } else {
    return (aki(i) * tki(i)) / Math.pow(1 + interest, tki(i) + 1);
  }
}

function fun2(i) {
  if (i === 0) {
    return netValue;
  } else if (aki(i) / Math.pow(1 + interest2, tki(i)) === 0) {
    return null;
  } else {
    return aki(i) / Math.pow(1 + interest2, tki(i));
  }
}

function deriv2(i) {
  if (i === 0) {
    return null;
  } else if (
    (aki(i) * tki(i)) / Math.pow(1 + interest2, tki(i) + 1) ===
    0
  ) {
    return null;
  } else {
    return (aki(i) * tki(i)) / Math.pow(1 + interest2, tki(i) + 1);
  }
}

function fun3(i) {
  if (i === 0) {
    return netValue;
  } else if (aki(i) / Math.pow(1 + interest3, tki(i)) === 0) {
    return null;
  } else {
    return aki(i) / Math.pow(1 + interest3, tki(i));
  }
}

function deriv3(i) {
  if (i === 0) {
    return null;
  } else if (
    (aki(i) * tki(i)) / Math.pow(1 + interest3, tki(i) + 1) ===
    0
  ) {
    return null;
  } else {
    return (aki(i) * tki(i)) / Math.pow(1 + interest3, tki(i) + 1);
  }
}

function fun4(i) {
  if (i === 0) {
    return netValue;
  } else if (aki(i) / Math.pow(1 + interest4, tki(i)) === 0) {
    return null;
  } else {
    return aki(i) / Math.pow(1 + interest4, tki(i));
  }
}

function deriv4(i) {
  if (i === 0) {
    return null;
  } else if (
    (aki(i) * tki(i)) / Math.pow(1 + interest4, tki(i) + 1) ===
    0
  ) {
    return null;
  } else {
    return (aki(i) * tki(i)) / Math.pow(1 + interest4, tki(i) + 1);
  }
}

function fun5(i) {
  if (i === 0) {
    return netValue;
  } else if (aki(i) / Math.pow(1 + interest5, tki(i)) === 0) {
    return null;
  } else {
    return aki(i) / Math.pow(1 + interest5, tki(i));
  }
}

function deriv5(i) {
  if (i === 0) {
    return null;
  } else if (
    (aki(i) * tki(i)) / Math.pow(1 + interest5, tki(i) + 1) ===
    0
  ) {
    return null;
  } else {
    return (aki(i) * tki(i)) / Math.pow(1 + interest5, tki(i) + 1);
  }
}

function resultantRate1(i) {
  return interest - fun1Sum / deriv1Sum;
}

function resultantRate2(i) {
  return resultantRate1(i) - fun2Sum / deriv2Sum;
}

function resultantRate3(i) {
  return resultantRate2(i) - fun3Sum / deriv3Sum;
}

function resultantRate4(i) {
  return resultantRate3(i) - fun4Sum / deriv4Sum;
}

function resultantRate5(i) {
  return resultantRate4(i) - fun5Sum / deriv5Sum;
}

function myRRSO(i) {
  return resultantRate5(i);
}

//suma_funkcja1 = suma (funkcja1 1 + funkcja1 2 + … + funkcja1 i )
//suma_pochodna1 = suma(pochodna1 2 + … pochodna1 i )
//stopa_wynikowa2 = stopa_wynikowa1 - suma_funkcja2/ suma_pochodna2

var tabela = [];

for (var i = 0; i <= period; i++) {
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

var fun1Sum = tabela.reduce(function (total, row) {
  return total + row.fun1;
}, 0);

var deriv1Sum = tabela.reduce(function (total, row) {
  return total + row.deriv1;
}, 0);

var fun2Sum = tabela.reduce(function (total, row) {
  return total + row.fun2;
}, 0);

var deriv2Sum = tabela.reduce(function (total, row) {
  return total + row.deriv2;
}, 0);

var fun3Sum = tabela.reduce(function (total, row) {
  return total + row.fun3;
}, 0);

var deriv3Sum = tabela.reduce(function (total, row) {
  return total + row.deriv3;
}, 0);

var fun4Sum = tabela.reduce(function (total, row) {
  return total + row.fun4;
}, 0);

var deriv4Sum = tabela.reduce(function (total, row) {
  return total + row.deriv4;
}, 0);

var fun5Sum = tabela.reduce(function (total, row) {
  return total + row.fun5;
}, 0);

var deriv5Sum = tabela.reduce(function (total, row) {
  return total + row.deriv5;
}, 0);

console.log(tabela);
