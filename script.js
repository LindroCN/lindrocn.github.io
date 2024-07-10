document.addEventListener('DOMContentLoaded', function() {  
    const audioPlayer = document.getElementById('audioPlayer');  
    const volumeControl = document.getElementById('volumeControl');  
    const volumeDisplay = document.getElementById('volumeDisplay');  
  
    // 同步音量显示  
    volumeControl.addEventListener('input', function() {  
        audioPlayer.volume = this.value;  
        volumeDisplay.textContent = (this.value * 100).toFixed(0) + '%';  
    });  
  
    // 播放音乐  
    function playAudio() {  
        audioPlayer.play();  
    }  
  
    // 暂停音乐  
    function pauseAudio() {  
        audioPlayer.pause();  
    }  
  
    // 初始化音量显示  
    volumeDisplay.textContent = (volumeControl.value * 100).toFixed(0) + '%';  
});