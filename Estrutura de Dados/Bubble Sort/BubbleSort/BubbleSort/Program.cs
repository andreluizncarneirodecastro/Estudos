using System;

namespace BubbleSort
{
    class Program
    {
		public static double[] bubbleSort(double[] vetor)
		{
			int tamanho = vetor.Length;
			int comparacoes = 0;
			int trocas = 0;

			for (int i = tamanho - 1; i >= 1; i--) {
				for (int j = 0; j < i; j++) {
					comparacoes++;

					if (vetor[j] < vetor[j + 1]) {
						double aux = vetor[j];
						vetor[j] = vetor[j + 1];
						vetor[j + 1] = aux;
						trocas++;
					}
				}
			}

			return vetor;
		}


		static void Main(string[] args)
        {
            double[] v = { 3, 11, 7 };

			bubbleSort(v);

			for (int i = 0; i < v.Length; i++)
            {
				Console.WriteLine(v[i]);
            }
        }
    }
}
