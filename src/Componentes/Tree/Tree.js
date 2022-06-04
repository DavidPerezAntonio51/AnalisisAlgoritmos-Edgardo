import Node from './Node';

function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function () {
    this.root.visit(this.root);
};

Tree.prototype.search = function (val) {
    var found = this.root.search(val);
    return found;
};

Tree.prototype.addValue = function (val, padre) {
    var n = new Node(val);
    if (padre == null) {
        n.parent = null;
        this.root = n;
        this.root.x = width / 2;
        this.root.y = 46;
    } else {
        n.parent = padre;
        padre.addNode(n);
    }
    return n;
};

export default Tree;