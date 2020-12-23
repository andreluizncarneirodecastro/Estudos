using System;
using System.Globalization;
using static System.Globalization.CultureTypes;

namespace ExercícioUri_1048
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double b, porc;
            b = a;

            if (a >= 0 && a <= 400.00)
            {
                porc = 0.15;
                Console.WriteLine("Novo salario: " + (a += a*porc).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Reajuste ganho: " + (a-b).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',','.'));
                Console.WriteLine("Em percentual: " + (porc)*100 + " %");
            }
            else if (a > 400.00 && a <= 800.000)
            {
                porc = 0.12;
                Console.WriteLine("Novo salario: " + (a += a * porc).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Reajuste ganho: " + (a - b).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Em percentual: " + (porc) * 100 + " %");
            }
            else if (a > 800.000 && a <= 1200.00)
            {
                porc = 0.10;
                Console.WriteLine("Novo salario: " + (a += a * porc).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Reajuste ganho: " + (a - b).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Em percentual: " + (porc) * 100 + " %");
            }
            else if (a > 1200.00 && a <= 2000.00)
            {
                porc = 0.07;
                Console.WriteLine("Novo salario: " + (a += a * porc).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Reajuste ganho: " + (a - b).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Em percentual: " + (porc) * 100 + " %");
            }
            else if (a > 2000.00)
            {
                porc = 0.04;
                Console.WriteLine("Novo salario: " + (a += a * porc).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Reajuste ganho: " + (a - b).ToString("F2", CultureInfo.CurrentCulture.NumberFormat).Replace(',', '.'));
                Console.WriteLine("Em percentual: " + (porc) * 100 + " %");
            }

        }
    }
}
