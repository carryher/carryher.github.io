var audio = document.getElementById("myAudio");
var channel = new BroadcastChannel("audioChannel");

function togglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

if (localStorage.getItem("audioTime")) {
    audio.currentTime = parseFloat(localStorage.getItem("audioTime"));
}

// 监听播放位置变化事件
audio.addEventListener("timeupdate", function () {
    localStorage.setItem("audioTime", audio.currentTime);
});

// 监听来自其他页面的音频播放位置
channel.onmessage = function (event) {
    audio.currentTime = event.data;
};
