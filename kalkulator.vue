<template>
  <div id="mbank-app">
    <div style="height:200px; width: auto"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <h1>Pierwszy kredyt gotówkowy</h1>
          <div class="moneyNeeded">
            Ile pieniędzy potrzebujesz?
            <span>{{Math.round(money / 100) * 100}} zl</span>
          </div>
          <div class="moneyValue">
            <VueSlideBar v-model="money" :min="500" :max="150000" :range="sliderMoney.range">
              <template slot="tooltip" slot-scope="tooltip">
                <img
                  class="handle"
                  src="https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/cmacn0ZG/arrow.png"
                >
              </template>
            </VueSlideBar>
          </div>
          <div class="timeNeeded">
            W jakim czasie chcesz spłacić?
            <span>{{time}} mies.</span>
          </div>
          <div class="timeValue">
            <VueSlideBar v-model="time" :min="3" :max="120" :range="sliderTime.range">
              <template slot="tooltip" slot-scope="tooltip">
                <img
                  class="handle"
                  src="https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/cmacn0ZG/arrow.png"
                >
              </template>
            </VueSlideBar>
          </div>
          <div id="insurance-checkbox">
            <div class="box">
              <label>
                <input v-model="checked" type="checkbox"> Z ubezpieczeniem
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div>
            <span class="loanTooltip">Zobacz koszt kredytu</span>
          </div>
          <br>
          <h4 class="monthlyRate">
            Miesięczna rata:
            <span class="monthlyValue">{{Math.round(money / time)}} zl</span>
          </h4>
          <div class="totalCost">
            <div class="intValue">
              Oprocentowanie nominalne w skali roku:
              <span>{{interestValue}}%</span>
            </div>
            <div class="commValue">
              Prowizja:
              <span>{{commissionValue}}%</span>
            </div>
            <div class="loanValue">
              Calkowity koszt kredytu:
              <span>{{Math.round(money * (interestValue / 100))}} zł</span>
            </div>
            <div v-if="checked" class="insValue">
              Miesięczna składka ubezpieczeniowa:
              <span>{{insuranceValue}}%</span>
            </div>
          </div>
          <br>
          <div class="rrsoValue">
            RRSO:
            <span>{{(Math.round(money / time) / 100)}}%</span>
            <br>
            <button type="button" name="button" class="btn">ZŁÓŻ WNIOSEK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";
export default {
  data() {
    return {
      checked: false,
      money: "",
      time: "",
      monthlyLoanValue: "",
      totalLoanValue: "",
      sliderMoney: {
        range: [
          {
            label: "500"
          },
          {
            label: "75 000"
          },
          {
            label: "150 000 zl"
          }
        ]
      },
      sliderTime: {
        range: [
          {
            label: "3"
          },
          {
            label: "60"
          },
          {
            label: "120 mies."
          }
        ]
      }
    };
  },
  methods: {},
  components: {
    VueSlideBar
  },
  computed: {
    interestValue: function() {
      if (this.money <= 5000) {
        return (this.interestValue = 9.99);
      } else if (this.money > 5000 && this.money <= 15000) {
        return (this.interestValue = 9.49);
      } else if (this.money > 15000 && this.money <= 50000) {
        return (this.interestValue = 8.99);
      } else if (this.money > 50000) {
        return (this.interestValue = 7.99);
      }
    },
    commissionValue: function() {
      if (
        this.money >= 500 &&
        this.money <= 5000 &&
        this.time >= 3 &&
        this.time <= 96
      ) {
        return (this.commissionValue = 6.99);
      } else if (
        this.money > 5000 &&
        this.money <= 15000 &&
        this.time >= 3 &&
        this.time <= 96
      ) {
        return (this.commissionValue = 6.49);
      } else if (
        this.money > 15000 &&
        this.money <= 30000 &&
        this.time >= 3 &&
        this.time <= 96
      ) {
        return (this.commissionValue = 5.49);
      } else if (this.money > 30000 && this.money <= 50000) {
        return (this.commissionValue = 4.99);
      } else if (this.money > 50000 && this.money <= 100000) {
        return (this.commissionValue = 4.49);
      } else if (this.money > 100000) {
        return (this.commissionValue = 3.99);
      } else if (this.money <= 30000 && this.time <= 96) {
        return (this.commissionValue = 5.49);
      } else if (this.time > 96) {
        return (this.commissionValue = 5.49);
      }
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.container {
  font-family: Montserrat;
  color: #515153;
}
.row {
  outline: 1px solid #ccc;
  outline-offset: 15px;
}
h1 {
  font-size: 17px;
  font-weight: bold;
}
.moneyNeeded {
  font-size: 16px;
}
.moneyNeeded > span,
.timeNeeded > span {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: limegreen;
  float: right;
}
.handle {
  width: 20px;
  height: 20px;
}
.timeNeeded {
  font-size: 16px;
}
.box > label {
  font-size: 15px;
}
.col-sm-5 {
  border-left: 1px solid #ccc;
  border-width: 1px;
  left: 30px;
}
.loanTooltip {
  font-size: 14px;
  padding-right: 15px;
  cursor: help;
  float: right;
}
.monthlyRate {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
.monthlyValue {
  color: limegreen;
  font-size: 26px;
}
.totalCost {
  padding-right: 15px;
}
.intValue {
  font-size: 14px;
}
.intValue > span,
.commValue > span,
.loanValue > span {
  font-size: 16px;
}
.commValue,
.loanValue,
.insValue {
  font-size: 14px;
  border-top: 1px solid #ccc;
  border-width: 1px;
}
.rrsoValue {
  text-align: center;
  font-weight: bold;
}
.rrsoValue > span {
  font-size: 26px;
  color: limegreen;
}
.btn {
  background-color: #d1202e;
  color: white;
  border-radius: 20px;
}
</style>
