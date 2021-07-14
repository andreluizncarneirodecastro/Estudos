package automato_noturno;
// Reconhece L = b(a | b)*
public class M2 extends Automato{

	@Override
	protected int f(int estado, char simbolo) {
		if(estado == 0 && simbolo == 'b')
			return 1;
		if(estado == 1 && simbolo == 'a')
			return 1;
		if(estado == 1 && simbolo == 'b')
			return 1;
		return 2;
	}

	@Override
	protected boolean estadoAceitacao(int estado) {
		
		return estado == 1;
	}

	
	
}
