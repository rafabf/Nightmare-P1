class Logo {
    constructor(ctx) {
        this.ctx = ctx;
        this.image = new Image();
        this.gameWidth = 1000;
        this.gameHeight = 1000;
    }

    draw() {

        this.image.src = "PinClipart.com_nightmare-clipart_850280.png";
        this.ctx.drawImage(this.image, 1200, 75, 350, 300);



    }
}