function toggleTheme() {  
    const body = document.body;  
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';  
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';  
  
    body.classList.remove('dark-theme', 'light-theme');  
    body.classList.add(`${newTheme}-theme`);  
  
    // 使用localStorage来存储新的主题设置  
    localStorage.setItem('theme', newTheme);  
}  
  
function getTheme() {  
    // 尝试从localStorage获取主题设置  
    const theme = localStorage.getItem('theme');  
    return theme || 'light'; // 如果没有设置，则返回'light'作为默认主题  
}  
  
document.addEventListener('DOMContentLoaded', function() {  
    const theme = getTheme();  
    document.body.classList.remove('dark-theme', 'light-theme'); // 先移除所有主题类  
    document.body.classList.add(`${theme}-theme`); // 然后添加当前主题类  
});  
  
// 假设你有一个按钮来切换主题  
document.getElementById('toggle-theme-button').addEventListener('click', toggleTheme);  
  
// 如果你想要在页面加载时检查主题，并在控制台中打印它（仅作为演示）  
document.addEventListener('DOMContentLoaded', function() {  
    const currentTheme = getTheme();  
    console.log(`当前主题: ${currentTheme}-theme`);  
});