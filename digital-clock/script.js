function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = clock;
}

function updateDate() {
    const now = new Date();
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const weekDay = daysOfWeek[now.getDay()];
    const date = `${weekDay}, ${day}/${month}/${year}`;
    document.getElementById('date').innerText = date;
}

function updateTime() {
    updateClock();
    updateDate();
}

setInterval(updateTime, 1000);
updateTime();
