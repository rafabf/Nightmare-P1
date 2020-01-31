class Background {



    constructor(ctx, w, h, map) {
        this.ctx = ctx;
        this.gameWidth = 1000;
        this.gameHeight = 1000;

        this.image = new Image();
        this.image.src = "img/Itch release raw tileset 01.png";


        this.posX = 40;

        this.posY = this.gameHeight * 1 - this.height;



        this.map = map

        this.image.frames = 120; //Indicamos el numero de frames que tiene la imagen
        this.image.framesIndex = 0  //Frame actual menos 1, lo usaremos para recortar la imagen en drawImage






    };


    draw() {
        for (let y = 0; y < 22; y++) {
            for (let x = 0; x < 22; x++) {
                let tiles = this.map.tiles[y][x];
                let ref = this.map.reference[tiles]
                let colWidth = this.image.width / 8
                let colHeight = this.image.height / 15
                this.ctx.drawImage(this.image, ref.col * colWidth, ref.row * colHeight, colWidth, colHeight, this.gameWidth / this.map.cols * x, this.gameWidth / this.map.rows * y, 50, 50);

            }
        }
        //esto se podría refactorizar pero creo que asi es mas legible


        for (let y = 0; y < 22; y++) {
            for (let x = 0; x < 22; x++) {

                let tiles = this.map.tiles[y][x];
                this.ctx.fillStyle = "rgba(37, 37, 37, 0.98)";
                if (this.map.shadow.tiles[y][x] == true) {

                    this.ctx.fillRect(this.gameWidth / this.map.cols * x, this.gameHeight / this.map.rows * y, 50, 50)
                }

            }
        }



    };




}







// {
// this.image.frames = 3; //Indicamos el numero de frames que tiene la imagen
// this.image.framesIndex = 0; //Frame actual menos 1, lo usaremos para recortar la imagen en drawImage
// getTile: function (col, row) {
//     return this.tiles[row * map.cols + col]
// },