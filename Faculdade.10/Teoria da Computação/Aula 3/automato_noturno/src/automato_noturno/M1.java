package automato_noturno;

// Reconhece L = aba.
public class M1 extends Automato{

	@Override
	protected int f(int estado, char simbolo) {
		if(estado == 0 && simbolo == 'a')
			return 1;
		if(estado == 1 && simbolo == 'b')
			return 2;
		if(estado == 2 && simbolo == 'a')
			return 3;
		return 4;
	}

	@Override
	protected boolean estadoAceitacao(int estado) {
		
		return estado == 3;
	}

}
