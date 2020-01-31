class Player {
    constructor(ctx, w, h, keys, map) {
        this.ctx = ctx;
        this.gameWidth = 50;
        this.gameHeight = 50;

        this.image = new Image();
        this.image.src = "img/FinnSprite.png";





        this.image.frames = 28;
        this.image.framesIndex = 9

        this.map = map

        this.cellX = 20
        this.cellY = 2
        this.keytaken = true

    }

    draw(framesCounter) {
        //--recorte de los frames del Finn y tamaño
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames), //Punto x donde empieza a recortar
            0, //Punto y donde empieza a recortar
            Math.floor(this.image.width / this.image.frames), //Punto x donde termina de recortar
            this.image.height, //Punto y donde termina de recortar
            46 * this.cellX,
            46 * this.cellY,
            50,
            50
        );

        //---para iluminar---
        this.map.shadow.tiles[this.cellY][this.cellX] = false
        this.map.shadow.tiles[this.cellY + 1][this.cellX + 1] = false
        this.map.shadow.tiles[this.cellY - 1][this.cellX + 1] = false
        this.map.shadow.tiles[this.cellY - 1][this.cellX - 1] = false
        this.map.shadow.tiles[this.cellY + 1][this.cellX - 1] = false
        this.map.shadow.tiles[this.cellY][this.cellX - 1] = false
        this.map.shadow.tiles[this.cellY][this.cellX + 1] = false
        this.map.shadow.tiles[this.cellY - 1][this.cellX] = false
        this.map.shadow.tiles[this.cellY + 1][this.cellX] = false

        this.animate(framesCounter)


    }
    moveLeft() {
        //--movimiento mas darle valor a las casillas
        switch (mapbg.tiles[this.cellY][this.cellX - 1]) {
            case 3:
            case 46:
            case 54:
            case 4:
            case 2:
            case 15:
            case 14:
            case 13:
            case 50:
                break;
            case 38: {
                alert("has perdido crack");
            }
                break;
            case 73: {

                this.keytaken = false

            }
                break;
            case 52: {
                this.keytaken == false ? alert("sal y corre") : alert("necesitas la llave")

            }
            default:
                this.cellX--

                this.map.shadow.tiles[this.cellY][this.cellX + 2] = true
                this.map.shadow.tiles[this.cellY + 1][this.cellX + 2] = true
                this.map.shadow.tiles[this.cellY - 1][this.cellX + 2] = true


            // this.map.shadow.tiles[this.cellY + 2][this.cellX] = true
            // this.map.shadow.tiles[this.cellY - 2][this.cellX - 2] = true



        }
    }

    moveRight() {
        //--movimiento mas darle valor a las casillas
        switch (mapbg.tiles[this.cellY][this.cellX + 1]) {
            case 3:
            case 46:
            case 54:
            case 4:
            case 2:
            case 15:
            case 14:
            case 13:
            case 50:

                break;
            case 38: {
                alert("has perdido crack");
            }
                break;
            case 73: {

                this.keytaken = false


            }
                break;
            case 52: {
                this.keytaken == false ? alert("sal y corre, te has librado de la pesadilla") : alert("necesitas la llave")
            }
            default:
                this.cellX++
                this.map.shadow.tiles[this.cellY][this.cellX - 2] = true
                this.map.shadow.tiles[this.cellY - 1][this.cellX - 2] = true
                this.map.shadow.tiles[this.cellY + 1][this.cellX - 2] = true
        }


    }
    moveUp() {
        //--movimiento mas darle valor a las casillas
        switch (mapbg.tiles[this.cellY - 1][this.cellX]) {
            case 3:
            case 46:
            case 54:
            case 4:
            case 2:
            case 15:
            case 14:
            case 13:
            case 50:
                break;
            case 38: {
                alert("has perdido crack");
            }
            case 7: {
                alert("Petete´s Books")
            }


                break;

            case 73: {

                this.keytaken = false
            }
            case 52: {
                this.keytaken == false ? alert("sal y corre") : alert("necesitas la llave")
            }
            default:
                this.cellY--

                this.map.shadow.tiles[this.cellY + 2][this.cellX] = true

                this.map.shadow.tiles[this.cellY + 2][this.cellX + 1] = true
                this.map.shadow.tiles[this.cellY - 2][this.cellX + 1] = true
                this.map.shadow.tiles[this.cellY + 2][this.cellX - 1] = true
        }

    }
    moveDown() {
        //--movimiento mas darle valor a las casillas
        switch (mapbg.tiles[this.cellY + 1][this.cellX]) {
            case 3:
            case 46:
            case 54:
            case 4:
            case 2:
            case 15:
            case 14:
            case 13:
            case 50:
                break;
            case 38: {
                alert("has perdido crack");
            }
                break;
            case 73: {

                this.keytaken = false
                alert("tienes la llave, dirigete a la puerta")
            }
            // case 52: {
            //     this.keytaken == false ? console : alert("necesitas la llave")
            // }
            default:
                this.cellY++

                this.map.shadow.tiles[this.cellY - 2][this.cellX] = true
                this.map.shadow.tiles[this.cellY + 2][this.cellX + 1] = true
                this.map.shadow.tiles[this.cellY - 2][this.cellX - 1] = true
                this.map.shadow.tiles[this.cellY - 2][this.cellX + 1] = true
        }


    }
    //--animar al muñecajo
    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++;
            if (this.image.framesIndex > 15) {
                this.image.framesIndex = 9;
            }
        }

    }
}
