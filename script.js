let slideIndex = 0;
let slides;
let slideTimeout;

function initSlider() {
    slides = document.getElementsByClassName("slide");
    showSlides(slideIndex); // Inicia en la primera diapositiva
}

function showSlides(index) {
    // Verifica si hay diapositivas disponibles
    if (slides.length === 0) return;

    // Oculta todas las diapositivas y desactiva los labels
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].querySelector("p").classList.remove("active");
    }

    // Ajusta slideIndex según el índice recibido
    slideIndex = index;

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Muestra la diapositiva actual
    slides[slideIndex].style.display = "block";
    let label = slides[slideIndex].querySelector("p");
    label.classList.add("active");

    // Aplica colores aleatorios al label
    let randomColor = getRandomColor();
    label.style.backgroundColor = randomColor;
    label.style.color = getContrastColor(randomColor);

    // Borra el temporizador activo y luego inicia uno nuevo
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => showSlides(slideIndex + 1), 4000);
}

function plusSlides(n) {
    clearTimeout(slideTimeout); // Detén el temporizador actual
    showSlides(slideIndex + n); // Actualiza la diapositiva en función del clic
}

function loadTopic(topic) {
    localStorage.setItem('selectedTopic', topic);
    window.location.href = 'tema.html';
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getContrastColor(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let contrast = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
    return contrast;
}

// Inicia el slider cuando el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', initSlider);
// Función para cargar el contenido del tema seleccionado
// Función para cargar el contenido del tema seleccionado
function displayTopicContent() {
    const topic = localStorage.getItem('selectedTopic');
    const topicsContent = {
        tema1: {
            image: "imgs/tema1.jpeg",
            explicacion: [
                "<h2>Características del conocimiento científico</h2>",
                "Evidencia Empírica: El conocimiento científico se basa en la recopilación de datos a través de experimentos y observaciones obtenidas mediante métodos empíricos. Los datos recopilados no constituyen ciencia por sí solos; la teoría tiene la misma importancia porque sin teoría, los datos carecen de significado.",
                "Construcción de Teorías: Se crean con el fin de explicar los fenómenos que se observan, por lo cual es esencial para la investigación científica, asimismo las teorías no se encuentran ante una neutralidad valorativa, ya que, refleja los sesgos, prejuicios, valores y suposiciones del científico individual, así como de la comunidad científica a la que pertenece.",
                "Pruebas de Hipótesis: Se generan predicciones específicas sobre el comportamiento bajo condiciones concretas a partir de una teoría y se ponen a prueba para poder refutarla o confirmarla, en dicho caso esta pasaría a ser una teoría.",
                "<img src='imgs/tablat1.png' alt='Explicación Tema 1' style='max-width: 100%; height: auto;' />", // Imagen opcional
                "<h2>Características de la ciencia</h2>",
                "La ciencia se caracteriza por ser:",
                "<li>Neutral y objetiva. Se basa en hechos concretos, no en opiniones ni en conjeturas.</li><li>Metódica y sistemática. Se establece un procedimiento a través de una serie de pasos ordenados para explorar.</li><li>Verificable. Es precisa y exacta en su desarrollo e hipótesis.</li><li>Comprobable. Se constata mediante la experimentación y la demostración.</li><li>Abierta a nuevos escenarios. Es susceptible a cambios y lo que hoy es una limitación puede no serlo en el futuro.</li><li>Acumulativa. Se construyen nuevos conocimientos partiendo de investigaciones y experimentos anteriores.</li>"            ],
            ejemplos: [
            ]
        },
        tema2: {
            image: "imgs/tema2.jpeg",
            explicacion: [
                "<h2>Problematización de la cientificidad de la psicología</h2>",
                "La psicología se caracteriza por ser una disciplina multiparadigmática, lo que significa que está compuesta por múltiples enfoques teóricos y metodológicos que coexisten y generan diversidad de opiniones sobre su naturaleza y propósito. Esta multiplicidad de paradigmas incluye perspectivas como el conductismo, el psicoanálisis, el cognitivismo y el humanismo, cada una con una visión particular del ser humano, un objeto de estudio propio, y métodos específicos para investigar los fenómenos psicológicos.",
                "El conductismo concibe al ser humano como un organismo influido por estímulos externos y analiza la conducta observable a través de experimentos controlados. Por otro lado, el psicoanálisis lo interpreta como un ser motivado por deseos inconscientes, concentrándose en el estudio de la mente y sus conflictos internos mediante métodos clínicos cualitativos. El cognitivismo considera al ser humano como un procesador activo de información, centrando su atención en procesos mentales como la memoria, el razonamiento y la percepción, los cuales estudia mediante experimentos y modelos computacionales. Finalmente, el humanismo prioriza la experiencia subjetiva y la autorrealización del individuo, utilizando enfoques fenomenológicos y entrevistas para comprender el comportamiento desde una perspectiva más personal y holística.",
                "Además, cada paradigma define criterios diferentes para delimitar su objeto de estudio. Por ejemplo, los conductistas se enfocan en fenómenos observables y medibles, mientras que los psicoanalistas trabajan con conceptos más abstractos como el inconsciente. Los cognitivistas buscan explicaciones basadas en evidencia experimental y teorías computacionales, mientras que los humanistas se centran en el significado personal y la autenticidad de las experiencias.",
                "Esta variedad de perspectivas enriquece la psicología al ofrecer múltiples formas de comprender al ser humano y sus procesos mentales, pero también dificulta establecer un consenso unificado sobre qué es la psicología como disciplina. Así, los debates sobre su estatus como ciencia, su objeto de estudio y los métodos adecuados para investigarlo reflejan la complejidad de una disciplina que está en constante evolución y que, en muchos sentidos, sigue definiendo su identidad científica."
            ], explicacionExtra:[
                "<h2> Psicología cognitiva</h2>",
                "El cognitivismo surge a mediados del siglo XX en un contexto histórico marcado por la insatisfacción con los modelos predominantes de la psicología, especialmente el conductismo. En este período, el conductismo había dominado el panorama psicológico con su enfoque en la conducta observable y medible, rechazando los procesos internos como parte del objeto de estudio científico. Sin embargo, su incapacidad para explicar fenómenos más complejos como el lenguaje, la memoria y la percepción generó críticas cada vez más significativas.",
                ""
            ],
            ejemplos: [
                "<h2> Psicología cognitiva</h2>",
                "El cognitivismo surge a mediados del siglo XX en un contexto histórico marcado por la insatisfacción con los modelos predominantes de la psicología, especialmente el conductismo. En este período, el conductismo había dominado el panorama psicológico con su enfoque en la conducta observable y medible, rechazando los procesos internos como parte del objeto de estudio científico. Sin embargo, su incapacidad para explicar fenómenos más complejos como el lenguaje, la memoria y la percepción generó críticas cada vez más significativas.",
                "Concepción del ser humano: La psicología cognitiva ve al ser humano como un procesador activo de información. Se enfoca en cómo las personas perciben, interpretan y utilizan la información, considerando los procesos mentales internos como la memoria, el pensamiento y el lenguaje.",
                "Objeto de estudio: Su objeto de estudio son los procesos mentales que intervienen en la adquisición y el uso de la información, tales como la percepción, la memoria, el lenguaje, la atención y la toma de decisiones.",
                "Criterios para delimitar el objeto de estudio: Se enfoca en los procesos mentales internos y cómo estos interactúan con el ambiente, buscando entender las capacidades cognitivas comunes a todos los humanos y cómo se desarrollan.",
                "Métodos empleados: Utiliza experimentos controlados, modelos computacionales, neurociencia cognitiva (técnicas como fMRI), tareas de laboratorio y estudios de caso para investigar los procesos cognitivos.",
                "Validación científica: La validación se realiza mediante revisión por pares, reproducibilidad de estudios, replicación de experimentos y el uso de análisis estadísticos para asegurar la fiabilidad y validez de los resultados.",
                "Postura respecto a la objetividad: La psicología cognitiva promueve la objetividad mediante la evitación de sesgos personales, el uso de métodos empíricos y transparencia en los procedimientos, asegurando que los resultados sean imparciales y reproducibles."
            ]
        },
        tema3: {
            image: "imgs/tema3.jpeg",
            explicacion: [
                "<h2>Ontología</h2>",
                "La ontología estudia lo que existe, su naturaleza y cómo se relacionan las entidades entre sí .",
                "Se centra en entender la naturaleza de la mente y sus componentes fundamentales._ Busca responder preguntas esenciales como: ¿qué es la mente?, ¿cómo está compuesta?, ¿cómo interactúa con el cuerpo y el entorno?, y ¿qué relación existe entre los procesos mentales y el comportamiento humano?",
                "Estas preguntas permiten a los psicólogos desarrollar modelos teóricos que expliquen la cognición, la emoción y la conducta."
            ],
            ejemplos: [
                "<h2>Fundamentos epistemológicos</h2>",
                "<li>Empirismo: Las fuentes enfatizan la influencia del empirismo, en particular de los empiristas británicos (Locke, Hume y Berkeley), en la psicología. El empirismo sostiene que la experiencia sensorial es la fuente primaria del verdadero conocimiento. Esta idea se refleja en el énfasis de la psicología en métodos empíricos como experimentos y observaciones para recopilar datos sobre el mundo.</li><li>Positivismo: El positivismo, que surgió de la influencia de Comte, refuerza aún más el énfasis en la objetividad en el estudio del comportamiento humano. El positivismo aboga por aplicar los métodos de las ciencias naturales al estudio del comportamiento humano y las instituciones sociales, buscando un conocimiento objetivo y verificable.</li><li>Objetividad: Las fuentes discuten el concepto de objetividad como una aspiración central para la psicología como ciencia. Esto implica minimizar sesgos, prejuicios e interpretaciones personales al estudiar el comportamiento humano. Sin embargo, también reconocen los desafíos para lograr una objetividad completa en psicología, especialmente dada la naturaleza subjetiva de la experiencia humana y la influencia del contexto social y cultural en la investigación científica.</li><li>El Método Científico: Las fuentes presentan el método científico, con su enfoque en la construcción de teorías, pruebas de hipótesis y recopilación de datos empíricos, como una piedra angular de la psicología científica. La visión clásica del método científico, que enfatiza el razonamiento inductivo, se contrasta con la perspectiva revisada de Popper que destaca el método hipotético-deductivo. Ambos enfoques, que implican observación, experimentación e intentos de falsificar hipótesis, se consideran complementarios en el proceso científico.</li><li>Paradigmas y Revoluciones Científicas: Las fuentes introducen el concepto de paradigmas de Kuhn como marcos compartidos que guían la investigación científica dentro de una disciplina. Un paradigma dicta lo que se considera digno de investigación, los métodos utilizados y cómo se interpretan los resultados. Argumentan que la psicología, con sus diversas perspectivas y falta de un paradigma unificador, podría considerarse  'pre-paradigmática' o en un estado de 'pre-ciencia'. Sin embargo, también reconocen la posibilidad de cambios de paradigma dentro de la psicología, como se observa en la transición del estructuralismo al conductismo y luego a la psicología cognitiva.</li>",
                "Estos fundamentos epistemológicos sustentan el debate continuo sobre el estatus científico de la psicología. Las fuentes problematizan la adopción acrítica del método científico proveniente de las ciencias naturales, destacando los desafíos únicos que plantea el estudio del comportamiento humano y la experiencia. Hacen un llamado a un examen crítico de estos fundamentos para desarrollar una comprensión más matizada y sensible al contexto sobre los seres humanos."
            ],
            seccionesExtra: [
                {
                    id: "extra-section-5",
                    content: [
                        "<h2>Cuantitativo y Cualitativo</h2>",
                        "<li>Investigación Cuantitativa : Este enfoque utiliza datos numéricos y análisis estadísticos para identificar patrones y relaciones entre variables cognitivas . Según Neisser (1981), la investigación cuantitativa es esencial para desarrollar una comprensión científica de la cognición .</li><li>Investigación Cualitativa : Utiliza métodos no numéricos, como entrevistas en profundidad y observaciones, para explorar en detalle los procesos cognitivos y sus contextos. Los datos cualitativos pueden revelar patrones y temas comunes que no se capturan mediante métodos cuantitativos.</li>"
            ]},
                {
                    id: "extra-section-4",
                    content: [
                        "<h2>Análisis Nomotético o Ideográfico</h2>",
                        "<li>Análisis Nomotético : Este tipo de análisis busca establecer leyes generales sobre los procesos mentales mediante métodos cuantitativos y análisis estadísticos . Según Neisser (1981), este enfoque es fundamental para desarrollar teorías generales sobre la cognición</li><li>Análisis Ideográfico : Se enfoca en el estudio detallado de individuos para entender la variabilidad y singularidad de los procesos cognitivos. Es útil para explorar fenómenos únicos que no pueden ser generalizados fácilmente.</li>"
                   ]
                },
                {
                    id: "extra-section-3",
                    content: [
                        "<h2>Modelos Explicativos o Comprensivos</h2>",
                    "<li>Modelos Explicativos :Estos modelos se centran en describir cómo funcionan los procesos mentales específicos. Descomponen procesos complejos en partes más simples y explican las interacciones entre estas partes. Neisser (1981) propuso el modelo de procesamiento de información, que compara la mente humana con una computadora, describiendo cómo recibimos, almacenamos y procesamos la información.</><li>Modelos Comprensivos : Estos modelos buscan una comprensión holística y contextual de los procesos cognitivos, integrando múltiples factores y perspectivas. Miller (1956) contribuyó con el concepto del 'mágico número siete, más o menos dos', que explica la capacidad limitada de la memoria a corto plazo y cómo las personas organizan la información en unidades significativas.</li>",
                                    ]
                },
                {
                    id: "extra-section-2",
                    content: [
                        "<h2>Estadístico-Inductivo e Hipotético-Deductivo</h2>",
                        "La psicología cognitiva utiliza tanto enfoques estadístico-inductivos como hipotético-deductivos:",
                        "<li>1. Estadístico-Inductivo : Este enfoque implica la recolección de datos a través de observaciones o experimentos y la utilización de técnicas estadísticas para identificar patrones y relaciones en los datos. A partir de estos patrones, los investigadores pueden formular teorías y generalizar sus hallazgos a una población más amplia. Según Neisser (1981), este enfoque es fundamental para desarrollar teorías basadas en la evidencia observada.</li><li>2. Hipotético-Deductivo :Este enfoque comienza con una hipótesis basada en una teoría existente, que luego se prueba mediante experimentos controlados. Si los resultados del experimento apoyan la hipótesis, la teoría se fortalece; si no, la teoría puede ser modificada o rechazada. Miller (1956) destacó la importancia de este método para verificar teorías.</li>"
                    ]
                },
                {
                     id: "extra-section-1",
                content: [
                    "<h2>Métodos, Metodologías y Técnicas</h2>",
                    "La psicología cognitiva se centra en el estudio de los procesos mentales como la percepción, la memoria, el pensamiento y el lenguaje. Según Neisser (1981), los métodos utilizados en la psicología cognitiva incluyen:",
                    "<li>Experimentos Controlados : Estos son esenciales para establecer relaciones causales . Los investigadores manipulan una variable independiente para observar su efecto en una variable dependiente, mientras controlan otras variables que podrían influir en el resultado. Esto permite aislar los efectos específicos y obtener resultados fiables.</li><li>Estudios de Caso : Este método implica la investigación detallada de un solo individuo o un grupo pequeño . Es particularmente útil para estudiar fenómenos raros o complejos que no pueden ser generalizados fácilmente.</li><li> Análisis de Comportamiento : Este método implica la observación y registro de las acciones de las personas para entender sus procesos mentales subyacentes . Se pueden utilizar técnicas como el análisis de respuestas de elección, el tiempo de reacción y el análisis de errores para inferir cómo las personas procesan la información.</li><li>Modelos Computacionales : Se crean programas de computadora que simulan procesos mentales para probar teorías sobre cómo funciona la mente. Estos modelos pueden replicar aspectos específicos del procesamiento cognitivo, como la atención, la percepción o la memoria , y permiten a los investigadores manipular variables de manera precisa y explorar sus efectos en los procesos simulados.</li>",
                    "Miller (1956) también destacó la importancia de los experimentos de laboratorio para entender la capacidad de la memoria a corto plazo. Sus experimentos ayudaron a establecer que las personas pueden almacenar aproximadamente siete unidades de información (conocidas como 'chunks') en la memoria a corto plazo, lo que llevó al concepto del 'mágico número siete, más o menos dos'."
                ]
                
              
            
                }
            ]
        },
        tema4: {
            image: "imgs/tema4.jpeg",
            explicacion: [
                "<img src='imgs/cuadrot4.png' alt='Explicación Tema 1' style='max-width: 100%; height: auto;' />", // Imagen opcional

            ]
        }
    };

    const content = topicsContent[topic];

    if (!content) return;

    // Actualizar la imagen principal
    document.getElementById("tema-image").src = content.image;

    // Renderizar la explicación (puede contener texto o imágenes)
    const explicacionContent = document.getElementById("explicacion-content");
    explicacionContent.innerHTML = ""; // Limpiar contenido previo
    content.explicacion.forEach(line => {
        explicacionContent.innerHTML += line + "<br><br>";
    });

    // Renderizar los ejemplos
    // Verificar si hay ejemplos antes de mostrarlos
const ejemplosContent = document.getElementById("ejemplos");
if (content.ejemplos && content.ejemplos.length > 0) {
    ejemplosContent.style.display = "block"; // Asegurarte de que esté visible si hay ejemplos
    const ejemplosContentParagraph = document.getElementById("ejemplos-content");
    ejemplosContentParagraph.innerHTML = ""; // Limpiar contenido previo
    content.ejemplos.forEach(line => {
        ejemplosContentParagraph.innerHTML += line + "<br><br>";
    });
} else {
    ejemplosContent.style.display = "none"; // Ocultar la sección si no hay ejemplos
}

// Manejo de secciones extra
// Eliminar cualquier sección extra previa
document.querySelectorAll(".extra-section").forEach(section => section.remove());

if (content.seccionesExtra) {
    // Lista de colores de fondo para las secciones extra
    const coloresDeFondo = ["#f9f9f9", "#e0f7fa", "#fce4ec", "#e8f5e9", "#fff3e0"];

    content.seccionesExtra.forEach((section, index) => {
        // Crear nueva sección extra
        const newSection = document.createElement("section");
        newSection.className = "extra-section"; // Clase para identificar las secciones dinámicas
        newSection.id = section.id; // ID único para la sección

        // Aplicar estilos con color de fondo
        newSection.style.backgroundColor = coloresDeFondo[index % coloresDeFondo.length]; // Asignar color de fondo
        newSection.style.padding = "15px"; // Espaciado interno
        newSection.style.margin = "10px 0"; // Espaciado entre secciones
        newSection.style.borderRadius = "8px"; // Bordes redondeados para estética
        newSection.style.border = "1px solid #ddd"; // Borde opcional para separación visual

        // Contenido de la sección
        newSection.innerHTML = `
            <p>${section.content.join("<br><br>")}</p>
        `;

        // Insertar la nueva sección después de la sección existente "ejemplos"
        const lastSection = document.getElementById("ejemplos");
        lastSection.parentNode.insertBefore(newSection, lastSection.nextSibling);
    });
}

}

 
window.onload = () => {
    displayTopicContent();
};


window.onload = () => {
    displayTopicContent();
    showSlides();
};
