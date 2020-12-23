using System;

namespace Nove
{
    class Program
    {
        static void Main(string[] args)
        {
            int horas, resto=0, minutos;
            int n1 = int.Parse(Console.ReadLine());
            horas = n1 / 3600;
  
            resto = (n1 % 3600)%60;

            minutos = (n1 % 3600) / 60;

            Console.WriteLine(horas + ":" + minutos + ":" + resto); 
        }
    }
}
