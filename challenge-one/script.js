(() => {
    const timerInput = document.getElementById('time-input');
    const timerButton = document.getElementById('add-timer');
    const timerList = document.getElementById('timers');

    // Отключаем кнопку добавления в случае не валидного значения
    timerInput.addEventListener('input', () => {
        timerButton.disabled = !(!!timerInput.value && timerInput.value > 0);
    })

    // Обрабатываем добавление таймера
    timerButton.addEventListener('click', () => {
        addTimer();
        timerInput.value = null;
        timerButton.disabled = true;
    })

    // Метод добавления таймера с замыканием
    function addTimer() {
        let counter = timerInput.value;

        // Кнопка остановки таймера
        const stopBtn = document.createElement('button');
        stopBtn.innerHTML = 'Остановить таймер';
        stopBtn.addEventListener('click', () => stop());

        // Кнопка удаления таймера
        const clearBtn = document.createElement('button');
        clearBtn.innerHTML = 'Удалить таймер';
        clearBtn.addEventListener('click', () => clear());

        // Контейнер счетчика
        const counterDiv = document.createElement('div');
        change(counter);

        // Таймер
        const timer = document.createElement('div');
        timer.classList.add('timer');
        timer.appendChild(counterDiv);
        timer.appendChild(stopBtn);
        timer.appendChild(clearBtn);
        timerList.appendChild(timer);

        // Удаление таймера
        function clear() {
            clearInterval(interval);
            timer.remove()
        }

        // Остановка таймера
        function stop() {
            clearInterval(interval);
        }

        // Изменение таймера
        function change(counter) {
            counterDiv.innerHTML = `${counter} сек`;
        }

        const interval = setInterval(() => {
            counter--;
            change(counter);
            if (counter <= 0) {
                clear();
            }
        }, 1000);
    }
})()

