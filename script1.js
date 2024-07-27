// script1.js  
function calculateMD5() {  
    var fileInput = document.getElementById('fileInput');  
    var file = fileInput.files[0];  
  
    if (!file) {  
        return alert('请先选择一个文件！');  
    }  
  
    var reader = new FileReader();  
    var spark = new SparkMD5.ArrayBuffer();  
  
    reader.onload = function (e) {  
        var arrayBuffer = e.target.result;  
        spark.append(arrayBuffer);  
        var md5 = spark.end();
  
        document.getElementById('md5Result').textContent = md5;  
    };  
  
    reader.readAsArrayBuffer(file);  
}
