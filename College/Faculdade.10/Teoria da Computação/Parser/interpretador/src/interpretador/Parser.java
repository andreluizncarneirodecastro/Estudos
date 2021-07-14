package interpretador;

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
		// Se o tipo do TOKEN esperado pela gramatica foi o mesmo que foi lido
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
		System.out.println("Erro sintatico na linha "+(lexer.linha+1)+ ": "+msg);
		System.exit(0);
	}
	
	// Nao terminal "programa"
	public void programa()
	{
		// Se caso o primeiro token nao tiver LEXEMA igual a int, erro.
		if(!lookAhead.getLexema().equals("int"))
			erro("main deve ser do tipo int.");
		match(TipoToken.TIPO_DADO);
		
		// Se caso o token nao tiver LEXEMA igual a main, erro.
		if(!lookAhead.getLexema().equals("main"))
			erro("nao foi encontrada a funcao \"main\"");
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
			erro("Esta faltando a palavra reservada \"return\".");
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

                    if(lookAhead.getTipo() == TipoToken.INCREMENTO_DECREMENTO){
                        match(TipoToken.INCREMENTO_DECREMENTO);
                        match(TipoToken.FIM_COMANDO);
                        corpoCMD();
                    }
                    else if(lookAhead.getTipo() == TipoToken.OPERADOR_ARITMETICO){
                        match(TipoToken.OPERADOR_ARITMETICO);
                        
                        if(lookAhead.getTipo() == TipoToken.OPERADOR_ATRIBUICAO){
                            match(TipoToken.OPERADOR_ATRIBUICAO);
                            expressao();
                            match(TipoToken.FIM_COMANDO);
                            corpoCMD();
                        }
                    }
                    else {
                        match(TipoToken.OPERADOR_ATRIBUICAO);
                        expressao();
                        match(TipoToken.FIM_COMANDO);
                        corpoCMD();
                    }
            }
            else if(lookAhead.getTipo() == TipoToken.PALAVRA_RESERVADA)
            {
                if(lookAhead.getLexema().equals("return"))
                {
                    return;
                }
                
                comandoBloco();
                corpoCMD();
            }
            else if(lookAhead.getTipo() == TipoToken.INCREMENTO_DECREMENTO)
            {
                match(TipoToken.INCREMENTO_DECREMENTO);
                match(TipoToken.IDENTIFICADOR);
                match(TipoToken.FIM_COMANDO);
                corpoCMD();
            }
	}
	
	private void expressao()
	{
		termo();
		if(lookAhead.getLexema().equals("+") | lookAhead.getLexema().equals("-")) {
			match(TipoToken.OPERADOR_ARITMETICO);
			expressao();
		}
	}	
	
	private void termo()
	{
		fator();
		if(lookAhead.getLexema().equals("*") | lookAhead.getLexema().equals("/")) {
			match(TipoToken.OPERADOR_ARITMETICO);
			termo();
		}
	}
	
	private void fator()
	{
		if(lookAhead.getTipo() == TipoToken.ABRE_PARENTESES) {
			match(TipoToken.ABRE_PARENTESES);
			expressao();
			match(TipoToken.FECHA_PARENTESES);
		}
		else if(lookAhead.getTipo() == TipoToken.IDENTIFICADOR) {
			match(TipoToken.IDENTIFICADOR);
		}
		else if(lookAhead.getTipo() == TipoToken.CONSTANTE_INTEIRA) {
			match(TipoToken.CONSTANTE_INTEIRA);
		}
		else if(lookAhead.getTipo() == TipoToken.CONSTANTE_FLOAT) {
			match(TipoToken.CONSTANTE_FLOAT);
		}
		
	}
	
	private void comandoBloco()
	{
		if(lookAhead.getLexema().equals("if")) {
			match(TipoToken.PALAVRA_RESERVADA);
			match(TipoToken.ABRE_PARENTESES);
			condicao();
			match(TipoToken.FECHA_PARENTESES);
			match(TipoToken.INICIO_ESCOPO);
			corpoCMD();
			match(TipoToken.FIM_ESCOPO);
                        if(lookAhead.getLexema().equals("else"))
                            comandoElse();
		}
		else if(lookAhead.getLexema().equals("while")) {
			match(TipoToken.PALAVRA_RESERVADA);
			match(TipoToken.ABRE_PARENTESES);
			condicao();
			match(TipoToken.FECHA_PARENTESES);
                        match(TipoToken.INICIO_ESCOPO);
			corpoCMD();
			match(TipoToken.FIM_ESCOPO);
		}
		else if(lookAhead.getLexema().equals("do")) 
		{
			match(TipoToken.PALAVRA_RESERVADA);
			match(TipoToken.INICIO_ESCOPO);
			corpoCMD();
			match(TipoToken.FIM_ESCOPO);
			match(TipoToken.PALAVRA_RESERVADA);
			match(TipoToken.ABRE_PARENTESES);
			condicao();
			match(TipoToken.FECHA_PARENTESES);
			match(TipoToken.FIM_COMANDO);
			
		}
		else if(lookAhead.getLexema().equals("for")) 
		{
			match(TipoToken.PALAVRA_RESERVADA);
			match(TipoToken.ABRE_PARENTESES);
                        match(TipoToken.TIPO_DADO);
			match(TipoToken.IDENTIFICADOR);
			match(TipoToken.OPERADOR_ATRIBUICAO);
			match(TipoToken.CONSTANTE_INTEIRA);
			match(TipoToken.FIM_COMANDO);
			condicao();
			match(TipoToken.FIM_COMANDO);
			incremento();
			match(TipoToken.FECHA_PARENTESES);
			match(TipoToken.INICIO_ESCOPO);
			corpoCMD();
			match(TipoToken.FIM_ESCOPO);
		}
	}
	
	private void incremento() 
	{
		if(this.lookAhead.getTipo() == TipoToken.INCREMENTO_DECREMENTO) 
		{
			match(TipoToken.INCREMENTO_DECREMENTO);
			match(TipoToken.IDENTIFICADOR);
		}
		
		else if(this.lookAhead.getTipo() == TipoToken.IDENTIFICADOR)
		{
			match(TipoToken.IDENTIFICADOR);
			match(TipoToken.INCREMENTO_DECREMENTO);
		}
	}
	
	private void condicao() 
	{
            if(lookAhead.getTipo() == TipoToken.IDENTIFICADOR){
                match(TipoToken.IDENTIFICADOR);
                
                if(lookAhead.getTipo() == TipoToken.OPERADOR_RELACIONAL){
                    match(TipoToken.OPERADOR_RELACIONAL);

                    if(lookAhead.getTipo() == TipoToken.IDENTIFICADOR)
                        match(TipoToken.IDENTIFICADOR);
                    else match(TipoToken.CONSTANTE_INTEIRA);
                }
                
                condicao();
            }
            else if (lookAhead.getTipo() == TipoToken.OPERADOR_LOGICO){
                match(TipoToken.OPERADOR_LOGICO);
                condicao();
            }
	}
	private void comandoElse()
	{
            match(TipoToken.PALAVRA_RESERVADA);
            
            if(lookAhead.getTipo() == TipoToken.INICIO_ESCOPO) {
                match(TipoToken.INICIO_ESCOPO);
                comandoBloco();
                match(TipoToken.FIM_ESCOPO);
            }
            else {
                System.out.println("Nao abriu INICIO_ESCOPO do ELSE");
                comandoBloco();
                match(TipoToken.FIM_ESCOPO);

            }
	}
	
}