#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(int argc, char const *argv[])
{
    int n = 0;

    return 0;
}

int rcp(int precios[], int longitud)
{
    int i = 0;
    int j = 0;

    int valorMaximo = INT_MIN;
    int valor = 0;

    int valores[longitud + 1];

    valores[0] = 0;

    for (i = 1; i <= longitud; i++)
    {
        valorMaximo = INT_MIN;
        for (j = 0; j < i; j++)
        {
            valor = precios[j] + valores[i - j - 1];

            if (valor > valorMaximo)
                valorMaximo = valor;
        }

        valores[i] = valorMaximo;
    }

    return valores[longitud];
}