using System;
using System.Globalization;

namespace ExercícioUri_1045
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, c, x, y, z;

            String[] vet = Console.ReadLine().Split(' ');

            a = double.Parse(vet[0], CultureInfo.InvariantCulture);
            b = double.Parse(vet[1], CultureInfo.InvariantCulture);
            c = double.Parse(vet[2], CultureInfo.InvariantCulture);

            /*            for (int i = vet.Length -1; i >= 0; i--)
                        {
                            if (vet[2] > vet[1])
                                vet[1] = vet[2];

                            String d = vet[i];
                        }
            */

            if (c > b)
            {
                z = b;
                b = c;
                c = z;
            }
            if (a < b)
            {
                x = a;
                a = b;
                b = x;
            }
            if(a < c)
            {
                y = a;
                a = c;
                c = y;
            }

            if (a >= (b + c))
                Console.WriteLine("NAO FORMA TRIANGULO");
            else if ((a * a) == ((b * b) + (c * c)))
                Console.WriteLine("TRIANGULO RETANGULO");
            else if ((a * a) > ((b * b) + (c * c)))
                Console.WriteLine("TRIANGULO OBTUSANGULO");
            else if ((a * a) < ((b * b) + (c * c)))
                Console.WriteLine("TRIANGULO ACUTANGULO");


            if (a == b && b == c && c == a)
                Console.WriteLine("TRIANGULO EQUILATERO");
            if ((a == b && b!=c || b == c && c!=a|| a == c && b !=a))
                Console.WriteLine("TRIANGULO ISOSCELES");

            //if( ((b+c)>a) || ((a+b)>b) || ((a+b)>c))
             //   Console.WriteLine("NAO FORMA TRIANGULO");
        }
    }
}
