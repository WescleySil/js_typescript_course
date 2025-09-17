function escopoLocal() {

    const title = document.querySelector('.container h1')
    const date = new Date();
    const dateFormatted = formatDate(date);
    title.innerHTML = dateFormatted;

    function formatDate(date) {
        const day = translateDay(date.getDay())
        const dateNumber = date.getDate();
        const month = translateMonth(date.getMonth());
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
;

        return `${day}, ${dateNumber} de ${month} de ${year} ${hours}:${minutes}`;
    }

    function translateDay(day) {
        switch (day) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
            default:
                return 'Dia inválido';
        }
    }
       
    function translateMonth(month) {
        switch (month) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
            default:
                return 'Mês inválido';
        }
    }
    
}


escopoLocal();