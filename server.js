
const apiKey = 'f3f196af53b14869a4e7d2dbf9bf9e42';
const newsUrl = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
        // Procesa y muestra las noticias en tu página
        console.log('Noticias de fútbol:', data.articles);
    })
    .catch(error => {
        console.error('Error al obtener noticias de fútbol:', error);
    });
