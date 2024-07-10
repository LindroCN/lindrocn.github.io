function calculateMD5() {  
    const fileInput = document.getElementById('fileInput');  
    if (fileInput.files.length === 0) {  
        return; // 没有选择文件  
    }  
  
    const file = fileInput.files[0];  
    const chunkSize = 2097152; // 读取文件时的块大小，这里设置为2MB  
    const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;  
    const chunks = Math.ceil(file.size / chunkSize);  
    let currentChunk = 0;  
    const spark = new SparkMD5.ArrayBuffer();  
  
    function loadNext() {  
        const reader = new FileReader();  
        const start = currentChunk * chunkSize;  
        const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;  
        const chunk = blobSlice.call(file, start, end);  
  
        reader.onload = function(e) {  
            spark.append(e.target.result); // Append array buffer  
            currentChunk++;  
  
            if (currentChunk < chunks) {  
                loadNext();  
            } else {  
                const md5 = spark.end(); // Compute MD5  
                document.getElementById('md5Result').textContent = md5;  
            }  
        };  
  
        reader.onerror = function() {  
            console.warn('oops, something went wrong.');  
        };  
  
        reader.readAsArrayBuffer(chunk);  
    }  
  
    loadNext();  
}