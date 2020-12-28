using System;
using System.Globalization;

namespace _1114
{
    class Program
    {
        static void Main(string[] args)
        {
            int pw = 0;

            pw = int.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            while (pw != 2002)
            {
                Console.WriteLine("Senha Invalida");
                pw = int.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            }
            
            Console.WriteLine("Acesso Permitido");

        }
    }
}
