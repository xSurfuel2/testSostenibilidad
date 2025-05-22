// Javascript del Quizz


const questions = [
    {
        question: "¿Qué permitió realizar cualquier programa mediante secuencias, instrucciones condicionales y bucles?",
        answers: { a: "Programación funcional", b: "Programación estructurada", c: "Programación lógica", d: "Programación orientada a objetos" },
        correct: "b"
    },
    {
        question: "¿Cuál es el enfoque de la programación dirigida a objetos?",
        answers: { a: "Manipular datos directamente", b: "Representar un sistema real mediante un modelo software", c: "Optimizar el código para velocidad", d: "Minimizar el uso de memoria" },
        correct: "b"
    },
    {
        question: "¿Cuál es la parte más importante en el desarrollo de software orientado a objetos?",
        answers: { a: "La elección del lenguaje", b: "La definición de objetos", c: "La gestión de memoria", d: "La integración de librerías" },
        correct: "b"
    },
    {
        question: "¿Qué busca la POO al definir sus objetos?",
        answers: { a: "Optimización del código", b: "Funciones necesarias y los datos sobre los que operan", c: "Minimizar la complejidad", d: "Maximizar la eficiencia" },
        correct: "b"
    },
    {
        question: "¿Cómo se compone un sistema en la POO?",
        answers: { a: "Funciones aisladas", b: "Objetos formados por sus datos y operaciones", c: "Secuencias de instrucciones", d: "Algoritmos optimizados" },
        correct: "b"
    },
    {
        question: "¿Qué tipo de relaciones son más importantes en la POO?",
        answers: { a: "Relaciones de dependencia", b: "Relaciones jerárquicas", c: "Relaciones funcionales", d: "Relaciones de agregación" },
        correct: "b"
    },
    {
        question: "¿Qué es la herencia en POO?",
        answers: { a: "Un tipo de polimorfismo", b: "Una relación jerárquica entre clases", c: "Una técnica de encapsulación", d: "Una forma de definir interfaces" },
        correct: "b"
    },
    {
        question: "¿Qué principio de la POO proporciona cohesión en los datos de un objeto?",
        answers: { a: "Abstracción", b: "Encapsulamiento", c: "Herencia", d: "Polimorfismo" },
        correct: "b"
    },
    {
        question: "¿Qué proporciona a un objeto la posibilidad de tener diferentes comportamientos?",
        answers: { a: "Encapsulamiento", b: "Abstracción", c: "Herencia", d: "Polimorfismo" },
        correct: "d"
    },
    {
        question: "¿Cuál es una ventaja de la POO?",
        answers: { a: "Mayor tiempo de ejecución", b: "Facilitar el mantenimiento", c: "Mayor complejidad", d: "Dificultad de aprendizaje" },
        correct: "b"
    },
    {
        question: "¿Cuál es una desventaja de la POO?",
        answers: { a: "Favorece la reutilización", b: "Acelerar la fase de desarrollo", c: "Mayor tiempo de ejecución del polimorfismo", d: "Proteger la información" },
        correct: "c"
    },
    {
        question: "¿Qué concepto se refiere a la no visibilidad de los datos desde fuera de un objeto?",
        answers: { a: "Abstracción", b: "Encapsulamiento", c: "Herencia", d: "Polimorfismo" },
        correct: "b"
    },
    {
        question: "¿Qué permite la encapsulación y ocultación de la información en la POO?",
        answers: { a: "Crear clases más eficientes", b: "Crear clases más robustas y mantenibles", c: "Reducir el código", d: "Aumentar la velocidad de ejecución" },
        correct: "b"
    },
    {
        question: "¿Qué es una clase en POO?",
        answers: { a: "Una instancia de un objeto", b: "Un tipo específico de dato", c: "Un modelo que describe atributos y comportamientos de objetos", d: "Una función" },
        correct: "c"
    },
    {
        question: "¿Qué componente de una clase determina los tipos de datos que se van a guardar?",
        answers: { a: "Métodos", b: "Atributos", c: "Constructores", d: "Destructores" },
        correct: "b"
    },
    {
        question: "¿Qué tipo de método en una clase es utilizado para modificar datos de los objetos?",
        answers: { a: "Observadores", b: "Modificadores", c: "Constructores", d: "Destructores" },
        correct: "b"
    },
    {
        question: "¿Qué tipo de método es empleado para asignar valores a los datos de un objeto al momento de su creación?",
        answers: { a: "Observadores", b: "Modificadores", c: "Constructores", d: "Destructores" },
        correct: "c"
    },
    {
        question: "¿Cuál es la función del mecanismo de recolección de basura en Java?",
        answers: { a: "Optimizar el código", b: "Liberar memoria de objetos no referenciados", c: "Aumentar la velocidad de ejecución", d: "Reducir la complejidad del programa" },
        correct: "b"
    },
    {
        question: "¿Qué promueve las relaciones entre clases en la POO?",
        answers: { a: "Modelado de la realidad", b: "Reutilización de código", c: "Abstracción y encapsulación", d: "Todas las anteriores" },
        correct: "d"
    },
    {
        question: "¿Qué tipo de relación se refiere a una clase compuesta por objetos de otras clases?",
        answers: { a: "Relación de herencia", b: "Relación de asociación", c: "Relación de composición", d: "Relación de agregación" },
        correct: "b"
    },
    {
        question: "¿Qué relación permite que las partes existan solo asociadas al compuesto?",
        answers: { a: "Relación de herencia", b: "Relación de agregación", c: "Relación de composición", d: "Relación de asociación" },
        correct: "c"
    },
    {
        question: "¿Qué relación permite que las partes formen parte de distintos agregados?",
        answers: { a: "Relación de herencia", b: "Relación de agregación", c: "Relación de composición", d: "Relación de asociación" },
        correct: "b"
    },
    {
        question: "¿Qué tipo de relación se caracteriza por su bidireccionalidad?",
        answers: { a: "Relación de herencia", b: "Relación de agregación", c: "Relación de asociación", d: "Relación de composición" },
        correct: "c"
    },
    {
        question: "¿Cuál es un beneficio de la separación de responsabilidades en la POO?",
        answers: { a: "Facilita la depuración de errores", b: "Permite una mayor flexibilidad", c: "Mejora la reutilización de código", d: "Todas las anteriores" },
        correct: "d"
    },
    {
        question: "¿Cuál es una característica clave del polimorfismo en la POO?",
        answers: { a: "Permite la sobrecarga de operadores", b: "Facilita la encapsulación de datos", c: "Permite diferentes comportamientos en diferentes contextos", d: "Simplifica la creación de instancias" },
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
    const selectedQuestions = questions.slice(0, 25); // Selecciona las primeras 20 preguntas
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
    const selectedQuestions = questions.slice(0, 25); // Asegúrate de que coincida con las preguntas seleccionadas

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
    resultElement.innerHTML = `Tu puntuación es ${score} de 25`;
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


