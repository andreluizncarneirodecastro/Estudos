using System;
using System.Globalization;

namespace ex1
{
    class Program
    {
        static void Main(string[] args)
        {
            double idade, soma = 0.0, cont = 0, r =0;

            idade = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            while (idade >= 0)
            {
                soma += idade;
                idade = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                cont++;
            }
            if (cont == 0)
                Console.WriteLine("impossivel calcular");
            else
            {
                r = soma / cont;
                Console.WriteLine(r);
            }

        }
    }
}
