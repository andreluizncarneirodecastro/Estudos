using System;
using System.Globalization;
namespace Um
{
    class Program
    {
        static void Main(string[] args)
        {
            double x = 9.234723;

            Console.WriteLine(x);
            Console.WriteLine(x.ToString("F2"));
            Console.WriteLine(x.ToString("F4"));
            Console.WriteLine(x.ToString("F2", CultureInfo.InvariantCulture));

            Console.WriteLine("WriteLine - Quebra de Linha");
            Console.WriteLine("Console.Write - Sem Quebra");

            Console.WriteLine("Concatenando " + x.ToString("F2", CultureInfo.InvariantCulture) + " elementos");
          
        }
    }
}
