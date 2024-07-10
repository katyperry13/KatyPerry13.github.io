a = new AudioContext() // 创建一个音频上下文，浏览器限制并发音频上下文的数量，注意重用它们
let beepEnabled = false; // 默认蜂鸣声是关闭的

function beep(vol, freq, duration) {
    if (!beepEnabled) return; // 如果蜂鸣声关闭，则直接返回，不播放蜂鸣声

    console.log({ vol, freq, duration })
    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "sine"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}

function toggleBeep() {
    beepEnabled = !beepEnabled; // 切换蜂鸣声的状态
}