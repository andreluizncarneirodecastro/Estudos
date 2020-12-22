package interpretador;

import java.io.IOException;
import interpretador.Gramatica;
/* Alexandro Henrique 93871
 * Andre Luiz Carneiro 92854
 * Elias Antonio da Silva 92756
 * Gabriel Carlos Resende 94038
 * Jonas Sbarai 93967
 * */

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		Parser parser =  new Parser("main.cpp");
		
		parser.programa();		

	}
	
}
