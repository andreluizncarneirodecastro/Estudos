package parsers;

public class G1 extends Gramatica{

	public G1(String fita)
	{
		this.fita = fita;
	}
	
	// S -> bA
	@Override
	public void S() {
		inicializa();
		match('b');
		A();
		match('#');
	}
	// A -> aA | $
	private void A()
	{
		if(lookAhead == 'a')
		{
			match('a');
			A();
		}
	}

}
