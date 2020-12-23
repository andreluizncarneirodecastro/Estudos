using System;
using System.Globalization;

namespace Sete
{
    class Program
    {
        static void Main(string[] args)
        {
            double b = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            double h = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double area = b * h;
            double perimetro = 2 * (b + h);
            double diagonal = Math.Sqrt(Math.Pow(b, 2.0) + Math.Pow(h, 2.0));
            Console.WriteLine("Area sera de: " + area.ToString("F4", CultureInfo.InvariantCulture));
            Console.WriteLine("Perimetro sera de: " + perimetro.ToString("F4", CultureInfo.InvariantCulture));
            Console.WriteLine("Diagonal sera de: " + diagonal.ToString("F4", CultureInfo.InvariantCulture));
        }
    }
}
