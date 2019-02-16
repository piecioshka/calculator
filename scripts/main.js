document.querySelector('.moneySlider').addEventListener('input', _.debounce(update, 50));
document.querySelector('.timeSlider').addEventListener('input', _.debounce(update, 50));
update();

function update() {
    init(period, netValue, percent, monthlyRate);
}
