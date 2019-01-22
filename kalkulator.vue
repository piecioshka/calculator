<template>
  <div id="mbank-app">
    <div class="jumbotron text-center"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>Pierwszy kredyt gotówkowy</h1>
          <h2>Ile pieniędzy potrzebujesz?</h2>
          <div class="moneyNeeded">
            <input class="money">
          </div>
          <h3>W jakim czasie chcesz splacić?</h3>
          <div class="timeNeeded">
            <input class="time">
          </div>
          <label>
            <input class="insurance" type="checkbox">
            <span>Z ubezpieczeniem</span>
          </label>
        </div>
        <div class="col-sm-4">
          <h3>Miesięczna rata</h3>
          <div class="totalCost">
            <div>
              Oprocentowanie nominalne w skali roku:
              <span class="oprValue">{{interestValue}}%</span>
            </div>
            <div>
              Prowizja:
              <span class="commValue">{{commissionValue}}%</span>
            </div>
            <div>
              Calkowity koszt kredytu:
              <span class="loanValue">{{totalLoanValue}}%</span>
            </div>
            <div>
              Miesięczna skadka ubezpieczeniowa:
              <span class="insValue">{{insuranceValue}}%</span>
              (visible if insurance is checked)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    leanValue() {}
  },

  interestValue() {}
};
</script>

<style>
</style>
