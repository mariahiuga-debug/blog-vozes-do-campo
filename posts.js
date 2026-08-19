const posts = [
    {
        titulo: "A importância da agricultura sustentável",
        categoria: "Sustentabilidade",
        descricao:
            "Conheça práticas agrícolas que ajudam a preservar o solo, a água e os recursos naturais.",
        data: "12 de agosto de 2026",
        icone: "🌱"
    },

    {
        titulo: "Tecnologia transformando o campo",
        categoria: "Tecnologia",
        descricao:
            "Como drones, sensores e sistemas inteligentes estão ajudando agricultores a aumentar a produtividade.",
        data: "08 de agosto de 2026",
        icone: "🚜"
    },

    {
        titulo: "O valor da agricultura familiar",
        categoria: "Agricultura Familiar",
        descricao:
            "Entenda a importância dos pequenos produtores para a alimentação e para a economia local.",
        data: "03 de agosto de 2026",
        icone: "🌾"
    },

    {
        titulo: "Como cuidar melhor do solo",
        categoria: "Cultivo",
        descricao:
            "Boas práticas para manter o solo saudável e melhorar a qualidade das plantações.",
        data: "28 de julho de 2026",
        icone: "🌍"
    },

    {
        titulo: "Água: um recurso essencial no campo",
        categoria: "Meio Ambiente",
        descricao:
            "Estratégias para utilizar a água de maneira eficiente e responsável na agricultura.",
        data: "22 de julho de 2026",
        icone: "💧"
    },

    {
        titulo: "Da semente até a colheita",
        categoria: "Produção",
        descricao:
            "Um olhar sobre as principais etapas que fazem parte do ciclo de produção agrícola.",
        data: "15 de julho de 2026",
        icone: "🌻"
    }
];

const container = document.getElementById("posts-container");

posts.forEach(post => {

    const article = document.createElement("article");

    article.className = "post-card";

    article.innerHTML = `
        <div class="post-image">
            ${post.icone}
        </div>

        <div class="post-content">

            <span class="post-category">
                ${post.categoria}
            </span>

            <h3>
                ${post.titulo}
            </h3>

            <p>
                ${post.descricao}
            </p>

            <span class="post-date">
                📅 ${post.data}
            </span>

        </div>
    `;

    container.appendChild(article);
});

