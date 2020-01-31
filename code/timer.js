class Timer {

    constructor(ctx) {
        this.start = 3000
        this.ctx = ctx

    }
    restar() {

        if (this.start > 0) {
            this.start--
        } else alert("TIME OUT!")

    };
    draw() {
        this.ctx.font = "100px Arial";
        this.ctx.fillStyle = "tomato";

        this.ctx.fillText(this.start, 1200, 500);


    }


}