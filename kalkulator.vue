<template>
  <div id="mbank-app">
    <div style="height:200px; width: auto"></div>
    <div class="container" style="font-family: Montserrat; color: #515153">
      <div class="row" style="outline: 1px solid #ccc;
  outline-offset: 15px;">
        <div class="col-sm-7">
          <h1 style="font-size: 17px; font-weight: bold">Pierwszy kredyt gotówkowy</h1>
          <div style="font-size: 16px">Ile pieniędzy potrzebujesz?
            <span
              style="font-size: 22px; font-weight: bold; text-align: center; color: limegreen; float: right"
            >{{Math.round(money / 100) * 100}} zl</span>
          </div>
          <div class="moneyNeeded">
            <VueSlideBar v-model="money" :min="500" :max="150000" :range="sliderMoney.range">
              <template slot="tooltip" slot-scope="tooltip">
                <img src="https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/cmacn0ZG/arrow.png" width="20px" height="20px">
              </template>
            </VueSlideBar>
          </div>
          <h1 style="font-size: 16px">W jakim czasie chcesz spłacić?
            <h5 style="font-size: 22px; font-weight: bold; text-align: center; color: limegreen; float: right">{{time}} mies.</h5>
          </h1>
          <div class="timeNeeded">
            <VueSlideBar v-model="time" :min="3" :max="120" :range="sliderTime.range">
              <template slot="tooltip" slot-scope="tooltip">
                <img src="https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/cmacn0ZG/arrow.png" width="20px" height="20px">
              </template>
            </VueSlideBar>
          </div>
          <div id="insurance-checkbox">
            <div class="box">
              <label style="font-size: 15px">
                <input v-model="checked" type="checkbox"> Z ubezpieczeniem
              </label>
            </div>
          </div>
        </div>
        <div
          class="col-sm-5"
          style="border-left: 1px solid #ccc;
    border-width: 1px;
    left: 30px"
        >
          <div style="text-align: right">
            <span
              class="loanTooltip"
              style="font-size: 14px; padding-right: 15px; cursor: help"
            >Zobacz koszt kredytu</span>
          </div>
          <br>
          <h4 style="font-weight: bold; font-size: 16px; text-align: center">
            Miesięczna rata:
            <span
              class="monthlyValue"
              style="color: limegreen; font-size: 26px"
            >{{Math.round(money / time)}} zl</span>
          </h4>
          <div class="totalCost" style="padding-right: 15px">
            <div class="intValue" style="font-size: 14px">
              Oprocentowanie nominalne w skali roku:
              <span style="font-size: 16px">{{interestValue}}%</span>
            </div>
            <div
              class="commValue"
              style="font-size: 14px; border-top: 1px solid #ccc;
    border-width: 1px;"
            >
              Prowizja:
              <span style="font-size: 16px">{{commissionValue}}%</span>
            </div>
            <div
              class="loanValue"
              style="font-size: 14px; border-top: 1px solid #ccc;
    border-width: 1px;"
            >
              Calkowity koszt kredytu:
              <span
                style="font-size: 16px"
              >{{Math.round(money * (interestValue / 100))}} zł</span>
            </div>
            <div
              v-if="checked"
              class="insValue"
              style="border-top: 1px solid #ccc;
    border-width: 1px;"
            >
              Miesięczna składka ubezpieczeniowa:
              <span>{{insuranceValue}}%</span>
            </div>
          </div>
          <br>
          <div class="rrsoValue" style="text-align: center">
            <h5 style="font-weight: bold">
              RRSO:
              <span
                style="font-size: 26px; color: limegreen"
              >{{(Math.round(money / time) / 100)}}%</span>
            </h5>
            <br>
            <button
              type="button"
              name="button"
              class="btn"
              style="background-color: #d1202e; color: white; border-radius: 20px"
            >ZŁÓŻ WNIOSEK</button>
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
  methods: {
  },
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
</style>
