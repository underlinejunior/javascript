const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];
const pageEndDate = document.querySelector('.endDate');
const pageCounter = document.querySelector('.counter');
const items = document.querySelectorAll('.counter-format  h4');

const button = document.querySelector('.buttonSelectedDate');

button.addEventListener('click', () => {
    pageEndDate.classList.remove('ops');
    pageCounter.classList.remove('none');
    pageEndDate.innerHTML = '';
    const selectedDate = document.querySelector('.selectedDate').value.split('-');
    const selectedTime = document.querySelector('.selectedTime').value.split(':');
    let futureDate = new Date(selectedDate[0], selectedDate[1] - 1, selectedDate[2], selectedTime[0], selectedTime[1]);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    let month = futureDate.getMonth();
    month = months[month];
    const weekday = weekdays[futureDate.getDay()];
    const date = futureDate.getDate();
    pageEndDate.appendChild(
        document.createTextNode(
            `A contagem acaba ${weekday}, ${date} de ${month} de ${year} às ${hours}:${minutes}.`
        ));


    //dia atual
    let theDate = new Date();
    let theYear = theDate.getFullYear();
    let theMonth = theDate.getMonth();
    let theDay = theDate.getDate();

    function TempoQueFalta() {
        const HoraAtual = new Date().getTime();
        const futureTime = futureDate.getTime();//retorna o tempo em milisegundos
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        const time = futureTime - HoraAtual;
        let days = Math.floor(time / oneDay);
        let hours = Math.floor((time % oneDay) / oneHour);
        let minutes = Math.floor((time % oneHour) / oneMinute);
        let seconds = Math.floor((time % oneMinute) / 1000);

        const values = [days, hours, minutes, seconds];
        function format(item) {
            if (item < 10) {
                return (item = `0${item}`);
            }
            return item;
        }
        items.forEach(function (item, index) {
            item.innerHTML = format(values[index]);
        });
        if (time < 0) {
            clearInterval(countdown);
            pageEndDate.innerHTML = '';
            pageEndDate.classList.add('ops');
            pageCounter.classList.add('none');
            pageEndDate.appendChild(
                document.createTextNode(
                    'Contagem encerrada!'
                ))
        }
    }
    let countdown = setInterval(TempoQueFalta, 1000);
    TempoQueFalta();
})