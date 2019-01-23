<template>
  <div id="mbank-app">
    <div class="jumbotron text-center"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>Pierwszy kredyt gotówkowy</h1>
          <h2>Ile pieniędzy potrzebujesz?</h2>
          <div class="moneyNeeded">
            <VueSlideBar
              v-model="money"
              :min="500"
              :max="150000"
              :processStyle="slider.processStyle"
              :range="slider.range"
            ></VueSlideBar>
            <h2>{{money}} zl</h2>
          </div>
          <h3>W jakim czasie chcesz splacić?</h3>
          <div class="timeNeeded">
            <VueSlideBar
              v-model="time"
              :min="3"
              :max="120"
              :processStyle="slider.processStyle"
              :range="slider2.range"
            ></VueSlideBar>
            <h2>{{time}} mies.</h2>
          </div>
          <div id="insurance-checkbox">
            <div class="box">
              <label>
                <input v-model="checked" type="checkbox">Z ubezpieczeniem
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <h3>
            Miesięczna rata
            <span class="monthlyValue">{{monthlyLoanValue}}</span>
          </h3>
          <div class="totalCost">
            <div>
              Oprocentowanie nominalne w skali roku:
              <span class="intValue">{{interestValue}}%</span>
            </div>
            <div>
              Prowizja:
              <span class="commValue">{{commissionValue}}%</span>
            </div>
            <div>
              Calkowity koszt kredytu:
              <span class="loanValue">{{totalLoanValue}}%</span>
            </div>
            <div v-if="checked" class="insValue">
              Miesięczna skadka ubezpieczeniowa:
              <span>{{insuranceValue}}%</span>
            </div>
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
      slider: {
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
      slider2: {
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
      } else if (this.money > 30000 && this.time >= 97) {
        return (this.commissionValue = 5.49);
      } else if (this.time >= 97) {
        return (this.commissionValue = 5.49);
      }
    }
  }
};
</script>
<style>
</style>
