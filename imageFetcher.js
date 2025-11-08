let articles = document.querySelectorAll('.works article')
const articlesNumber = articles.length

function randomSeed(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

async function fetchData() {
    const seed = randomSeed(6)
    const apiURL = `https://picsum.photos/seed/${seed}/600/600`
    const response = await fetch(apiURL)
    return {
        url: response.url,
        seed: seed
    }
}

function addContent() {
    articles.forEach(async (article, index) => {
        const img = article.querySelector('img')
        const data = await fetchData()
        img.src = data.url

        const title = article.querySelector('h1')
        title.textContent = `Project ${index + 1}`

        const hrefs = article.querySelectorAll('a')
        hrefs.forEach(href => {
            href.href = `project.html?seed=${data.seed}&index=${index + 1}`
        })
    })
}

document.addEventListener('DOMContentLoaded', addContent)