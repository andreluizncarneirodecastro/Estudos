package automato_noturno;

public abstract class Automato {

	private int cabeca = 0;
	private String fita;
		
	private char proximoSimbolo()
	{
		// verificar se a fita não terminou.
		if(cabeca < fita.length())  
		{
			// leitura de um símbolo
			char simbolo = fita.charAt(cabeca);
			// deslocar a cabeça para a direita
			cabeca++;
			// retornar o símbolo
			return simbolo;
		}
		// A fita terminou. Retorno um símbolo de "fim de fita" (símbolo que não pertence ao alfabeto de entrada)
		return '#';
	}
	
	// função de transição de transição de estado.
	protected abstract int f(int estado, char simbolo);
	
	// Conjuntos de estados de aceitação
	protected abstract boolean estadoAceitacao(int estado);
	
	public boolean aceita(String w)
	{
		// Coloco a palavra na fita de entrada.
		fita = w;
		// Reseto a cabeça. Cabeço no símbolo mais à esquerda.
		cabeca = 0;
		// Estado inicial
		int estadoAtual = 0;
		// Leio o próximo símbolo
		char simbolo = proximoSimbolo();
		// Enquanto a fita não terminar
		while(simbolo != '#')
		{
			// transição de estado.
			estadoAtual = f(estadoAtual, simbolo);
			// Ler o próximo símbolo.
			simbolo = proximoSimbolo();
		}
		// Quando a palavra terminar. Verificar se o estado atual é de aceitação
		return estadoAceitacao(estadoAtual);
	}
}
