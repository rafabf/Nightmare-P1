const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    audio: new Audio(src = "pokemon-oro-heartgold-y-plata-soulsilver-tema-musical-de-entrenador-rojo-red.mp3"),

    framesCounter: 0,
    score: undefined,

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        //this.audioButton = document.getElementById("play")
        //indicar al boton que en onclick llame a playaudio

        this.width = window.innerWidth * 0.98;
        this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.setEventListeners()
        this.start();
    },
    start() {
        this.setInitialState();
        this.timer = new Timer(this.ctx)

        this.interval = setInterval(() => {

            this.framesCounter++; //Contador de frames

            if (this.framesCounter > 5000) this.framesCounter = 0;
            this.timer.restar()

            this.clear();
            this.drawAll();
            this.audio.play()

        }, 1000 / this.fps);
    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    // playAudio() {
    //     console.log("playing")
    //     this.audio.play()
    //},
    setInitialState() {
        this.map = mapbg
        this.background = new Background(this.ctx, this.canvas.width, this.canvas.height, this.map);
        this.player = new Player(this.ctx, this.canvas.width, this.canvas.height, this.keys, this.map);
        this.logo = new Logo(this.ctx)
    },
    drawAll() {
        //this.background.dibujarmapa();
        this.background.draw();
        this.player.draw(this.framesCounter);
        this.drawTimer();
        this.logo.draw();
    },
    drawTimer() {
        //con esta funcion pintamos el marcador
        this.timer.draw();
    },
    drawLogo() {
        this.logo.draw();
    },
    setEventListeners() {
        document.addEventListener("keydown", (e) => {
            e.keyCode == 83 ? this.player.moveDown() : null
            e.keyCode == 65 ? this.player.moveLeft() : null
            e.keyCode == 68 ? this.player.moveRight() : null
            e.keyCode == 87 ? this.player.moveUp() : null
        })
    }
}
// frentes abiertos: oscuridad
