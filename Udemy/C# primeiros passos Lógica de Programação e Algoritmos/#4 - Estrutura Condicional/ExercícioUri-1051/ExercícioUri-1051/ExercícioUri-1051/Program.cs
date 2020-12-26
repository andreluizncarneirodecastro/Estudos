using System;
using System.Globalization;
namespace ExercícioUri_1051
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            if (salario > 0.0 && salario <= 2000.00)
                Console.WriteLine("Isento");

            else if (salario >= 2000.01 && salario <= 3000.00)
            {
                salario = (salario - 2000)*0.08;
                Console.WriteLine("R$ " + salario.ToString("F2", CultureInfo.InvariantCulture));
            }
            else if (salario >= 3000.01 && salario <= 4500.00)
            {
                salario = ((1000.00 * 0.08) + (0.18 * 2.00));
                Console.WriteLine("R$ " + salario.ToString("F2", CultureInfo.InvariantCulture));
            }
            else if (salario > 4500.00)
            {
                salario = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08);
                Console.WriteLine("R$ " + salario.ToString("F2", CultureInfo.InvariantCulture));
            }

        }
    }
}
