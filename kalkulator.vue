<template>
  <div id="mbank-app">
    <div class="jumbotron text-center"></div>
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
          <h3>Miesięczna rata</h3>
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
export default {
  data() {
    return {
      moneyAmount: "",
      timeAmount: "",
      checked: false
    };
  },
  methods: {},
  computed: {
    interestValue: function() {
      return this.moneyAmount * this.timeAmount * 0.01;
    },
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
    }
  }
};
</script>
<style>
</style>
