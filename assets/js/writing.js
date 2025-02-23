const hoverImage = document.getElementById('hover-image');
const hoverTitles = document.querySelectorAll('li > a');

console.log("loaded")

hoverTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
        const imageUrl = title.getAttribute('data-image');
        hoverImage.style.backgroundImage = `url('${imageUrl}')`;
        hoverImage.style.display = 'block';
    })

    title.addEventListener('mouseleave', () => {
        hoverImage.style.display = 'none';
    })

    title.addEventListener('mousemove', (e) => {
        // Position the image near the cursor
        hoverImage.style.top = `${e.pageY + 10}px`; // 10px below the cursor
        hoverImage.style.left = `${e.pageX + 10}px`; // 10px to the right of the cursor
    });
})