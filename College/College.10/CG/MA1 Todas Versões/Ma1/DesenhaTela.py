from primitivas import *
from transformadas import *
from Recorte import *
from testeRecorteReta import *

def DesenhaPonto(ponto,viewport,matrizTela,cor):
    estaNaTela = Recorte.recortePonto(ponto,viewport)   
    listaPonto=[ponto]    
    if estaNaTela:
        NovoPonto=Mapeamento(listaPonto,viewport)
        matrizTela[NovoPonto[0].x][NovoPonto[0].y] = cor    
    pass
def DesenhaReta(ponto1,ponto2,viewport,matrizTela,cor):   
    listaReta=[ponto1,ponto2]
    naTela= cohenSutherlandClip(ponto1,ponto2,viewport)
    print("janela de desenho: %.2f, %.2f" %(viewport.pontoMaxJD.x,viewport.pontoMaxJD.y))
    print("Recorte: %.2f, %.2f, %.2f, %.2f," %(ponto1.x,ponto1.y,ponto2.x,ponto2.y))
    if naTela:
        Novospontos = Mapeamento(listaReta,viewport)
        print("Mapeamento: %.2f, %.2f, %.2f, %.2f," %(Novospontos[0].x,Novospontos[0].y,Novospontos[1].x,Novospontos[1].y))
        Primitivas.LinhaBresenham(Novospontos[0],Novospontos[1],matrizTela,cor) 
    pass

def DesenhaPoligono(listaVertices, viewport,matrizTela,cor):    
    Novospontos = Mapeamento(listaVertices,viewport)
    Primitivas.Poligono(Novospontos,matrizTela, cor)
    pass
def DesenhaScanLine(listaVertices, viewport,matrizTela,cor):
    Novospontos = Mapeamento(listaVertices,viewport)
    Primitivas.ScanLine(Novospontos,matrizTela, cor)
    pass


