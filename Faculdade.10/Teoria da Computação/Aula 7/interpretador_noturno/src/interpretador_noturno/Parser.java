package interpretador_noturno;

import java.io.FileReader;
import java.io.IOException;

public class Parser {

	private Token lookAhead;
	private Lexer lexer;
	
	
	public Parser(String arquivoFonte) throws IOException
	{
		
		// Instanciar um Lexer
		lexer = new Lexer(new FileReader(arquivoFonte));
		// Inicializar o lookAhead. lookAhead obtem o proximo Token!
		lookAhead = (Token) lexer.yylex();
	}
	
	public void match(TipoToken esperado) 
	{
		// Se o tipo do TOKEN esperado pela gramática foi o mesmo que foi lido
		if(esperado == lookAhead.getTipo())
		{	// Continua.
			try {
				lookAhead = (Token) lexer.yylex();
			}catch(IOException ex)
			{
				System.out.println("Erro ao ler o arquivo!");
			}
		}
		else
		{
			erro("esperado: "+String.valueOf(esperado)+" lido: "+String.valueOf(lookAhead.getTipo()));
		}
	}
	
	private void erro(String msg)
	{
		System.out.println("Erro sintático na linha "+lexer.linha+ ": "+msg);
		System.exit(0);
	}
	
	// Não terminal "programa"
	public void programa()
	{
		// Se caso o primeiro token não tiver LEXEMA igual a int, erro.
		if(!lookAhead.getLexema().equals("int"))
			erro("main deve ser do tipo int.");
		match(TipoToken.TIPO_DADO);
		
		// Se caso o token não tiver LEXEMA igual a main, erro.
		if(!lookAhead.getLexema().equals("main"))
			erro("não foi encontrada a função \"main\"");
		match(TipoToken.IDENTIFICADOR);
		
		match(TipoToken.ABRE_PARENTESES);
		match(TipoToken.FECHA_PARENTESES);
		
		match(TipoToken.INICIO_ESCOPO);
		corpo();
		match(TipoToken.FIM_ESCOPO);
		
	}
	
	private void corpo()
	{
		declaracao();
		corpoCMD();
		// Avaliar o return "0". O seu tem que ter!!!.
		if(!lookAhead.getLexema().equals("return"))
			erro("Está faltando a palavra reservada \"return\".");
		match(TipoToken.PALAVRA_RESERVADA);
		match(TipoToken.CONSTANTE_INTEIRA); 
		match(TipoToken.FIM_COMANDO);
	}
	
	private void declaracao()
	{
		if(lookAhead.getTipo() == TipoToken.TIPO_DADO)
		{
			match(TipoToken.TIPO_DADO);
			match(TipoToken.IDENTIFICADOR);
			listaVar();
		}
	}
	
	private void listaVar()
	{
		if(lookAhead.getTipo() == TipoToken.FIM_COMANDO)
		{
			match(TipoToken.FIM_COMANDO);
			declaracao();
		}
		else if(lookAhead.getTipo() == TipoToken.SEPARADOR_ARGUMENTO)
		{
			match(TipoToken.SEPARADOR_ARGUMENTO);
			match(TipoToken.IDENTIFICADOR);
			listaVar();
		}
	}
	
	private void corpoCMD()
	{
		if(lookAhead.getTipo() == TipoToken.IDENTIFICADOR)
		{
			match(TipoToken.IDENTIFICADOR);
			match(TipoToken.OPERADOR_ATRIBUICAO);
			expressao();
			match(TipoToken.FIM_COMANDO);
			corpoCMD();
		}
		else if(lookAhead.getTipo() == TipoToken.PALAVRA_RESERVADA)
		{
			comandoBloco();
			corpoCMD();
		}
	}
	
	private void expressao()
	{
		
	}
	
	private void comandoBloco()
	{
		
	}
}
