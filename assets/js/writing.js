const hoverImage = document.getElementById('hover-image');
const hoverTitles = document.querySelectorAll('li > a');


hoverTitles.forEach(title => {
    const imageUrl = title.getAttribute('data-image');
    const img = new Image();
    img.src = imageUrl;
});

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
        hoverImage.style.top = `${e.pageY + 10}px`; // 10px below the cursor
        hoverImage.style.left = `${e.pageX + 10}px`; // 10px to the right of the cursor
    });
})