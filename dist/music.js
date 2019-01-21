const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "一生所爱",
        artist: '卢冠廷/莫文蔚',
        url: 'http://www.ytmp3.cn/down/48288.mp3',
        cover: 'http://img.ytmp3.cn/image/21.jpg',
      },
      {
        name: '演员',
        artist: '薛之谦',
        url: 'http://www.ytmp3.cn/down/57157.mp3',
        cover: 'http://img.ytmp3.cn/image/7.jpg',
      }
      {
        name: '去年夏天',
        artist: '王大毛',
        url: 'http://www.ytmp3.cn/down/52232.mp3',
        cover: 'http://img.ytmp3.cn/image/94.jpg',
      }
    ]
});