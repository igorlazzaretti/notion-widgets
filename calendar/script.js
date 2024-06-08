function generateCalendar() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const today = now.getDate();

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    // Add month and year
    const monthYear = document.getElementById('monthYear');
    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;

    // Add day headers
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('header');
        dayHeader.innerText = day;
        calendar.appendChild(dayHeader);
    });

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add blank days for the first week
    for (let i = 0; i < firstDay; i++) {
        const blankDay = document.createElement('div');
        calendar.appendChild(blankDay);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.innerText = day;
        if (day === today) {
            dayCell.classList.add('today');
        }
        calendar.appendChild(dayCell);
    }
}

generateCalendar();
