package parsers;

public class G3 extends Gramatica{

	public G3(String fita)
	{
		this.fita = fita;
	}
	
	
	@Override
	public void S() {
		inicializa();
		E();
		match('#');
	}
	
	private void E()
	{
		T();
		if(lookAhead == '+')
		{
			match('+');
			E();
		}
		else if(lookAhead == '-')
		{
			match('-');
			E();
		}	
	}
	
	private void T()
	{
		F();
		if(lookAhead == '*')
		{
			match('*');
			T();
		}
		else if(lookAhead == '/')
		{
			match('/');
			T();
		}
	}

	private void F()
	{
		if(lookAhead == 'a')
			match('a');
		else if(lookAhead == 'b')
			match('b');
		else 
		{
			match('(');
			E();
			match(')');
		}
	}
	
}
