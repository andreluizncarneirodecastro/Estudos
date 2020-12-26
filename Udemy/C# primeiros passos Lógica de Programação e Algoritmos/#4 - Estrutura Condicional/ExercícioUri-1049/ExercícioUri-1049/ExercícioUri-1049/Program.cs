using System;
using System.Globalization;

namespace ExercícioUri_1049
{
    class Program
    {
        static void Main(string[] args)
        {

            String[] tipo = { "vertebrado", "invertebrado" };

            String[] tipo2 = { "ave", "mamifero", "inseto", "anelideo" };

            String[] tipo3 = { "carnivoro", "onivoro", "onivoro", "herbivoro", "hematofago", "herbivoro", "hematofago", "onivoro"};

            String[] animal = { "aguia", "pomba", "homem", "vaca", "pulga", "lagarta", "sanguessuga", "minhoca" };

            String variavelExemplo = Console.ReadLine();
            String variavelExemplo2 = Console.ReadLine();
            String variavelExemplo3 = Console.ReadLine();

            if (variavelExemplo == "vertebrado" && variavelExemplo2 == "ave" && variavelExemplo3 == "carnivoro")
                Console.WriteLine("aguia");
            else if (variavelExemplo == "vertebrado" && variavelExemplo2 == "ave" && variavelExemplo3 == "onivoro")
                Console.WriteLine("pomba");
            else if (variavelExemplo == "vertebrado" && variavelExemplo2 == "mamifero" && variavelExemplo3 == "onivoro")
                Console.WriteLine("homem");
            else if (variavelExemplo == "vertebrado" && variavelExemplo2 == "mamifero" && variavelExemplo3 == "herbivoro")
                Console.WriteLine("vaca");
            else if (variavelExemplo == "invertebrado" && variavelExemplo2 == "inseto" && variavelExemplo3 == "hematofago")
                Console.WriteLine("pulga");
            else if (variavelExemplo == "invertebrado" && variavelExemplo2 == "inseto" && variavelExemplo3 == "herbivoro")
                Console.WriteLine("lagarta");
            else if (variavelExemplo == "invertebrado" && variavelExemplo2 == "anelideo" && variavelExemplo3 == "hematofago")
                Console.WriteLine("sanguessuga");
            else if (variavelExemplo == "invertebrado" && variavelExemplo2 == "anelideo" && variavelExemplo3 == "onivoro")
                Console.WriteLine("minhoca");


        }
    }
}
