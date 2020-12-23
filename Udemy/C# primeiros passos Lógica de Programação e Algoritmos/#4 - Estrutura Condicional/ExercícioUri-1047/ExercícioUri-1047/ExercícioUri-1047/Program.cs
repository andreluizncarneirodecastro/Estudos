using System;
using System.Globalization;

namespace ExercícioUri_1047
{
    class Program
    {
        static void Main(string[] args)
        {
            int horaInicial, minutoInicial, horaFinal, minutoFinal, horas, minutos;


            String[] vet = Console.ReadLine().Split(' ');

            horaInicial = int.Parse(vet[0], CultureInfo.InvariantCulture);
            minutoInicial = int.Parse(vet[1], CultureInfo.InvariantCulture);
            horaFinal = int.Parse(vet[2], CultureInfo.InvariantCulture);
            minutoFinal = int.Parse(vet[3], CultureInfo.InvariantCulture);

            if (horaFinal == horaInicial)
                horas = 24;

            else
                horas = horaFinal - horaInicial;
    
            if(minutoInicial > minutoFinal)
                minutos = 60 + (minutoFinal - minutoInicial);

            else
                minutos = minutoFinal - minutoInicial;

            if (minutoInicial > minutoFinal)
            {
                minutos = ((60 - minutoInicial) + minutoFinal);
                if (horaInicial < horaFinal && minutoInicial > minutoFinal)
                    horas = -1 + (horaFinal - horaInicial);
            }


            Console.WriteLine("O JOGO DUROU " + horas + " HORA(S) E " + minutos +  " MINUTO(S)");
        }
    }
}
