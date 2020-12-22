from primitivas import *
import math

def MatrixTranslacao(TX,TY):    
   return [[1,0,TX],[0,1,TY],[0,0,1]]
   
def MatrixEscala(SX,SY):
    return [[SX,0,0],[0,SY,0],[0,0,1]]

def MatrixRotacao(graus):
    sin = math.sin(graus)
    cos = math.cos(graus)

    return [[cos,-sin,0],[sin,cos,0],[0,0,1]]

def MatrixEspelhamento(eixo):
    if eixo =='x':
        return [[1,0,0],[0,-1,0],[0,0,1]]
    elif eixo =='y':
        return [[-1,0,0],[0,1,0],[0,0,1]] 
    else:
        return [[-1,0,0],[0,-1,0],[0,0,1]]

def MatrixCisalhamento(eixo,SH):
    if eixo =='x':
        return [[1,SH,0],[0,1,0],[0,0,1]]
    else:
        return [[1,0,0],[SH,1,0],[0,0,1]]

#modificar essa função para que funcione com uma lista de matrizes
#for inverso
def multiplicaMatrix(A,B):
    C=[]
    for linha in range(len(A)):
        #cria linha vazia
        C.append([])
        for coluna in range(len(B[0])):
        #adiciona uma nova coluna na linha
            C[linha].append(0)
            for k in range(len(A[0])):
                C[linha][coluna] += A[linha][k] *B[k][coluna]
    return C

def multiplicaVariasMatrizes(listaMatrizes):
    matrizAux = multiplicaMatrix(listaMatrizes[len(listaMatrizes)-2],listaMatrizes[len(listaMatrizes)-1])
    for m in range(len(listaMatrizes)-3, -1, -1):
        matrizAux = multiplicaMatrix(listaMatrizes[m],matrizAux)

    return matrizAux

def pontoCentral(listaVertices):
    mediaX=0
    mediaY=0
    for i in range(0,len(listaVertices)):
        mediaX += listaVertices[i].x
        mediaY += listaVertices[i].y
    mediaX =int(mediaX/len(listaVertices))
    mediaY = int(mediaY/len(listaVertices))

    return Ponto(mediaX,mediaY)    

def transformada(listaVertices,listaTransformadas):
    listaVerticeNovos =[]
    pcentro = pontoCentral(listaVertices)    
    listaTransformadas.insert(0,MatrixTranslacao(pcentro.x,pcentro.y))
    listaTransformadas.append(MatrixTranslacao(-pcentro.x,-pcentro.y))
    for i in range(0,len(listaVertices)):
        
        matrixPonto = [[listaVertices[i].x],[listaVertices[i].y],[1]]
        resultado = multiplicaVariasMatrizes(listaTransformadas)
        resultado = multiplicaMatrix(resultado,matrixPonto)        

        xNovo=int(resultado[0][0])
        yNovo=int(resultado[1][0])
        zNovo=int(resultado[2][0])
        listaVerticeNovos.append(Ponto(xNovo,yNovo,zNovo))      

    return listaVerticeNovos

def Mapeamento(listaVertices,pontoMaxJD,pontoMinJD,pontoMaxVP,pontoMinVP):
    equacao1=(pontoMaxVP.x-pontoMinVP.x)/(pontoMaxJD.x-pontoMinJD.x)
    equacao2=(pontoMaxVP.y-pontoMinVP.y)/(pontoMaxJD.y-pontoMinJD.y)
    listaVerticeNovos =[]
    mapeamentoVP =[MatrixTranslacao(pontoMinVP.x,pontoMinVP.y),MatrixEscala(equacao1,equacao2),MatrixTranslacao(-pontoMinJD.x,-pontoMinJD.y)]
    for i in range(0,len(listaVertices)):                
        matrizPonto = [[listaVertices[i].x],[listaVertices[i].y],[1]]    
        resultado = multiplicaVariasMatrizes(mapeamentoVP)
        resultado = multiplicaMatrix(resultado,matrizPonto)    

        xNovo=int(resultado[0][0])
        yNovo=int(resultado[1][0])
        zNovo=int(resultado[2][0])
        listaVerticeNovos.append(Ponto(xNovo,yNovo,zNovo))      

    return listaVerticeNovos