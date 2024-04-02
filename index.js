document.addEventListener('DOMContentLoaded', function() {
    // Target the paragraph element with id "text"
    var paragraph = document.getElementById('text');
    
    // Check if the paragraph element exists
    if(paragraph) {
        // Replace the text content of the paragraph element
        paragraph.textContent = "This is really cool!";
    } else {
        console.error("Paragraph element with id 'text' not found.");
    }
});
