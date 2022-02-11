import {v4 as uuidv4} from 'uuid';

function songData() {
    return [
        {
            name: "Лейла",
            cover: "https://is2-ssl.mzstatic.com/image/thumb/Music71/v4/1d/90/01/1d900115-0bbb-ca90-284e-21078ae09308/190295980672.jpg/400x400cc.jpg",
            artist: "Jah Khalib",
            audio: "https://lmusic.kz//files/download/Jah%20Khalib%20-%20%D0%9B%D0%B5%D0%B9%D0%BB%D0%B0%20%28feat.%20%D0%9C%D0%B0%D0%BA%D0%B2%D0%B8%D0%BD%29.mp3",
            color: ["#8BBBCF", "#95A1AA"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Кино",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/34/e1/20/34e12052-3c63-b2b0-e8f3-8c6d38070528/cover.jpg/400x400cc.jpg",
            artist: "Macan",
            audio: "https://lmusic.kz//files/download/MACAN%20-%20%D0%9A%D0%B8%D0%BD%D0%BE.mp3",
            color: ["#39322C", "#795A4D"],
            id: uuidv4(),
            active: false
        },
        {
            name: "5000",
            cover: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/27/d7/98/27d798dc-d352-777e-9299-dcf8b8d866a6/cover.jpg/400x400cc.jpg",
            artist: "Ирина Кайратовна",
            audio: "https://lmusic.kz/files/download/Ирина%20%D0%9A%D0%B0%D0%B9%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D0%BD%D0%B0%20-%205000.mp3",
            color: ["#BF6F00", "#AF7F4B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Beinen",
            cover: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/cc/30/43/cc3043e6-8dcd-fdc9-fbe4-6e5cc15cba4b/195497689842.jpg/400x400cc.jpg",
            artist: "Madeniyett",
            audio: "https://lmusic.kz/files/download/Madeniyett%20-%20Beinen.mp3",
            color: ["#5F3B21", "#BC8454"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Вороны",
            cover: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/55/8a/aa/558aaa0d-37fd-b7c8-2f66-0e5926a9fef7/cover.jpg/400x400cc.jpg",
            artist: "Xcho",
            audio: "https://lmusic.kz/files/mp3s/2021-10/Xcho%20-%20%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D1%8B.mp3",
            color: ["#0B0D0C", "#1C2530"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Sheker",
            cover: "https://avatars.yandex.net/get-music-content/176019/d107018e.a.7376585-1/m1000x1000?webp=false",
            artist: "Darkhan Juzz",
            audio: "https://lmusic.kz/files/download/Darkhan%20Juzz%20-%20Sheker%20%282018%29.mp3",
            color: ["#338CB4", "#338EB7"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Половина моя",
            cover: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/d8/2f/6b/d82f6b18-c70d-15c7-11ca-24f831a9c410/cover.jpg/400x400cc.jpg",
            artist: "Miyagi & Эндшпиль",
            audio: "https://lmusic.kz//files/download/Miyagi%20%26%20%D0%AD%D0%BD%D0%B4%D1%88%D0%BF%D0%B8%D0%BB%D1%8C%20-%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0%20%D0%BC%D0%BE%D1%8F.mp3",
            color: ["#1F1F1F", "#262626"],
            id: uuidv4(),
            active: false
        },
    ]
}

export default songData;