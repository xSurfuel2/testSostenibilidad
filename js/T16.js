// Javascript del Quizz


const questions = [ 
    {
        question: "¿Qué es la desigualdad según el contenido del tema?",
        answers: { a: "El reparto equitativo de los recursos", b: "La ausencia de diferencias entre personas", c: "La disparidad en el acceso a recursos y oportunidades", d: "Un fenómeno exclusivo de países en desarrollo" },
        correct: "c"
    },
    {
        question: "¿Qué tipo de desigualdad se refiere a las diferencias salariales y patrimoniales?",
        answers: { a: "Social", b: "Educativa", c: "Económica", d: "Regional" },
        correct: "c"
    },
    {
        question: "¿Qué caracteriza a los derechos humanos?",
        answers: { a: "Son exclusivos de los ciudadanos de ciertos países", b: "Se aplican sólo a las minorías", c: "Son universales, indivisibles e inalienables", d: "Se otorgan mediante votación" },
        correct: "c"
    },
    {
        question: "¿Cuál es una de las consecuencias negativas de la globalización según el tema?",
        answers: { a: "Incremento del acceso a la información", b: "Reducción de la desigualdad económica", c: "Pérdida de culturas locales", d: "Disminución del comercio internacional" },
        correct: "c"
    },
    {
        question: "¿Qué institución creó el Tribunal Penal Internacional tras el genocidio de Srebrenica?",
        answers: { a: "Unión Europea", b: "OTAN", c: "Consejo de Seguridad de la ONU", d: "Corte Internacional de Justicia" },
        correct: "c"
    },
    {
        question: "¿Qué mide el coeficiente de Gini?",
        answers: { a: "El nivel educativo medio", b: "El grado de contaminación de un país", c: "La distribución del ingreso", d: "El nivel de cumplimiento de los ODS" },
        correct: "c"
    },
    {
        question: "¿Qué derechos incluye el grupo de los derechos económicos, sociales y culturales?",
        answers: { a: "Libertad de expresión y religión", b: "Acceso a un juicio justo", c: "Derecho al trabajo y a la salud", d: "Derecho a la autodeterminación" },
        correct: "c"
    },
    {
        question: "¿Qué ODS busca reducir las desigualdades?",
        answers: { a: "ODS 1", b: "ODS 3", c: "ODS 10", d: "ODS 16" },
        correct: "c"
    },
    {
        question: "¿Qué ocurrió con la empresa Nike en los años 90?",
        answers: { a: "Fue premiada por sus condiciones laborales", b: "Recibió denuncias por usar mano de obra infantil", c: "Se retiró del mercado asiático", d: "Fue demandada por dumping ecológico" },
        correct: "b"
    },
    {
        question: "¿Qué aspecto no es una causa de desigualdad según el tema?",
        answers: { a: "Brecha digital", b: "Discriminación étnica", c: "Participación política", d: "Tasa de natalidad" },
        correct: "d"
    },
    {
        question: "¿Qué principios se establecen en el Pacto Mundial de la ONU para empresas?",
        answers: { a: "Exención fiscal y promoción industrial", b: "Neutralidad política y transparencia", c: "Protección de derechos humanos y laborales", d: "Uso de energías limpias" },
        correct: "c"
    },
    {
        question: "¿Cuál de los siguientes NO es un derecho colectivo?",
        answers: { a: "Derecho a un medio ambiente saludable", b: "Derecho a la paz", c: "Derecho a la autodeterminación", d: "Derecho a la libertad de expresión" },
        correct: "d"
    },
    {
        question: "¿Qué convención se centra en los derechos de las mujeres?",
        answers: { a: "Convención sobre los Derechos del Niño", b: "Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer", c: "Convención sobre el Cambio Climático", d: "Convención de Viena" },
        correct: "b"
    },
    {
        question: "¿Qué busca el ODS 5?",
        answers: { a: "Combatir la pobreza extrema", b: "Garantizar la educación gratuita", c: "Lograr la igualdad de género", d: "Promover la salud pública" },
        correct: "c"
    },
    {
        question: "¿Qué tipo de desigualdad está relacionada con el acceso a la tecnología?",
        answers: { a: "Digital", b: "Regional", c: "Educativa", d: "Económica" },
        correct: "a"
    },
    {
        question: "¿Cuál fue la respuesta de Nike tras las acusaciones?",
        answers: { a: "Negó todas las acusaciones", b: "Se retiró del mercado internacional", c: "Implementó un código de conducta y auditorías", d: "Aumentó la jornada laboral" },
        correct: "c"
    },
    {
        question: "¿Qué refleja un valor de 1 en el coeficiente de Gini?",
        answers: { a: "Desigualdad media", b: "Igualdad total", c: "Desigualdad extrema", d: "Equilibrio social" },
        correct: "c"
    },
    {
        question: "¿Qué documento fue aprobado en 1948 como base de los derechos humanos?",
        answers: { a: "Carta de la ONU", b: "Declaración de Río", c: "Declaración Universal de los Derechos Humanos", d: "Acuerdo de París" },
        correct: "c"
    },
    {
        question: "¿Qué tres pilares sostienen los Principios Rectores sobre empresas y derechos humanos?",
        answers: { a: "Ética, justicia y transparencia", b: "Protección, respeto y reparación", c: "Legalidad, cumplimiento y equidad", d: "Comercio, empleo y derechos" },
        correct: "b"
    },
    {
        question: "¿Cuál es una consecuencia de la pandemia de COVID-19 mencionada en el tema?",
        answers: { a: "Mejora en la equidad de acceso digital", b: "Reducción de la desigualdad laboral", c: "Aumento de la brecha digital y de género", d: "Fortalecimiento del sistema educativo" },
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


