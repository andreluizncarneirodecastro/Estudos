using System;
using System.Globalization;

namespace ExercícioUri_1044
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b;

            String[] vet = Console.ReadLine().Split(' ');

            a = double.Parse(vet[0], CultureInfo.InvariantCulture);
            b = double.Parse(vet[1], CultureInfo.InvariantCulture);

            if(a%b==0 || b % a == 0)
                Console.WriteLine("Sao Multiplos");
            else
                Console.WriteLine("Nao sao Multiplos"); 
         }
    }
}
