// Javascript del Quizz


const questions = [ 
    {
        question: "¿Cuál es uno de los principales problemas actuales en relación con los ODS?",
        answers: { a: "Se están cumpliendo más rápido de lo esperado", b: "Falta de apoyo institucional", c: "El progreso es lento y no alcanza el ritmo necesario", d: "No hay indicadores para medirlos" },
        correct: "c"
    },
    {
        question: "¿Cuál es el déficit anual estimado de inversión para cumplir los ODS?",
        answers: { a: "1 billón de dólares", b: "4,5 trillones de dólares", c: "2,6 trillones de dólares", d: "6 trillones de dólares" },
        correct: "c"
    },
    {
        question: "¿Qué sectores se ven más afectados por el déficit en el cumplimiento de los ODS?",
        answers: { a: "Educación y salud", b: "Cambio climático y energía", c: "Tecnología y comunicación", d: "Turismo y cultura" },
        correct: "b"
    },
    {
        question: "¿Qué programa europeo aporta 140.000 millones de euros para sostenibilidad en España?",
        answers: { a: "Plan Verde Europeo", b: "NextGenerationEU", c: "Horizonte 2030", d: "Pacto Verde Mundial" },
        correct: "b"
    },
    {
        question: "¿Qué debe incluir una hoja de ruta sectorial para los ODS?",
        answers: { a: "Solo medidas a largo plazo", b: "Objetivos no cuantificables", c: "Colaboración no competitiva y medidas con indicadores", d: "Competencia entre empresas" },
        correct: "c"
    },
    {
        question: "¿Qué sector representa el 13% del PIB español?",
        answers: { a: "Sector industrial", b: "Comercio y distribución", c: "Telecomunicaciones", d: "Turismo" },
        correct: "b"
    },
    {
        question: "¿Cuál es el principal objetivo del proyecto Moda-Re de Alcampo?",
        answers: { a: "Reducir los costes textiles", b: "Vender ropa de lujo", c: "Fomentar la economía circular y la inclusión social", d: "Importar productos sostenibles" },
        correct: "c"
    },
    {
        question: "¿Qué sector está relacionado con el desarrollo de la plataforma Foresight?",
        answers: { a: "Turismo", b: "Comercio", c: "Infraestructura y movilidad", d: "Moda" },
        correct: "c"
    },
    {
        question: "¿Qué permite la plataforma Foresight de Ferrovial?",
        answers: { a: "Reducir el consumo de agua", b: "Crear tiendas online", c: "Anticiparse a escenarios futuros y fomentar la innovación", d: "Contratar empleados temporalmente" },
        correct: "c"
    },
    {
        question: "¿Qué define el PNUMA como economía verde?",
        answers: { a: "Economía basada en energías fósiles", b: "Economía que ignora el medioambiente", c: "Economía que promueve el bienestar y la equidad reduciendo riesgos ambientales", d: "Economía globalizada sin regulación" },
        correct: "c"
    },
    {
        question: "¿Qué busca el ecodiseño?",
        answers: { a: "Reducir costes de fabricación", b: "Aumentar la durabilidad del marketing", c: "Minimizar el impacto ambiental durante todo el ciclo de vida del producto", d: "Incrementar el consumo de materiales" },
        correct: "c"
    },
    {
        question: "¿Qué aspecto NO forma parte del ecodiseño?",
        answers: { a: "Reciclaje", b: "Reutilización", c: "Publicidad", d: "Eficiencia energética" },
        correct: "c"
    },
    {
        question: "¿Qué porcentaje del PIB español representa el sector energético?",
        answers: { a: "13%", b: "3%", c: "5,4%", d: "12,4%" },
        correct: "b"
    },
    {
        question: "¿Qué sector representa el 22% del empleo mundial?",
        answers: { a: "Comercio", b: "Sanidad", c: "Industria", d: "Tecnología" },
        correct: "c"
    },
    {
        question: "¿Qué sector tiene como reto principal la sostenibilidad de las cadenas de suministro?",
        answers: { a: "Tecnológico", b: "Agroalimentario", c: "Turismo", d: "Financiero" },
        correct: "b"
    },
    {
        question: "¿Qué alianza concreta corresponde al sector de telecomunicaciones?",
        answers: { a: "Principios de banca responsable", b: "Alianza de moda sostenible", c: "Circular Electronics Partnership", d: "Sustainable Agriculture Platform" },
        correct: "c"
    },
    {
        question: "¿Qué aspecto destaca en la transformación del sector turístico?",
        answers: { a: "Automatización de procesos", b: "Expansión urbana", c: "Reducción de emisiones y fomento del turismo local", d: "Incremento de vuelos internacionales" },
        correct: "c"
    },
    {
        question: "¿Qué transformación clave se menciona para el sector farmacéutico?",
        answers: { a: "Ampliar franquicias", b: "Privatización", c: "Teleasistencia y ecodiseño de medicamentos", d: "Reducción de costes salariales" },
        correct: "c"
    },
    {
        question: "¿Qué sector busca cerrar la brecha digital con accesibilidad y formación?",
        answers: { a: "Servicios profesionales", b: "Telecomunicaciones", c: "Sector financiero", d: "Construcción" },
        correct: "b"
    },
    {
        question: "¿Qué acción forma parte del programa Women’s Voice de Accenture?",
        answers: { a: "Desigualdad salarial", b: "Privilegios a directivos", c: "Empoderamiento femenino y liderazgo", d: "Contratación solo externa" },
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


