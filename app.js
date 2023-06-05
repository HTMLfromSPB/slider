const slider = document.querySelectorAll('.slide');

for (const slide of slider) {
    slide.addEventListener('click', () => {
        removeActiveClasses ()
        slide.classList.add('active')
    })
}

function removeActiveClasses () {
    slider.forEach((slide) => {
        slide.classList.remove('active')
    })
}