// Javascript del Quizz


const questions = [ 
    {
        question: "¿Qué derechos fundamentales se tratan en el tema 17?",
        answers: { a: "Educación, trabajo y vivienda", b: "Alimentación, educación y salud", c: "Salud, empleo y justicia", d: "Alimentación, vivienda y transporte" },
        correct: "b"
    },
    {
        question: "¿Qué documento reconoce el derecho a la alimentación en su artículo 25?",
        answers: { a: "PIDESC", b: "Constitución de la OMS", c: "Declaración Universal de Derechos Humanos", d: "Carta de San Francisco" },
        correct: "c"
    },
    {
        question: "¿Cuál es una de las metas del ODS 2?",
        answers: { a: "Garantizar la alfabetización", b: "Reducir la contaminación", c: "Eliminar todas las formas de malnutrición", d: "Erradicar enfermedades tropicales" },
        correct: "c"
    },
    {
        question: "¿Qué convención menciona la relación entre mujer, pobreza y alimentación?",
        answers: { a: "Convención sobre los Derechos del Niño", b: "Convención contra la Tortura", c: "Convención sobre la eliminación de todas las formas de discriminación contra la mujer", d: "Carta Africana de Derechos Humanos" },
        correct: "c"
    },
    {
        question: "¿Qué porcentaje de la población mundial sufría hambre crónica en 2022?",
        answers: { a: "4,5%", b: "9,2%", c: "13%", d: "21%" },
        correct: "b"
    },
    {
        question: "¿Qué garantiza el derecho a la educación?",
        answers: { a: "Acceso a tecnología", b: "Igualdad de género", c: "Educación de calidad, gratuita y universal", d: "Acceso libre a internet" },
        correct: "c"
    },
    {
        question: "¿Qué documento recoge el derecho a la educación en su artículo 26?",
        answers: { a: "PIDESC", b: "Carta de Derechos Sociales", c: "Declaración Universal de Derechos Humanos", d: "Constitución Española" },
        correct: "c"
    },
    {
        question: "¿Qué ODS está centrado en la educación?",
        answers: { a: "ODS 2", b: "ODS 3", c: "ODS 4", d: "ODS 6" },
        correct: "c"
    },
    {
        question: "¿Cuál es uno de los objetivos del ODS 4?",
        answers: { a: "Reducir enfermedades", b: "Acceso a educación preescolar de calidad", c: "Acceso al agua potable", d: "Reducción de emisiones" },
        correct: "b"
    },
    {
        question: "¿Qué centro promueve la educación y sostenibilidad en Galicia?",
        answers: { a: "Centro Europeo de Educación Marina", b: "Museo Pescanova BioMarine Center", c: "Centro Atlántico de Educación Acuática", d: "Campus Azul de Vigo" },
        correct: "b"
    },
    {
        question: "¿Qué es el derecho a la salud según el tema?",
        answers: { a: "Acceso a medicamentos gratuitos", b: "Ausencia de enfermedades", c: "Bienestar físico, mental y social", d: "Tener seguro médico" },
        correct: "c"
    },
    {
        question: "¿Qué documento reconoce el derecho a la salud en su artículo 12?",
        answers: { a: "PIDESC", b: "DUDH", c: "OMS", d: "UNESCO" },
        correct: "a"
    },
    {
        question: "¿Qué iniciativa busca el acceso equitativo global a las vacunas?",
        answers: { a: "UNICEF+", b: "GlobalVax", c: "COVAX", d: "WorldVaccineNet" },
        correct: "c"
    },
    {
        question: "¿Cuántas dosis de vacunas distribuyó COVAX hasta mediados de 2023?",
        answers: { a: "Más de 800 millones", b: "Más de 1,7 mil millones", c: "Exactamente 2 mil millones", d: "500 millones" },
        correct: "b"
    },
    {
        question: "¿Qué artículo de la Constitución Española reconoce el derecho a la salud?",
        answers: { a: "Art. 15", b: "Art. 27", c: "Art. 43", d: "Art. 50" },
        correct: "c"
    },
    {
        question: "¿Cuál es una de las metas del ODS 3?",
        answers: { a: "Poner fin al hambre", b: "Reducir la mortalidad materna", c: "Eliminar desigualdad educativa", d: "Crear empleo estable" },
        correct: "b"
    },
    {
        question: "¿Qué organismo lidera la iniciativa COVAX junto con la OMS?",
        answers: { a: "FAO", b: "UNESCO", c: "GAVI", d: "UNICEF" },
        correct: "c"
    },
    {
        question: "¿Qué factor NO forma parte del derecho a la salud?",
        answers: { a: "Acceso a agua potable", b: "Condiciones laborales adecuadas", c: "Educación religiosa", d: "Saneamiento básico" },
        correct: "c"
    },
    {
        question: "¿Qué continente tiene la mayor proporción de personas con hambre?",
        answers: { a: "Asia", b: "África", c: "América Latina", d: "Europa" },
        correct: "b"
    },
    {
        question: "¿Cuál es una medida propuesta para asegurar la educación inclusiva según la UNESCO?",
        answers: { a: "Enseñanza en línea obligatoria", b: "Uniformes gratuitos", c: "Adaptación de colegios para personas con discapacidad", d: "Reducción del número de docentes" },
        correct: "c"
    }
];



    









// Función para mezclar las preguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para construir el quiz
function buildQuiz() {
    shuffle(questions);
    const selectedQuestions = questions.slice(0, 20); // Selecciona las primeras 20 preguntas
    const output = [];

    selectedQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    document.getElementById('quiz').innerHTML = output.join('');
}

// Función para mostrar resultados
function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;
    const selectedQuestions = questions.slice(0, 20); // Asegúrate de que coincida con las preguntas seleccionadas

    selectedQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Resaltar la respuesta correcta e incorrecta
        const inputs = answerContainer.querySelectorAll('input');
        inputs.forEach(input => {
            // Si la respuesta es correcta
            if (input.value === currentQuestion.correct) {
                input.parentElement.style.color = 'green'; // Cambia el color a verde
            }
            // Si la respuesta es incorrecta y se seleccionó
            else if (input.value === userAnswer) {
                input.parentElement.style.color = 'red'; // Cambia el color a rojo
            }
        });

        // Contar puntuación
        if (userAnswer === currentQuestion.correct) {
            score++;
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Tu puntuación es ${score} de 20`;
    resultElement.style.opacity = 1;

    // Efecto si el usuario obtiene más de 7 puntos
    if (score > 7) {
        resultElement.classList.add('correct');
        document.body.style.backgroundColor = "#b2ffb2"; // Fondo verde claro
        alert("¡Increíble! ¡Eres un verdadero fan de Dragon Ball Z!");
    } else {
        document.body.style.backgroundColor = "#ffcccc"; // Fondo rojo claro
    }
}

// Llamadas iniciales
buildQuiz();
document.getElementById('submit').addEventListener('click', showResults);


