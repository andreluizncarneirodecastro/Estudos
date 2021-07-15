package automato_noturno;

// Reconhece L = a*bb*a
public class M3 extends Automato{

	@Override
	protected int f(int estado, char simbolo) {
		if(estado == 0 && simbolo == 'a')
			return 0;
		if(estado == 0 && simbolo == 'b')
			return 1;
		if(estado == 1 && simbolo == 'a')
			return 2;
		if(estado == 1 && simbolo == 'b')
			return 1;
		return 3;
	}

	@Override
	protected boolean estadoAceitacao(int estado) {
		
		return estado == 2;
	}

	
	
}
