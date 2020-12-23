using System;
using System.Globalization;

namespace Doze
{
    class Program
    {
        static void Main(string[] args)
        {
            int minutos=0;
            double conta;

            minutos = int.Parse(Console.ReadLine());

            conta = 50;
            if (minutos > 100)
            {
                conta += (minutos - 100) * 2.0;
            }

            Console.WriteLine("Valor a pagar: " + conta.ToString("F2", CultureInfo.InvariantCulture));
            Console.ReadLine();
        }
    }
}
