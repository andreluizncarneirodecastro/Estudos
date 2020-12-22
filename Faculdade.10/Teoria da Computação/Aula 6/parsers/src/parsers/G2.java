package parsers;

public class G2 extends Gramatica{

	public G2(String fita)
	{
		this.fita = fita;
	}
	
	@Override
	public void S() {
		inicializa();
		A();
		match('#');
	}

	private void A()
	{
		if(lookAhead == 'a')
		{
			match('a');
			A();
			match('b');
		}
	}
	
	
}
