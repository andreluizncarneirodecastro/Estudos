using System;
using System.Globalization;

namespace _1115
{
    class Program
    {
        static void Main(string[] args)
        {
            double x=0, y=0, a=0;

            string[] vet = Console.ReadLine().Split(' ');
            x = double.Parse(vet[0]);
            y = double.Parse(vet[1]);

            while(x != 0 ||  y != 0)
            {

                if (x > 0 && y > 0)
                {
                    Console.WriteLine("primeiro");
                    vet = Console.ReadLine().Split(' ');
                    x = double.Parse(vet[0]);
                    y = double.Parse(vet[1]);
                }

                if (x > 0 && y < 0)
                {
                    Console.WriteLine("quarto");
                    vet = Console.ReadLine().Split(' ');
                    x = double.Parse(vet[0]);
                    y = double.Parse(vet[1]);
                }

                if (x < 0 && y < 0)
                {
                    Console.WriteLine("terceiro");
                    vet = Console.ReadLine().Split(' ');
                    x = double.Parse(vet[0]);
                    y = double.Parse(vet[1]);
                }

                if (x < 0 && y > 0)
                {
                    Console.WriteLine("segundo");
                    vet = Console.ReadLine().Split(' ');
                    x = double.Parse(vet[0]);
                    y = double.Parse(vet[1]);
                }

            }
        }
    }
}
