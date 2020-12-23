using System;
using System.Globalization;

namespace CincoEx
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite seu nome completo:");
            string n1 = Console.ReadLine();
            Console.WriteLine("Quantos quartos tem sua casa?");
            int n2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Entre com um preço de um produto:");
            double n3 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.WriteLine("Entre seu ultimo nome, idade e altura (mesma linha) : ");
            string[] vet = Console.ReadLine().Split(' ');
            string nome = vet[0];
            int idade = int.Parse(vet[1]);
            double h = double.Parse(vet[2], CultureInfo.InvariantCulture);

            Console.WriteLine("----------------");
            Console.WriteLine(n1);
            Console.WriteLine(n2);
            Console.WriteLine(n3.ToString("F2", CultureInfo.InvariantCulture));

            Console.WriteLine(nome);
            Console.WriteLine(idade);
            Console.WriteLine(h.ToString("F2", CultureInfo.InvariantCulture));

        }
    }
}
