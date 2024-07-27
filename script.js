document.getElementById('musicFile').addEventListener('change', function(e) {  
    const files = e.target.files;  
    const playlist = document.getElementById('playlist');  
    playlist.innerHTML = ''; // 清空当前歌曲列表  
  
    // 遍历文件并添加到歌曲列表  
    for (let i = 0; i < files.length; i++) {  
        const file = files[i];  
        const li = document.createElement('li');  
        const link = document.createElement('a');  
        link.href = URL.createObjectURL(file);  
        link.download = file.name;  
        link.textContent = file.name;  
        link.onclick = function(e) {  
            e.preventDefault(); // 阻止下载  
            const audio = document.getElementById('audioPlayer');  
            audio.src = this.href;  
            audio.play();  
        };  
        li.appendChild(link);  
        playlist.appendChild(li);  
    }  
  
    // 默认播放第一首歌  
    if (files.length > 0) {  
        const firstSong = playlist.querySelector('li a');  
        firstSong.click();  
    }  
});  
  
function playCurrentSong() {  
    const audio = document.getElementById('audioPlayer');  
    audio.play();  
}  
  
function pauseAudio() {  
    const audio = document.getElementById('audioPlayer');  
    audio.pause();  
}  
  
function nextSong() {  
    const playlist = document.getElementById('playlist');  
    const links = playlist.querySelectorAll('a');  
    const currentIndex = Array.from(links).indexOf(document.querySelector('a[href="' + document.getElementById('audioPlayer').src + '"]'));  
    if (currentIndex + 1 < links.length) {  
        links[currentIndex + 1].click();  
    }  
}  
  
function setVolume(volume) {  
    const audio = document.getElementById('audioPlayer');  
    audio.volume = volume;  
    document.getElementById('volumeDisplay').textContent = `${(volume * 100).toFixed(0)}%`;  
}
