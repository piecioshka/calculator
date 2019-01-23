<template>
  <div id="mbank-app">
    <div class="jumbotron text-center">
      <VueSlideBar
        v-model="value2"
        :min="500"
        :max="150000"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
      ></VueSlideBar>
      <h2>Value: {{value2}}</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>Pierwszy kredyt gotówkowy</h1>
          <h2>Ile pieniędzy potrzebujesz?</h2>
          <div class="moneyNeeded">
            <input v-model="moneyAmount" class="money">
          </div>
          <h3>W jakim czasie chcesz splacić?</h3>
          <div class="timeNeeded">
            <input v-model="timeAmount" class="time">
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
      moneyAmount: "100000",
      timeAmount: "100",
      checked: false,
      value2: 1,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: "red"
        }
      }
    };
  },
  methods: {},
  components: {
    VueSlideBar
  },
  computed: {
    interestValue: function() {
      if (this.moneyAmount <= 5000) {
        return (this.interestValue = 9.99);
      } else if (this.moneyAmount > 5000 && this.moneyAmount <= 15000) {
        return (this.interestValue = 9.49);
      } else if (this.moneyAmount > 15000 && this.moneyAmount <= 50000) {
        return (this.interestValue = 8.99);
      } else if (this.moneyAmount > 50000) {
        return (this.interestValue = 7.99);
      }
    },
    commissionValue: function() {
      if (
        this.moneyAmount >= 500 &&
        this.moneyAmount <= 5000 &&
        this.timeAmount >= 3 &&
        this.timeAmount <= 96
      ) {
        return (this.commissionValue = 6.99);
      } else if (
        this.moneyAmount > 5000 &&
        this.moneyAmount <= 15000 &&
        this.timeAmount >= 3 &&
        this.timeAmount <= 96
      ) {
        return (this.commissionValue = 6.49);
      } else if (
        this.moneyAmount > 15000 &&
        this.moneyAmount <= 30000 &&
        this.timeAmount >= 3 &&
        this.timeAmount <= 96
      ) {
        return (this.commissionValue = 5.49);
      } else if (this.moneyAmount > 30000 && this.moneyAmount <= 50000) {
        return (this.commissionValue = 4.99);
      } else if (this.moneyAmount > 50000 && this.moneyAmount <= 100000) {
        return (this.commissionValue = 4.49);
      } else if (this.moneyAmount > 100000) {
        return (this.commissionValue = 3.99);
      }
    }
  }
};
</script>
<style>
</style>
