let articles = document.querySelectorAll('.works article')
const articlesNumber = articles.length

function randomSeed(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

async function fetchData() {
    const apiURL = `https://picsum.photos/seed/${randomSeed(6)}/600/600`
    const response = await fetch(apiURL)
    return { url: response.url }
}

function addContent() {
    articles.forEach(async (article, index) => {
        const img = article.querySelector('img')
        const data = await fetchData()
        img.src = data.url

        const title = article.querySelector('h1')
        title.textContent = `Project ${index + 1}`
    })
}

document.addEventListener('DOMContentLoaded', addContent)