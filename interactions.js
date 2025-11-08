function setupSectionInteractions() {

    const imgCards = document.querySelectorAll(".imgcard")
    imgCards.forEach(imgCard => {
        const parentArticle = imgCard.closest("article")
        if (parentArticle) {
            imgCard.addEventListener("mouseover", () => parentArticle.classList.add("hover"))
            imgCard.addEventListener("mouseleave", () => parentArticle.classList.remove("hover"))
        }
    })

    const categoryTitles = document.querySelectorAll("section p:first-child")
    categoryTitles.forEach(title => {
        title.addEventListener("click", () => {
            const parentSection = title.closest("section")
            if (!parentSection) return

            const toggleSpan = parentSection.querySelector("span")
            const worksContainer = parentSection.querySelector(".works")

            if (toggleSpan) {
                toggleSpan.textContent = toggleSpan.textContent === "–" ? "+" : "–"
            }

            if (worksContainer) {
                worksContainer.classList.toggle("hidden")

                const relatedArticles = worksContainer.querySelectorAll("article")
                relatedArticles.forEach(article => {
                    article.classList.toggle("hidden")
                })
            }
        })
    })
}

function scrollToMain() {
    const scrollButton = document.querySelector('.scroll-to-main')
    const mainContent = document.querySelector('main')

    if (scrollButton && mainContent) {
        scrollButton.addEventListener('click', () => {
            mainContent.scrollIntoView({ 
                behavior: 'smooth' 
            })
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupSectionInteractions()
    scrollToMain()
})