$('.moneySlider').on('input', _.debounce(update, 50));
$('.timeSlider').on('input', _.debounce(update, 50));
update();

function update() {
    init(period, netValue, percent, monthlyRate);
}
