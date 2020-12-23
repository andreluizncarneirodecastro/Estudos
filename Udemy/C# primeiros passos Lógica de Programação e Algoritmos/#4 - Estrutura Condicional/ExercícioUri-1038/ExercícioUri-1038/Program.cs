using System;
using System.Globalization;

namespace ExercícioUri_1038
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, resultado;

            String[] vet = Console.ReadLine().Split(' ');

            a = double.Parse(vet[0], CultureInfo.InvariantCulture);
            b = double.Parse(vet[1], CultureInfo.InvariantCulture);

            if (a == 1)
            {
                a = 4.00;
            }
            else if (a == 2)
            {
                a = 4.50;
            }
            else if (a == 3)
            {
                a = 5.00;
            }
            else if (a == 4)
            {
                a = 2.00;
            }
            else if (a == 5)
            {
                a = 1.50;
            }

            resultado = a * b;

            Console.WriteLine("Total: R$ " + resultado.ToString("F2", CultureInfo.InvariantCulture));
        }
    }
}
