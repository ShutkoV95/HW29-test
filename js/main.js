let tests = [  
    ['', ''],
    ['', ''],
    ['', ''],
];

//tests.push(['', '']);

let testCount = tests.length;

while (true) {
    let choice = prompt('1. Ввод условий теста; 2. Пройти тест; 3. Выход.'); 
    if (choice == '1') {
        addTests();
        writeTest();
        passTest();
    } else if (choice == '2') {
        passTest();
    } else if (choice == '3') {
        userExit();
        break;
    }
}

// ------------ FUNCTIONS --------------------

function writeTest() {
    while (true) {
        if (confirm('Хотие ввести тесты?')) {
            for (let i = 0; i < testCount; i++ ) {
                tests[i][0] = (prompt('Введите задание для тестов, например: 2+2=4'));
                tests[i][1] = (confirm('Это будет правильный ответ? '));
                }
        }
        alert('Отлично, теперь можете пройти тесты !!!');
        console.log('Отлично, теперь можете пройти тесты !!!');
        break;
    }
}

function addTests() {
    while(true) {
        let addTest = confirm('Хотие добавить ещё количество  тесты?');
        if(!addTest) {
        break;
        }
        tests.push(['', '']);
        console.log(tests);
        console.log(tests.length);
    }
}

function passTest() {
    while (true) {
        if (confirm('Хотие пройти тест?')) {
            oneTest();
        }
        alert('До свидания !!!');
        console.log('До свидания !!!'); 
        break;
    }
}

function oneTest() {
    let correctAnswerCount = 0;
    for (let i = 0; i < testCount; i++ ) {
        let qst = tests[i][0] + ' ?';
        let answ = tests[i][1];
    
        let userAnsw = confirm(qst);
    
        if (answ == userAnsw) {
            console.log('Правильно');
            correctAnswerCount ++;
        } else {
            console.log('Неправильно');
        }
    }
    alert(`Результаты тестов: ${correctAnswerCount} / ${testCount}`);
}

function userExit() {
    alert('Выход');
}