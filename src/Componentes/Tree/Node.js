function Node(val, valMax, x, y, parent, id) {
    this.value = val;
    this.valMax = valMax;
    this.child = [];
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.id = id;
}

Node.prototype.visit = function (parent) {
    if (this.child.length != 0) {
        console.log(this.child.length);
        for (let i = 0; i < this.child.length; i++) {
            this.child[i].visit(this);
        }
    }
};

Node.prototype.addNode = function (n) {

    this.child.push(n);

};

export default Node;