// Javascript del Quizz


const questions = [ 
    {
        question: "¿Qué papel desempeña la Formación Profesional en los ODS?",
        answers: { a: "Solo capacita en oficios", b: "No está relacionada con la sostenibilidad", c: "Proporciona competencias clave para el empleo y conciencia sobre los ODS", d: "Sustituye a la universidad" },
        correct: "c"
    },
    {
        question: "¿Qué permite a una empresa convertirse en líder en sostenibilidad?",
        answers: { a: "Maximizar beneficios económicos", b: "Reducir plantilla", c: "Impulsar transformaciones sectoriales y alianzas", d: "Tener buena imagen en redes sociales" },
        correct: "c"
    },
    {
        question: "¿Cuándo se aprobó el Plan de Acción para la Implementación de la Agenda 2030?",
        answers: { a: "2015", b: "2018", c: "2020", d: "2021" },
        correct: "b"
    },
    {
        question: "¿Qué organismo en España recopila datos para el seguimiento de los ODS?",
        answers: { a: "AIReF", b: "INJUVE", c: "INE", d: "SEPE" },
        correct: "c"
    },
    {
        question: "¿Cuál es uno de los objetivos del informe España 2050?",
        answers: { a: "Reducir el gasto en sostenibilidad", b: "Promover el turismo", c: "Ser un país más avanzado y sostenible", d: "Eliminar la FP" },
        correct: "c"
    },
    {
        question: "¿Cuántos desafíos principales incluye España 2050?",
        answers: { a: "7", b: "8", c: "9", d: "10" },
        correct: "c"
    },
    {
        question: "¿Qué mide la huella ecológica personal?",
        answers: { a: "Los niveles de CO₂ de una ciudad", b: "El consumo de agua nacional", c: "El impacto ambiental del estilo de vida individual", d: "La calidad del aire" },
        correct: "c"
    },
    {
        question: "¿Qué acción reduce la huella ecológica en el hogar?",
        answers: { a: "Dejar luces encendidas", b: "Usar electrodomésticos energéticamente eficientes", c: "Tener calefacción al máximo", d: "Usar agua caliente constantemente" },
        correct: "b"
    },
    {
        question: "¿Cuál es un compromiso empresarial con los empleados?",
        answers: { a: "Reducir el salario", b: "El despido libre", c: "Formación continua y trabajo digno", d: "Promover la competencia interna" },
        correct: "c"
    },
    {
        question: "¿Qué documento rige la ética empresarial en derechos humanos en la cadena de suministro?",
        answers: { a: "ISO 9001", b: "ISO 26000", c: "Principios Rectores de la ONU", d: "Reglamento REACH" },
        correct: "c"
    },
    {
        question: "¿Qué norma ayuda a garantizar la calidad en los productos y servicios?",
        answers: { a: "ISO 26000", b: "ISO 9001", c: "OHSAS 18001", d: "ENAC 2020" },
        correct: "b"
    },
    {
        question: "¿Qué recomienda la ONU en cuanto a proveedores?",
        answers: { a: "Pagar menos", b: "Reducir controles", c: "Debida diligencia en derechos humanos", d: "Tener solo proveedores locales" },
        correct: "c"
    },
    {
        question: "¿Qué competencia incluye 'evaluar múltiples escenarios futuros'?",
        answers: { a: "Colaboración", b: "Pensamiento crítico", c: "Anticipación", d: "Autoconciencia" },
        correct: "c"
    },
    {
        question: "¿Qué actitud personal ayuda a reducir el impacto en el transporte?",
        answers: { a: "Uso individual del coche", b: "Avión para trayectos cortos", c: "Caminar o usar bicicleta", d: "Acelerar y frenar constantemente" },
        correct: "c"
    },
    {
        question: "¿Qué acción sostenible se recomienda en alimentación?",
        answers: { a: "Comprar productos procesados", b: "Tirar comida en exceso", c: "Comprar productos locales y de temporada", d: "Elegir lo más barato" },
        correct: "c"
    },
    {
        question: "¿Qué define la competencia de pensamiento sistémico?",
        answers: { a: "Rechazar lo complejo", b: "Analizar sistemas y sus relaciones", c: "Enfocarse en tareas individuales", d: "Seguir instrucciones sin pensar" },
        correct: "b"
    },
    {
        question: "¿Qué propósito tiene el Análisis del Ciclo de Vida (ACV)?",
        answers: { a: "Estimar beneficios económicos", b: "Evaluar solo el precio de un producto", c: "Analizar impactos ambientales a lo largo del ciclo de vida", d: "Determinar la obsolescencia programada" },
        correct: "c"
    },
    {
        question: "¿Qué etapa del ACV evalúa entradas y salidas como materias primas y residuos?",
        answers: { a: "Interpretación", b: "Evaluación de impacto", c: "Inventario del ciclo de vida", d: "Objetivo y alcance" },
        correct: "c"
    },
    {
        question: "¿Qué ODS está vinculado con mejorar competencias TIC de las mujeres?",
        answers: { a: "ODS 4", b: "ODS 8", c: "ODS 5", d: "ODS 13" },
        correct: "c"
    },
    {
        question: "¿Qué norma internacional apoya la gestión ética empresarial?",
        answers: { a: "ISO 50001", b: "ISO 26000", c: "ISO 14064", d: "ISO 20000" },
        correct: "b"
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


