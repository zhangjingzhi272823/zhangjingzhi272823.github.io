const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "大鱼",
        artist: '周深',
        url: 'http://www.ytmp3.cn/down/57223.mp3',
        cover: 'http://img.ytmp3.cn/image/84.jpg',
      }
    ]
});