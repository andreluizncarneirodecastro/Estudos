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
INCREMENTO_DECREMENTO = \++ | \--
OPERADOR_ATRIBUICAO = \=
OPERADOR_RELACIONAL = \> | \< | <= | >=


%%
// Linguagens e expressões regulares.

\}                                { return new Token(yytext(), TipoToken.FIM_ESCOPO); }
\{								  { return new Token(yytext(), TipoToken.INICIO_ESCOPO);}

\)                                { return new Token(yytext(), TipoToken.FECHA_PARENTESES);}
\(                                { return new Token(yytext(), TipoToken.ABRE_PARENTESES);}

// Quando um op relacional for encontrado
{OPERADOR_RELACIONAL}           			  { return new Token(yytext(), TipoToken.OPERADOR_RELACIONAL); }

// Quando uma palavra reservada for encontrada.
{INCREMENTO_DECREMENTO}           			  { return new Token(yytext(), TipoToken.INCREMENTO); }

// Quando um simbolo de atribuicao for encontrado.
{OPERADOR_ATRIBUICAO}           			  { return new Token(yytext(), TipoToken.OPERADOR_ATRIBUICAO); }

// Quando um Incremento for encontrado
{PALAVRA_RESERVADA}               { return new Token(yytext(), TipoToken.PALAVRA_RESERVADA); }


// Quando um operador aritmético for reconhecido.
{OPERADOR_ARITMETICO}			  { return new Token(yytext(), TipoToken.OPERADOR_ARITMETICO); }

// Quando uma das palavras da linguagem for encontrada.
{TIPO}                            {return new Token(yytext(), TipoToken.TIPO_DADO); }

// Ao ler um identificador, classifica-lo pelo TOKEN
{LETRA}({LETRA} | {DIGITO})*      { return new Token(yytext(), TipoToken.IDENTIFICADOR);}

// Quando \n for lido, incrementar o contador a classe.
\n                                {linha++;}

// Quando encontrar o \r.
\r                                {}

// Qualquer outro caractere lido, não faça nada.
.                                 {}