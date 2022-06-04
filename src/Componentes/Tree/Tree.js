import Node from './Node';

function Tree() {
    this.root = null;
    this.nodesID = [];
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
        n.id = 0;
        this.nodesID.push(n.id);
        this.root = n;
        this.root.x = width / 2;
        this.root.y = 46;
    } else {
        n.parent = padre;
        n.id = this.nodesID[this.nodesID.length-1] + 1;
        this.nodesID.push(n.id);
        padre.addNode(n);
    }
    return n;
};

export default Tree;