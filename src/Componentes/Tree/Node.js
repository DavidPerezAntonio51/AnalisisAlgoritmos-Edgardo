function Node(val, valMax, parent, id) {
    this.value = val;
    this.valMax = valMax;
    this.child = [];
    this.parent = parent;
    this.id = id;
}

Node.prototype.search = function (id) {
    //console.log("antesdetodo "+this.id + "??"+id);
    var nodo;
    if (this.id == id) {
        //console.log("hola");
        return this;
    }
    console.log(this.id);
    for (let i = 0; i < this.child.length; i++) {
        nodo = this.child[i].search(id);
    }
    //console.log("Aqui retorna null"+this.id);
    return nodo;
};

Node.prototype.addNode = function (n) {

    this.child.push(n);

};

export default Node;