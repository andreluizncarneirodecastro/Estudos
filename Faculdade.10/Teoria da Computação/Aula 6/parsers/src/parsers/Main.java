package parsers;

public class Main {

	public static void main(String[] args)
	{
		String teste = "aaabbaabbaaabbbab";
		
		Gramatica g = new G4(teste);
		
		// Dispara o parsing.
		g.S();
		System.out.println("G consegue gerar "+ teste);
	}
	
	
}
