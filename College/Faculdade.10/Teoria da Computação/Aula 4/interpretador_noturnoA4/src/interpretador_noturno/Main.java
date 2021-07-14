package interpretador_noturno;

import java.io.FileReader;
import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException{

		FileReader arquivo = new FileReader("main.cpp");
		Lexer lexer = new Lexer(arquivo);
		
		while(true)
		{
			Token t = (Token) lexer.yylex();
			System.out.println(t);
		}
		
	}

}
