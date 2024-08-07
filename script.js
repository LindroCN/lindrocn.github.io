document.addEventListener('DOMContentLoaded', initializeTheme);

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', '');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
