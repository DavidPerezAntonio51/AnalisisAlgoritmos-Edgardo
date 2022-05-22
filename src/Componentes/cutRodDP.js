var arr = [1, 5, 8, 9, 10, 17, 17, 20];
var size = arr.length;
function cutRod(price, n)
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