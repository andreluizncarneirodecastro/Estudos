package parsers;

public class G4 extends Gramatica{

	public G4(String fita)
	{
		this.fita = fita;
	}
	
	@Override
	public void S() {
		inicializa();
		_S();
		match('#');
	}
	
	private void _S()
	{
		if(lookAhead == 'a')
		{
			match('a');
			A();
			match('b');
			_S();
		}
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
