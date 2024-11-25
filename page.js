document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element
    const paragraph = document.getElementById("text");

    // Get the paragraph text and split it into words
    const words = paragraph.innerText.split(/\s+/); // Split by any whitespace

    // Wrap each word in a <span> and store them in an array
    const wrappedWords = words.map(word => `<span class="word">${word}</span>`);

    // Join the wrapped words and set the paragraph's innerHTML to the new content
    paragraph.innerHTML = wrappedWords.join(" ");
});

const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});