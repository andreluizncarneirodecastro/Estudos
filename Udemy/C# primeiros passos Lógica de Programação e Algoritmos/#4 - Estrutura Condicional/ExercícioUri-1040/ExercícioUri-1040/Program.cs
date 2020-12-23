using System;
using System.Globalization;

namespace ExercícioUri_1040
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, c, d, e, media, valor=0;

            String[] vet = Console.ReadLine().Split(' ');

            a = double.Parse(vet[0], CultureInfo.InvariantCulture);
            a  = 2*a;

            b = double.Parse(vet[1], CultureInfo.InvariantCulture);
            b = 3 * b;

            c = double.Parse(vet[2], CultureInfo.InvariantCulture);
            c = 4 * c;
            
            d = double.Parse(vet[3], CultureInfo.InvariantCulture);
            d = 1 * d;

            media = (a + b + c + d) / 10;

            if ( media >= 7)
            {
                Console.WriteLine("Media: " + media.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("Aluno aprovado.");

            }
            else if ( media < 5)
            {
                Console.WriteLine("Media: " + media.ToString("F2", CultureInfo.InvariantCulture));
                Console.WriteLine("Aluno reprovado.");
            }
            else if (media >= 5 && media < 6.9)
            {
                Console.WriteLine("Media: " + media.ToString("F1", CultureInfo.InvariantCulture));
                Console.WriteLine("Aluno em exame.");
                valor = -2;
            }
            
            if(valor == -2)
            {
                
                valor = (media + e) / 2;

                if (valor < 5)
                    Console.WriteLine("Aluno reprovado.");
                    Console.WriteLine("Media final: " + valor.ToString("F1", CultureInfo.InvariantCulture));
                if (valor >= 7)
                    Console.WriteLine("Aluno aprovado.");
                    Console.WriteLine("Media final: " + valor.ToString("F1", CultureInfo.InvariantCulture));

            }

        }
    }
}
