

//import * as p5 from 'p5';
//var Arr = [2,80,120]; 

class RodCutting2
{
    static cutRod(price, n)
    {
        var max_val = Number.MIN_VALUE;
        var val = Array(n + 1).fill(0);
        val[0] = 0;
        var valor = 0;
        for (let i=1; i <= n; i++)
        {
            var max_val = Number.MIN_VALUE;
            for (let j=0; j < i; j++)
            {
                valor = price[j] + val[i - j - 1];
                if(valor > max_val){
                  max_val=valor;
                }
            }
            val[i] = max_val;
        }
        return val[n];
    }
    static main(args)
    {
        var arr = [1, 5, 8, 9, 10, 17, 17, 20];
        var size = arr.length;
        console.log("Maximo valor obtenido " + RodCutting2.cutRod(arr, size));
    }
}
RodCutting2.main([]);

/*
const canvas = (sk) => {
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth,sk.windowHeight , sk.WEBGL);
  }
  sk.draw = () => {
    sk.background(250);
    sk.translate(-250, 0, 0);

    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
  }
}
const P5 = new p5(canvas);*/