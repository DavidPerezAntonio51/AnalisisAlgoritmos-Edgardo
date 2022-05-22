

import * as p5 from 'p5';
var Arr = [2,80,120]; 

class RodCutting2
{
    static cutRod(price, n)
    {
        var val = Array(n + 1).fill(0);
        val[0] = 0;
        for (i; i <= n; i++)
        {
            var max_val = -Number.MAX_VALUE;
            for (j; j < i; j++)
            {
                max_val = Math.max(max_val,price[j] + val[i - j - 1]);
            }
            val[i] = max_val;
        }
        return val[n];
    }
    static main(args)
    {
        var arr = [1, 5, 8, 9, 10, 17, 17, 20];
        var size = arr.length;
        console.log("Maximo valor obtenido " + com.bean.algorithm.basic.RodCutting2.cutRod(arr, size));
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