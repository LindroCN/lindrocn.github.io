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

function calculateMD5() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (!file) {
        alert('请先选择一个文件！');
        return;
    }

    var reader = new FileReader();
    var spark = new SparkMD5.ArrayBuffer();

    reader.onload = function (e) {
        console.log('File loaded successfully');
        var arrayBuffer = e.target.result;
        spark.append(arrayBuffer);
        var md5 = spark.end();
        console.log('MD5 calculated: ' + md5);

        document.getElementById('md5Result').textContent = 'MD5: ' + md5;
    };

    reader.onerror = function (e) {
        console.error('Error reading file', e);
        alert('文件读取错误');
    };

    reader.readAsArrayBuffer(file);
}
