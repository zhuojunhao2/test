document.addEventListener('DOMContentLoaded', function () {
    var songList = document.querySelector('.songList'),
        btnPlay = songList.querySelectorAll('.btn-play'),
        fixedSong = document.querySelector('.fixedSong audio'),
        songSrc = [
            'images/1.mp3',
            'images/2.mp3',
            'images/2.mp3',
            'images/2.mp3',
            'images/1.mp3'
        ]
    btnPlay.forEach((item, index) => {
        item.songSrc = songSrc[index]
    })
    songList.addEventListener('click', function (e) {
        if (e.target.className != 'btn-play') return
        fixedSong.src = e.target.songSrc
        fixedSong.play()
    })
})