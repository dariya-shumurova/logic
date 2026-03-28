function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}

function showDay(dayId) {
    document.querySelectorAll('.day').forEach(day => {
        day.classList.remove('active');
    });

    document.getElementById(dayId).classList.add('active');
}

function showInfo(subject) {
    const info = {
        math: "Математика: логика и задачи.",
        russian: "Русский язык: грамматика.",
        english: "Английский: практика.",
        physics: "Физика: законы природы.",
        chemistry: "Химия: вещества и реакции.",
        biology: "Биология: живые организмы.",
        history: "История: события прошлого.",
        geography: "География: страны и климат.",
        cs: "Информатика: программирование.",
        pe: "Физкультура: спорт и здоровье.",
        literature: "Литература: произведения."
    };

    alert(info[subject]);
}
