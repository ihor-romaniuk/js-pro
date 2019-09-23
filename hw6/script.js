function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(context) {
        var ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function (context) {
        var ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function (context) {
        var ctx = context.getContext("2d");
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

function Canvas(id) {
    this.canvas = document.getElementById(id);

    this.add = function () {
        this.canvas = document.getElementById(id);
        for(let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

var line = new Line(20, 20, 20, 100, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(100, 90, 50, 'green'); // x, y, r, color
var rect = new Rect(180, 130, 60, 120, 'blue'); // x, y, w, h, color

var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);


