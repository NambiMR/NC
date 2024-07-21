document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html') // Adjust the path as needed
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
