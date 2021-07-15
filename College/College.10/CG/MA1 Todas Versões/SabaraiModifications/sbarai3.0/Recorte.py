from primitivas import *
DENTRO = 0      # 0000 
ESQUERDA = 1    # 0001 
DIREITA = 2     # 0010 
ABAIXO = 4      # 0100 
ACIMA = 8       # 1000 

# | bitwise or
# & bitwise and


class ViewPort:
    def __init__ (self,pontoMaxJD,pontoMinJD,pontoMaxVP,pontoMinVP):
        self.pontoMaxJD = pontoMaxJD
        self.pontoMinJD = pontoMinJD
        self.pontoMaxVP = pontoMaxVP
        self.pontoMinVP = pontoMinVP
    pass

def codigoBinario(ponto,mapeamento): 
    code = DENTRO 
    if ponto.x < mapeamento.pontoMinJD.x:
        code |= ESQUERDA 
    elif ponto.x > mapeamento.pontoMaxJD.x: 
        code |= DIREITA 
    if pont.y < mapeamento.pontoMinJD.y:
        code |= ABAIXO 
    elif ponto.y > mapeamento.pontoMinJD.y:
        code |= ACIMA  
    return code

class Recorte:   

    def recortePonto(ponto, mapeamento, matrizTela,cor):
        pass
    def recorteReta(ponto1,ponto2,mapeamento):

        pass
    def recortePoligono(listaVertices):
        pass
    pass