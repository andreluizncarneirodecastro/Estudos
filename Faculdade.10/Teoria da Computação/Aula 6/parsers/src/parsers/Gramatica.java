package parsers;

public abstract class Gramatica {

	protected char lookAhead;
	
	protected String fita;
	
	private int cabeca;
	
	
	public Gramatica()
	{
		this.cabeca = 0;
	}
	
	private char proximoSimbolo()
	{
		if(this.cabeca < this.fita.length())
		{
			char simbolo = this.fita.charAt(this.cabeca);
			this.cabeca++;
			return simbolo;
		}
		return '#';
	}
	
	protected void match(char esperado)
	{
		if(esperado == this.lookAhead)
			this.lookAhead = this.proximoSimbolo();
		else
		{
			System.out.println("Erro sintático: esperado: "+esperado+ "\tlido: "+this.lookAhead);
			System.exit(0);
		}
			
	}
	
	protected void inicializa()
	{
		this.cabeca = 0;
		this.lookAhead = proximoSimbolo();
	}
	
	// Este é o símbolo inicial da gramática.
	public abstract void S();
}
