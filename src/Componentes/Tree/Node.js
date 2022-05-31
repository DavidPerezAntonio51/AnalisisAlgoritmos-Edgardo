function Node(val, x, y) {
    this.value = val;
    this.child = [];
    this.parent;
    this.x = x;
    this.y = y;
}

/*
Node.prototype.search = function (val) {
    if (this.value == val) {
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val);
    } else if (val > this.value && this.right != null) {
        return this.right.search(val);
    }
    return null;
};*/

Node.prototype.visit = function (parent) {
    if (this.child.length != 0) {
        console.log(this.child.length);
        for (let i = 0; i < this.child.length; i++) {
            console.log("nodo: "+ this.child.length+" hijo: "+i);
            this.child[i].visit(this);
        }
    }
    //console.log(this.value);
    console.log(this.x, this.y);
    stroke('#001B48');
    line(parent.x, parent.y, this.x, this.y);
    fill('#02457A');
    ellipse(this.x, this.y, 50, 50);
    fill(255);
    //noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    fill(255);
};

Node.prototype.addNode = function (n) {

    if (this.child.length == 0) {
        //Lo coloca a la izquierda
        n.x = this.x - 100;
        n.y = this.y + 50;
    } else {
        //Lo coloca a la derecha
        n.x = this.x + 25;
        n.y = this.y + 50;
    }
    this.child.push(n);

    /*//dibuja a la izquierda
    this.left.x = this.x - 100;
    this.left.y = this.y + 50;
    //Dibuja el nodo a la derecha
    this.right.x = this.x + 100;
    this.right.y = this.y + 50;*/
};

export default Node;