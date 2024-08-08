function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-button');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // 切换主题
    body.classList.toggle('dark-theme', newTheme === 'dark');
    body.classList.toggle('light-theme', newTheme === 'light');

    // 存储新主题到localStorage
    localStorage.setItem('theme', newTheme);

    // 更新按钮的文本
    themeButton.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}

function getTheme() {
    // 从localStorage获取主题，默认为'light'
    return localStorage.getItem('theme') || 'light';
}

document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后，根据localStorage中的主题设置或默认设置应用主题
    const theme = getTheme();
    document.body.classList.add(`${theme}-theme`);

    // 设置按钮的初始文本
    const themeButton = document.getElementById('theme-button');
    themeButton.textContent = theme === 'dark' ? '🌙' : '☀️';

    console.log(`当前主题: ${theme}-theme`);
});

// 绑定主题切换按钮的点击事件
document.getElementById('toggle-theme-button').addEventListener('click', toggleTheme);