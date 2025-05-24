// Javascript del Quizz


const questions = [ 
    {
        question: "¿Qué derecho humano reconoce el artículo 25 de la Declaración Universal de los Derechos Humanos?",
        answers: { a: "Derecho al trabajo", b: "Derecho a la seguridad social", c: "Derecho a la salud", d: "Derecho a la educación" },
        correct: "c"
    },
    {
        question: "¿Cuál es uno de los principales objetivos de la OIT?",
        answers: { a: "Supervisar conflictos laborales", b: "Reducir la jornada laboral a 35 horas", c: "Mejorar las condiciones laborales", d: "Regular la economía mundial" },
        correct: "c"
    },
    {
        question: "La estructura de la OIT es:",
        answers: { a: "Bipartita", b: "Tripartita", c: "Cuadripartita", d: "Unilateral" },
        correct: "b"
    },
    {
        question: "¿Qué convenio promueve políticas nacionales de seguridad y salud mediante diálogo social?",
        answers: { a: "Convenio 161", b: "Convenio 187", c: "Convenio 155", d: "Convenio 29" },
        correct: "b"
    },
    {
        question: "¿Cuál es el marco estratégico actual de la UE en materia de salud laboral?",
        answers: { a: "2020-2025", b: "2018-2022", c: "2021-2027", d: "2022-2030" },
        correct: "c"
    },
    {
        question: "La Ley española de Prevención de Riesgos Laborales fue aprobada en:",
        answers: { a: "1990", b: "1995", c: "2000", d: "1985" },
        correct: "b"
    },
    {
        question: "¿Qué organización elabora las “Líneas Directrices para Empresas Multinacionales”?",
        answers: { a: "ONU", b: "OCDE", c: "OMC", d: "FMI" },
        correct: "b"
    },
    {
        question: "¿Qué objetivo tiene un SGSST?",
        answers: { a: "Aumentar los beneficios de la empresa", b: "Promover la rotación laboral", c: "Ofrecer un ambiente de trabajo seguro", d: "Reducir el absentismo escolar" },
        correct: "c"
    },
    {
        question: "¿Cuál de estos ámbitos pertenece al SGSST?",
        answers: { a: "Seguridad vial", b: "Ergonomía y psicosociología aplicada", c: "Marketing corporativo", d: "Auditoría contable" },
        correct: "b"
    },
    {
        question: "¿Qué norma ha sustituido a OHSAS 18001?",
        answers: { a: "ISO 14001", b: "ISO 45001", c: "ISO 9001", d: "ISO 26000" },
        correct: "b"
    },
    {
        question: "¿Cuál es el propósito de la ISO 45001?",
        answers: { a: "Medir la calidad del producto", b: "Controlar procesos financieros", c: "Gestionar la salud y seguridad laboral", d: "Establecer precios de mercado" },
        correct: "c"
    },
    {
        question: "¿Qué organismo español está detrás de la UNE-EN ISO 45001:2023?",
        answers: { a: "Ministerio de Sanidad", b: "SEPE", c: "INSST", d: "INE" },
        correct: "c"
    },
    {
        question: "¿Qué define la RAE como “riesgo”?",
        answers: { a: "Posibilidad de éxito", b: "Incertidumbre económica", c: "Contingencia o proximidad de un daño", d: "Inseguridad ciudadana" },
        correct: "c"
    },
    {
        question: "¿Cuál de estos es un riesgo físico?",
        answers: { a: "Estrés laboral", b: "Iluminación deficiente", c: "Posturas forzadas", d: "Exposición a virus" },
        correct: "b"
    },
    {
        question: "¿Cuál es un ejemplo de riesgo ergonómico?",
        answers: { a: "Virus en laboratorio", b: "Electricidad estática", c: "Movimientos repetitivos", d: "Temperaturas extremas" },
        correct: "c"
    },
    {
        question: "¿Qué equipo ayuda a reducir el riesgo mecánico en caídas?",
        answers: { a: "Mascarilla", b: "Botas de seguridad", c: "Gafas de protección", d: "Arnés de cuerpo completo" },
        correct: "b"
    },
    {
        question: "¿Qué tipo de enfermedad puede provocar una exposición prolongada al ruido?",
        answers: { a: "Hipoacusia", b: "Leucemia", c: "Psoriasis", d: "Bronquitis" },
        correct: "a"
    },
    {
        question: "¿Qué porcentaje de las metas de los ODS están en camino de cumplirse según la ONU (2024)?",
        answers: { a: "50%", b: "35%", c: "17%", d: "75%" },
        correct: "c"
    },
    {
        question: "¿Qué ODS se enfoca en las alianzas globales?",
        answers: { a: "ODS 13", b: "ODS 17", c: "ODS 10", d: "ODS 5" },
        correct: "b"
    },
    {
        question: "¿Qué asociación española promueve alianzas para abordar desafíos globales?",
        answers: { a: "Spainsif", b: "Dircom", c: "BBVA", d: "SEPE" },
        correct: "a"
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


