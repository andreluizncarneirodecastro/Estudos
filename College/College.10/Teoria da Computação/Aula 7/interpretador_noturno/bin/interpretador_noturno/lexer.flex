package interpretador_noturno;
%% 
%class Lexer
%{

	int linha = 0;     
 
%}
%eof{
	System.out.println("Arquivo interpretado com " + linha + " linhas.");
	System.exit(0);
%eof}

// Especifica os alfabetos e linguagens.
LETRA  = [a-zA-Z]
DIGITO = [0-9]
TIPO   = "int" | "float" | "char" | "double"
OPERADOR_ARITMETICO = \+ | \- | \* | \/
PALAVRA_RESERVADA = "if" | "while" | "do" | "switch" | "else" | "return" | "for"

%%
// Linguagens e expressões regulares.

\}                                { return new Token(yytext(), TipoToken.FIM_ESCOPO); }
\{								  { return new Token(yytext(), TipoToken.INICIO_ESCOPO);}

\)                                { return new Token(yytext(), TipoToken.FECHA_PARENTESES);}
\(                                { return new Token(yytext(), TipoToken.ABRE_PARENTESES);}

// Quando uma palavra reservada for encontrada.
{PALAVRA_RESERVADA}               { return new Token(yytext(), TipoToken.PALAVRA_RESERVADA); }

// Quando um operador aritmético for reconhecido.
{OPERADOR_ARITMETICO}			  { return new Token(yytext(), TipoToken.OPERADOR_ARITMETICO); }

// Quando uma das palavras da linguagem for encontrada.
{TIPO}                            {return new Token(yytext(), TipoToken.TIPO_DADO); }

// Ao ler um identificador, classifica-lo pelo TOKEN
{LETRA}({LETRA} | {DIGITO})*      { return new Token(yytext(), TipoToken.IDENTIFICADOR);}

// Ao ler um numero, classificá-lo pelo TOKEN
{DIGITO}+                         {return new Token(yytext(), TipoToken.CONSTANTE_INTEIRA);}

;                                 {return new Token(yytext(), TipoToken.FIM_COMANDO);}

,                                 {return new Token(yytext(), TipoToken.SEPARADOR_ARGUMENTO);}

// Quando \n for lido, incrementar o contador a classe.
\n                                {linha++;}

// Quando encontrar o \r.
\r                                {}

// Qualquer outro caractere lido, não faça nada.
.                                 {}