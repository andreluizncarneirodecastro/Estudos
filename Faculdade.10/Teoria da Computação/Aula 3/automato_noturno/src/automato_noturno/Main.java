package automato_noturno;

public class Main {

	public static void main(String[] args) {
		String[] palavras = {"aba", "a", "ab", "abb", "aaa", "baa", "abbba", "abbbaa"};
		
		Automato m1 = new M1();
		Automato m2 = new M2();
		Automato m3 = new M3();
		
		System.out.println("M1 ============================= ");
		for(int i = 0; i < palavras.length; i++)
			System.out.println(palavras[i] + " é aceita? "+ m1.aceita(palavras[i]));
		
		System.out.println("M2 ============================= ");
		for(int i = 0; i < palavras.length; i++)
			System.out.println(palavras[i] + " é aceita? "+ m2.aceita(palavras[i]));
		
		System.out.println("M3 ============================= ");
		for(int i = 0; i < palavras.length; i++)
			System.out.println(palavras[i] + " é aceita? "+ m3.aceita(palavras[i]));
		
		//FUNFA!!!!!!
	}

}
