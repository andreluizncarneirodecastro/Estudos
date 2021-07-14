from primitivas import *
from transformadas import *

DENTRO = 0      # 0000 
ESQUERDA = 1    # 0001 
DIREITA = 2     # 0010 
ABAIXO = 4      # 0100 
ACIMA = 8       # 1000 

# | bitwise or
# & bitwise and

def codigoBinario(ponto,mapeamento): 
    code = DENTRO 
    if ponto.x < mapeamento.pontoMinJD.x:
        code |= ESQUERDA 
    elif ponto.x > mapeamento.pontoMaxJD.x: 
        code |= DIREITA 
    if ponto.y < mapeamento.pontoMinJD.y:
        code |= ABAIXO 
    elif ponto.y > mapeamento.pontoMaxJD.y:
        code |= ACIMA  
    return code

class Recorte:   

    def recortePonto(ponto, viewport):
        if(viewport.pontoMaxJD.x > ponto.x 
        and viewport.pontoMinJD.x < ponto.x
        and viewport.pontoMaxJD.y > ponto.y
        and viewport.pontoMinJD.y < ponto.y ):            
            return True       
        return False

    def recorteReta(ponto1,ponto2,viewport): 
        listaPontos=[]         
        code1 = codigoBinario(ponto1,viewport)
        code2 = codigoBinario(ponto1,viewport)
        accept = False

        while True: 
  
            # If both endpoints lie within rectangle 
            if code1 == 0 and code2 == 0: 
                accept = True
                listaPontos.append(ponto1)
                listaPontos.append(ponto2)
                break
    
            # If both endpoints are outside rectangle 
            elif (code1 & code2) != 0: 
                break
    
            # Some segment lies within the rectangle 
            else: 
    
                # Line Needs clipping 
                # At least one of the points is outside,  
                # select it 
                x = 1.0
                y = 1.0                
                if code1 != 0: 
                    code_out = code1 
                else: 
                    code_out = code2 
    
                # Find intersection point 
                # using formulas y = ponto1.y + slope * (x - x1),  
                # x = x1 + (1 / slope) * (y - ponto1.y) 
                if code_out & TOP: 
                    
                    # point is above the clip rectangle 
                    x = ponto1.x + (ponto2.x - ponto1.x) * (viewport.pontoMaxJD.y - ponto1.y) / (ponto2.y - ponto1.y) 
                    y = viewport.pontoMaxJD.y 
    
                elif code_out & BOTTOM: 
                    
                    # point is below the clip rectangle 
                    x = ponto1.x + (ponto2.x - ponto1.x) *(viewport.pontoMinJD.y - ponto1.y) / (ponto2.y - ponto1.y) 
                    y = viewport.pontoMinJD.y 
    
                elif code_out & RIGHT: 
                    
                    # point is to the right of the clip rectangle 
                    y = ponto1.y + (ponto2.y - ponto1.y) * (viewport.pontoMaxJD.x - ponto1.x) / (ponto2.x - ponto1.x) 
                    x = viewport.pontoMaxJD.x 
    
                elif code_out & LEFT: 
                    
                    # point is to the left of the clip rectangle 
                    y = ponto1.y + (ponto2.y - ponto1.y) *(viewport.pontoMinJD.x - ponto1.x) / (ponto2.x - ponto1.x) 
                    x = viewport.pontoMinJD.x 
    
                # Now intersection point x, y is found 
                # We replace point outside clipping rectangle 
                # by intersection point 
                if code_out == code1: 
                    ponto1.x = x 
                    ponto1.y = y                    
                    code1 = codigoBinario(ponto1,viewport) 
    
                else: 
                    ponto2.x = x 
                    ponto2.y = y                     
                    code2 = codigoBinario(ponto2.viewport) 
    
        if accept:             
             print ("Line accepted from %.2f, %.2f to %.2f, %.2f" % (listaPontos[0].x,listaPontos[0].y,listaPontos[1].x,listaPontos[1].y))
        else: 
            print("Line rejected")
        pass
                

    def recortePoligono(listaVertices):
        pass
    pass