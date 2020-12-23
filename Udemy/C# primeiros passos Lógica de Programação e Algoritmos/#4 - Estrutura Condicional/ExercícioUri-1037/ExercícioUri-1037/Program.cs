using System;
using System.Globalization;

namespace ExercícioUri_1037
{
    class Program
    {
        static void Main(string[] args)
        {
            double a;
            a = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            if ( a >= 0 && a <= 25.0000)
            {
                Console.WriteLine("Intervalo [0,25]");
            }
            else if (a > 25.0000 && a <= 50.0000)
            {
                Console.WriteLine("Intervalo (25,50]");
            }
            else if (a > 50.0000 && a <= 75.0000)
            {
                Console.WriteLine("Intervalo (25,50]");
            }
            else if (a > 75.0000 && a <= 100.0000)
            {
                Console.WriteLine("Intervalo (75,100]");
            }
            else 
            {
                Console.WriteLine("Fora de intervalo");
            }
        }
    }
}
