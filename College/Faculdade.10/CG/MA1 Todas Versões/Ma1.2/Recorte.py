from primitivas import *
from transformadas import *


INSIDE = 0  # 0000 
LEFT = 1    # 0001 
RIGHT = 2   # 0010 
BOTTOM = 4  # 0100 
TOP = 8     # 1000

# | bitwise or
# & bitwise and

def CodigoBin(ponto,viewport): 
    x_max = viewport.pontoMaxJD.x
    y_max = viewport.pontoMaxJD.y
    x_min = viewport.pontoMinJD.x
    y_min = viewport.pontoMinJD.y

    codigo = 0b0000
    if ponto.x < x_min:      # Esquerda
        codigo+=0b0001 
    if ponto.x > x_max:    # direita
        codigo+=0b0010 
    if ponto.y < y_min:      # esquerda
        codigo+=0b0100  
    if ponto.y > y_max:    # abaixo
        codigo+=0b1000 
  
    return codigo

def limitaEsquerda(listaVertices, x_min):
    recorteEsquerda=[]
    listaVertices.append(listaVertices[0])
    for i in range(0,len(listaVertices)-1):
        if listaVertices[i].x  >= x_min  and listaVertices[i+1].x >= x_min:
            recorteEsquerda.append(listaVertices[i+1])
        elif listaVertices[i].x  >=x_min  and listaVertices[i+1].x <= x_min:
            yNovo = listaVertices[i].y + (listaVertices[i+1].y -listaVertices[i].y) *(x_min - listaVertices[i].x) / (listaVertices[i+1].x - listaVertices[i].x) 
            xNovo = x_min
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteEsquerda.append(Ponto(xNovo,yNovo))
        elif listaVertices[i].x  <= x_min  and listaVertices[i+1].x >= x_min:
            yNovo = listaVertices[i].y + (listaVertices[i+1].y -listaVertices[i].y) *(x_min - listaVertices[i].x) / (listaVertices[i+1].x - listaVertices[i].x)
            xNovo = x_min
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteEsquerda.append(Ponto(xNovo,yNovo))
            recorteEsquerda.append(listaVertices[i+1])
    return recorteEsquerda

def limitaDireita(listaVertices, x_max):
  
    recorteDireita=[]
    ponto1=listaVertices[0]
    listaVertices.append(ponto1)
    for i in range(0,len(listaVertices)-1):
        if listaVertices[i].x  <= x_max  and listaVertices[i+1].x <= x_max:
            recorteDireita.append(listaVertices[i+1])
        elif listaVertices[i].x  <= x_max  and listaVertices[i+1].x >= x_max:
            yNovo =listaVertices[i].y + (listaVertices[i+1].y -listaVertices[i].y) *(x_max - listaVertices[i].x) / (listaVertices[i+1].x - listaVertices[i].x) 
            xNovo = x_max
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteDireita.append(Ponto(xNovo,yNovo))
        elif listaVertices[i].x  >= x_max  and listaVertices[i+1].x <= x_max:
            yNovo = listaVertices[i].y + (listaVertices[i+1].y -listaVertices[i].y) *(x_max - listaVertices[i].x) / (listaVertices[i+1].x - listaVertices[i].x)
            xNovo = x_max
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteDireita.append(Ponto(xNovo,yNovo))
            recorteDireita.append(listaVertices[i+1])
    return recorteDireita

def limitaCima(listaVertices, y_max):
    recorteCima=[]
    listaVertices.append(listaVertices[0])
    for i in range(0,len(listaVertices)-1):
        if listaVertices[i].y  <= y_max  and listaVertices[i+1].y <= y_max:
            recorteCima.append(listaVertices[i+1])
        elif listaVertices[i].y  <= y_max  and listaVertices[i+1].y >= y_max:
            yNovo = y_max 
            xNovo =listaVertices[i].x + (listaVertices[i+1].x - listaVertices[i].x) * (y_max - listaVertices[i].y) / (listaVertices[i+1].y - listaVertices[i].y)
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteCima.append(Ponto(xNovo,yNovo))
        elif listaVertices[i].y  >= y_max  and listaVertices[i+1].y <= y_max:
            yNovo = y_max
            xNovo = listaVertices[i].x + (listaVertices[i+1].x - listaVertices[i].x) * (y_max - listaVertices[i].y) / (listaVertices[i+1].y - listaVertices[i].y)
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteCima.append(Ponto(xNovo,yNovo))
            recorteCima.append(listaVertices[i+1])
    return recorteCima

def limitaBaixo(listaVertices, y_min):
    recorteBaixo=[]
    listaVertices.append(listaVertices[0])
    for i in range(0,len(listaVertices)-1):
        if listaVertices[i].y  >= y_min  and listaVertices[i+1].y >= y_min:
            recorteBaixo.append(listaVertices[i+1])
        elif listaVertices[i].y  >= y_min  and listaVertices[i+1].y <= y_min:
            yNovo = y_min 
            xNovo =listaVertices[i].x + (listaVertices[i+1].x - listaVertices[i].x) * (y_min - listaVertices[i].y) / (listaVertices[i+1].y - listaVertices[i].y)
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteBaixo.append(Ponto(xNovo,yNovo))
        elif listaVertices[i].y  <= y_min  and listaVertices[i+1].y >= y_min:
            yNovo = y_min
            xNovo = listaVertices[i].x + (listaVertices[i+1].x - listaVertices[i].x) * (y_min - listaVertices[i].y) / (listaVertices[i+1].y - listaVertices[i].y)
            listaVertices[i]=Ponto(xNovo,yNovo)
            recorteBaixo.append(Ponto(xNovo,yNovo))
            recorteBaixo.append(listaVertices[i+1])
    return recorteBaixo
    
class Recorte:   

    def recortePonto(ponto, viewport):
        if(viewport.pontoMaxJD.x > ponto.x 
        and viewport.pontoMinJD.x < ponto.x
        and viewport.pontoMaxJD.y > ponto.y
        and viewport.pontoMinJD.y < ponto.y ):            
            return True       
        return False

    def recorteReta(ponto1,ponto2,viewport): 
        deltaX = ponto2.x - ponto1.x
        deltaY = ponto2.y - ponto2.y  
        
        if deltaX == 0:
            deltaX=1
        m= deltaY / deltaX
        if m==0:
            m=1
        b = ponto1.y - m * ponto1.x

        x_max = viewport.pontoMaxJD.x
        y_max = viewport.pontoMaxJD.y
        x_min = viewport.pontoMinJD.x
        y_min = viewport.pontoMinJD.y
        
        cod1 = CodigoBin(ponto1,viewport) 
        cod2 = CodigoBin(ponto2,viewport) 
        naTela = False 
        xNovo=1.0
        yNovo=1.0       
        
        if (cod1 | cod2) == 0:
            naTela= True            
        elif (cod1 & cod2) != 0:
            naTela= False
        else:
            if cod1!=0:
                fora=cod1
                dentro=cod2
            else:
                fora=cod2
                dentro=cod1

            if (fora & LEFT)==1:
                xNovo =x_min
                yNovo = m*xNovo+b 
                cod3= CodigoBin(Ponto(xNovo,yNovo),viewport) 
                if (cod3 | dentro) == 0:
                    naTela= True            
                elif cod3 & dentro != 0:
                    naTela= False

            elif (fora & RIGHT)==2:
                xNovo = x_max
                yNovo= m*xNovo+b 
                cod3= CodigoBin(Ponto(xNovo,yNovo),viewport)
                print(cod3) 
                if (cod3 | dentro) == 0:
                     naTela= True            
                elif cod3 & dentro != 0:
                     naTela=  False

            elif (fora & TOP)==8:
                yNovo = y_max
                xNovo=(yNovo-b)/m
                cod3= CodigoBin(Ponto(xNovo,yNovo),viewport) 
                if cod3 | dentro == 0:
                     naTela= True            
                elif cod3 & dentro != 0:
                     naTela=  False

            elif (fora & BOTTOM)==4:
                yNovo = y_min
                xNovo=(yNovo-b)/m
                cod3= CodigoBin(Ponto(xNovo,yNovo),viewport) 
                if cod3 | dentro == 0:
                     naTela= True            
                elif cod3 & dentro != 0:
                     naTela= False

            if fora == cod1:
                ponto1.x=xNovo
                ponto1.x=yNovo        

            else:
                ponto2.x=xNovo
                ponto2.x=yNovo
        return naTela 
    def recortePoligono(listaVertices,viewport):
        x_max = viewport.pontoMaxJD.x
        y_max = viewport.pontoMaxJD.y
        x_min = viewport.pontoMinJD.x
        y_min = viewport.pontoMinJD.y
        verticesRecortados=[]
        limitadoEsquerda=[]
        limitadoBaixo=[]
        limitadoDireita=[]

        limitadoEsquerda=limitaEsquerda(listaVertices,x_min)
        if len(limitadoEsquerda)>0:
            limitadoBaixo = limitaBaixo(limitadoEsquerda,y_min)    
        if len(limitadoBaixo)>0:            
            limitadoDireita = limitaDireita(limitadoBaixo,x_max)
        if len(limitadoDireita)>0:
            #print(limitadoDireita[0].x,limitadoBaixo[1].x,limitadoBaixo[2].x) 
            verticesRecortados = limitaCima(limitadoDireita,y_max)
            #print(verticesRecortados[0].x,verticesRecortados[1].x,verticesRecortados[2].x)         

        return verticesRecortados      
        
    pass