function cargarNoticias() {
    const noticiasSection = document.getElementById('noticias');
    const apiKey = '755424f07a3d40d78df88f68e2d2653e';
    const newsUrl = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=755424f07a3d40d78df88f68e2d2653e;

    fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
            // Procesa y muestra las noticias en tu página
            console.log('Noticias de fútbol:', data.articles);
            // Aquí puedes personalizar cómo mostrar las noticias en el DOM
            noticiasSection.innerHTML = '<p>Últimas noticias de fútbol</p>';
        })
        .catch(error => {
            console.error('Error al obtener noticias de fútbol:', error);
        });
}

// Llama a la función para cargar noticias al cargar la página
cargarNoticias();
