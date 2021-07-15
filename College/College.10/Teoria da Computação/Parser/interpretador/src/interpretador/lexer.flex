package interpretador;
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
OPERADOR_RELACIONAL = ">" | "<" | ">=" | "<=" | "==" | "!="
OPERADOR_LOGICO = "&&" | "|" | "!"
INCREMENTO_DECREMENTO = \+\+ | \-\-
SEPARADOR_ARGUMENTO = ","
FIM_COMANDO = ";"
PONTO = "."
OPERADOR_ATRIBUICAO = \=

%%
// Linguagens e expressões regulares.

\}                                { return new Token(yytext(), TipoToken.FIM_ESCOPO); }
\{								  { return new Token(yytext(), TipoToken.INICIO_ESCOPO);}

\)                                { return new Token(yytext(), TipoToken.FECHA_PARENTESES);}
\(                                { return new Token(yytext(), TipoToken.ABRE_PARENTESES);}


// Quando um constante inteiro for encontrado
{DIGITO}+				  { return new Token(yytext(), TipoToken.CONSTANTE_INTEIRA); }

// Quando um constante float for encontrado
{DIGITO}+{PONTO}{DIGITO}+				  { return new Token(yytext(), TipoToken.CONSTANTE_FLOAT); }

// Quando um fim de comandoo for encontrado
{FIM_COMANDO}				  { return new Token(yytext(), TipoToken.FIM_COMANDO); }

// Quando um separador de argumento for encontrado
{SEPARADOR_ARGUMENTO}				  { return new Token(yytext(), TipoToken.SEPARADOR_ARGUMENTO); }

// Quando um oprador logico for encontrado
{OPERADOR_LOGICO}				  { return new Token(yytext(), TipoToken.OPERADOR_LOGICO); }

// Quando um opErador relacional for encontrado
{OPERADOR_RELACIONAL}				  { return new Token(yytext(), TipoToken.OPERADOR_RELACIONAL); }

// Quando uma palavra reservada for encontrada.
{PALAVRA_RESERVADA}               { return new Token(yytext(), TipoToken.PALAVRA_RESERVADA); }

// Quando um operador aritmético for reconhecido.
{OPERADOR_ARITMETICO}			  { return new Token(yytext(), TipoToken.OPERADOR_ARITMETICO); }

//quando sinal de = for encontrado
=					  { return new Token(yytext(), TipoToken.OPERADOR_ATRIBUICAO); }

// Quando uma palavra reservada for encontrada.
{INCREMENTO_DECREMENTO}           			  { return new Token(yytext(), TipoToken.INCREMENTO); }

// Quando uma das palavras da linguagem for encontrada.
{TIPO}                            {return new Token(yytext(), TipoToken.TIPO_DADO); }

// Quando um simbolo de atribuicao for encontrado.
{OPERADOR_ATRIBUICAO}           			  { return new Token(yytext(), TipoToken.OPERADOR_ATRIBUICAO); }

// Ao ler um identificador, classifica-lo pelo TOKEN
{LETRA}({LETRA} | {DIGITO})*      { return new Token(yytext(), TipoToken.IDENTIFICADOR);}

// Quando \n for lido, incrementar o contador a classe.
\n                                {linha++;}

// Quando encontrar o \r.
\r                                {}

// Qualquer outro caractere lido, não faça nada.
.                                 {}