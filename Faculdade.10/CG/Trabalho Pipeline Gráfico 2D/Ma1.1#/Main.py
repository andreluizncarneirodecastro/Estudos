#Nome: Andre Luiz N. Carneiro de Castro
#Ra: 92854

import os
from sys import exit
import pygame
from primitivas import *
from transformadas import *
from Recorte import *
from DesenhaTela import *

passoX = 0
passoY = 0
zoom = 80
zoom1 = 0
passoQ = 0
passoW = 0
zoomW = 0
passoE = 0

windowTitle = 'Computação Gráfica - Aula 2'
screenWidth = 1300
screenHeight = 650
	
# PYGAME ******************************

os.environ['SDL_VIDEO_CENTERED'] = '1'
pygame.init()
image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\Nomes.png') 
windowSurface = pygame.display.set_mode((screenWidth, screenHeight), 0, 24)
pygame.display.set_caption(windowTitle)
windowSurface.blit(image, (0, 0)) 
image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\img1.png') 
pygame.display.set_caption(windowTitle)
windowSurface.blit(image, (0, 101)) 
image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\img2.png') 
pygame.display.set_caption(windowTitle)
windowSurface.blit(image, (650, 101)) 
image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\img4.png') 
pygame.display.set_caption(windowTitle)
windowSurface.blit(image, (653, 380)) 
#image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\img4.png') 
#pygame.display.set_caption(windowTitle)
#windowSurface.blit(image, (650, 380)) 
image = pygame.image.load(r'C:\Users\andre\Desktop\CG\Ma1\goku.png') 
pygame.display.set_caption(windowTitle)
windowSurface.blit(image, (706, 480)) 

pixArray = pygame.PixelArray(windowSurface)
pygame.key.set_repeat(1, 10)

runProgram = True

while runProgram:
# Programa ******************************
	meusPontos2 = [Ponto(76, 300), Ponto(76, 330), Ponto(140, 330), Ponto(115, 300)]
				
	#Primitivas.LinhaDDA(Ponto(600,0), Ponto(0,600), pixArray, 0xFF0000)
	#Primitivas.LinhaDDA(Ponto(601,0), Ponto(601,900), pixArray, 0xFF0000)
	#Primitivas.LinhaDDA(Ponto(599,0), Ponto(599,900), pixArray, 0xFF0000)

	#Primitivas.LinhaDDA(Ponto(0,450), Ponto(1200,450), pixArray, 0xFF0000)
	#Primitivas.LinhaDDA(Ponto(0,451), Ponto(1200,451), pixArray, 0xFF0000)
	#Primitivas.LinhaDDA(Ponto(0,449), Ponto(1200,449), pixArray, 0xFF0000)

	Primitivas.LinhaDDA(Ponto(650,100), Ponto(650,650), pixArray, 0xFFFFFF)
	Primitivas.LinhaDDA(Ponto(651,100), Ponto(651,650), pixArray, 0xFFFFFF)
	Primitivas.LinhaDDA(Ponto(649,100), Ponto(649,650), pixArray, 0xFFFFFF)

	Primitivas.LinhaDDA(Ponto(0,380), Ponto(1300,380), pixArray, 0xFFFFFF)
	Primitivas.LinhaDDA(Ponto(0,381), Ponto(1300,381), pixArray, 0xFFFFFF)
	Primitivas.LinhaDDA(Ponto(0,379), Ponto(1300,379), pixArray, 0xFFFFFF)
	
	
	# ------- Quadrante 1

	meusPontos = [Ponto(50,119), Ponto(60,100), Ponto(70,119)]

    #Linha Reta
	Primitivas.LinhaReta(Ponto(60,150), Ponto(110,197), pixArray, 0xFFFFFF)
    #Linha DDA
	Primitivas.LinhaDDA(Ponto(150,150), Ponto(188,197), pixArray, 0xFFFFFF)
	Primitivas.LinhaDDA(Ponto(260,197), Ponto(310,150), pixArray, 0xFFFFFF)
    #Bresenham Baixa
	Primitivas.LinhaBresenhamBaixa(Ponto(520,160), Ponto(570,190), pixArray, 0xFFFFFF)
	Primitivas.LinhaBresenhamBaixa(Ponto(324,164 ), Ponto(374,184), pixArray, 0xFFFFFF)
	Primitivas.LinhaBresenhamBaixa(Ponto(530,190), Ponto(580,160), pixArray, 0xFFFFFF)
    #Bresenham Alta
	Primitivas.LinhaBresenhamAlta(Ponto(290,150), Ponto(62,203), pixArray, 0xFFFFFF)
	#Bresenham
	Primitivas.LinhaBresenham(Ponto(219,150), Ponto(200,203), pixArray, 0xFFFFFF)
    #Circulo Bresenham
	Primitivas.CirculoBresenham(Ponto(550,175), 40, pixArray, 0xFFFFFF)
	#trapezio
	meusPontos2 = [Ponto(433, 270), Ponto(433, 360), Ponto(590, 360), Ponto(495, 270)]
	#triangle
	meusPontos3 = [Ponto(230,360), Ponto(305,270), Ponto(375,360)]
	#hexagono
	meusPontos4 = [Ponto(50,320),Ponto(100,270),Ponto(150,270),Ponto(200,320),Ponto(150,360),Ponto(100,360)]
	#ScanLine Poligno
	meusPontos5 = [Ponto(433, 171), Ponto(380, 252), Ponto(487, 260)]
	Primitivas.ScanLine(meusPontos5, pixArray, 0xFFFFFF)
	#ScanLine Pintando Objetos
	meusPontos6 = [Ponto(146,420), Ponto(185,210), Ponto(225,420)]
	hexagonoCoordenadas =[Ponto(50,320),Ponto(100,270),Ponto(150,270),Ponto(200,320),Ponto(150,360),Ponto(100,360)]
	Primitivas.ScanLine(hexagonoCoordenadas,pixArray,0xFFFF00)
	Primitivas.ScanLine(meusPontos3, pixArray, 0xFFFF00)
	Primitivas.ScanLine(meusPontos2, pixArray, 0xFFFF00)
	Primitivas.Poligono2(meusPontos2, pixArray, 0xFFFFFF)
	Primitivas.Poligono3(meusPontos3, pixArray, 0xFFFFFF)
	Primitivas.Poligono4(meusPontos4, pixArray, 0xFFFFFF)

	# ------- Quadrante 2 - Translacao sendo aplicada no Espelhamento -------
	obj1Coordenadas=[Ponto(792,277),Ponto(724,360),Ponto(654,320), Ponto(720,240)]
	Primitivas.Poligono(obj1Coordenadas,pixArray,0xFFFF00)
	#espelhamento Multiplicando a escala por -1
	lista1 = [MatrizTranslacao(139,0),MatrizEspelhamento('x')]
	Primitivas.Poligono(transformada(obj1Coordenadas,lista1),pixArray,0xFFFFFF)
	lista2 = [MatrizTranslacao(0,-120),MatrizEspelhamento('y')]
	Primitivas.Poligono(transformada(obj1Coordenadas,lista2),pixArray,0xFFFFFF)

	#Cisalhamento com translação (Triangulo)
	obj2Coordenadas=[Ponto(1030,360),Ponto(960,360),Ponto(995,324)]
	Primitivas.Poligono(obj2Coordenadas,pixArray,0xFFFF00)
	lista3 = [MatrizTranslacao(0,-140),MatrizCisalhamento('x',2)]
	Primitivas.Poligono(transformada(obj2Coordenadas,lista3),pixArray,0xFFFFFF)

	#Quadrado Rotação
	quadradoCoordenadas=[Ponto(1109,360),Ponto(1129,360),Ponto(1129,305),Ponto(1109,305)]
	Primitivas.ScanLine(quadradoCoordenadas, pixArray, 0xFFFF00)
	lista6 = [MatrizTranslacao(100,0),MatrizRotacao(90)]
	Primitivas.Poligono(transformada(quadradoCoordenadas,lista6),pixArray,0xFFFFFF)

	#Quadrado Escala
	lista4 = [MatrizEscala(2,2)]
	quadradoCoordenadas=[Ponto(1109,210),Ponto(1129,210),Ponto(1129,174),Ponto(1109,174)]
	Primitivas.ScanLine(quadradoCoordenadas, pixArray, 0xFFFF00)
	Primitivas.Poligono(transformada(quadradoCoordenadas,lista4),pixArray,0xFFFFFF)
	
	#obj3Coordenadas = [Ponto(1150,280 + passoX + passoY),Ponto(1090,280 + passoX + passoY),Ponto(1120,244 + passoY + passoX)]
	#Primitivas.Poligono(obj3Coordenadas, pixArray, 0xFFFFFF)
	
	#Primitivas.Poligono(transformada(obj3Coordenadas,lista4),pixArray,0xFFFFFF)

	# ---------- Quadrante 3 - PRESS W - E---------
	viewport=ViewPort(Ponto(0+passoX,0+passoY),Ponto(1300+passoX,650+passoY),Ponto(0,0),Ponto(1300+zoom,650+zoom))
	circ = 	quadradoCoordenadas2 =[Ponto(323,548),Ponto(348,548),Ponto(348,522),Ponto(323,522)]
	Primitivas.ScanLine(circ, pixArray, 0xFFFF00)
	
	lista7 = [MatrizTranslacao(-250,0),MatrizRotacao(90+passoE)]
	Primitivas.Poligono(transformada(circ,lista7),pixArray,0xFFFFFF)
	
	lista6 = [MatrizTranslacao(0+passoW,0+passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista6),pixArray,0xFFFFFF)

	lista8 = [MatrizTranslacao(0,0+passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista8),pixArray,0xFFFFFF)

	lista9 = [MatrizTranslacao(0+passoW,0),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista9),pixArray,0xFFFFFF)

	lista10 = [MatrizTranslacao(0-passoW,0),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista10),pixArray,0xFFFFFF)

	lista11 = [MatrizTranslacao(0,0-passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista11),pixArray,0xFFFFFF)

	lista12 = [MatrizTranslacao(0-passoW,0-passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista12),pixArray,0xFFFFFF)

	lista13 = [MatrizTranslacao(0-passoW, 0+passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista13),pixArray,0xFFFFFF)

	lista14 = [MatrizTranslacao(+passoW, 0-passoW),MatrizRotacao(0)]
	Primitivas.Poligono(transformada(circ,lista14),pixArray,0xFFFFFF)
	# ---------- Quadrante 4 (Recorte) ---------

	for i in range (0, 20):
		meusPontos8 = Primitivas.CirculoBresenham(Ponto(865 + passoQ,580), i, pixArray, 0xFFFF00)
		i+=1
	#Primitivas.ScanLine(meusPontos8, pixArray, 0xFFFF00)
	viewport =ViewPort(Ponto(+passoX,+passoY),Ponto(1300+passoX+zoom,650+passoY+zoom),Ponto(0,0),Ponto(1300,650))
	DesenhaPonto(Ponto(1300,700),viewport,pixArray,0xFFFFFF)
	DesenhaReta(Ponto(1100,700),Ponto(1200,700),viewport,pixArray, 0x00FF00)
	#DesenhaPoligono(trapezioCoordenadas,viewport,pixArray,0xFF00FF)	
	listaTransformada=[MatrizTranslacao(0,100)]
	#DesenhaScanLine(NovoTrapezio,viewport,pixArray,0xFF00FF)
	#viewport =ViewPort(Ponto(1300+passoX,1300+passoY),Ponto(1300+passoX,1300+passoY),Ponto(1300,1300),Ponto(650,650))

	#DesenhaPonto(Ponto(600,601),viewport,pixArray,0xFFFFFF)
	#DesenhaPonto(Ponto(600,601),viewport,pixArray,0xFFFFFF)
	#DesenhaPonto(Ponto(601,601),viewport,pixArray,0xFFFFFF)
	#DesenhaPonto(Ponto(601,600),viewport,pixArray,0xFFFFFF)
	#DesenhaReta(Ponto(800,1000),Ponto(800,1000),viewport,pixArray, 0xFFFF00)
	# Atualizando a tela do PyGame..
	pygame.display.update()

	#Recebimento de Input do Pygame:
	waitKey = True
	while waitKey:
		events = pygame.event.get()
		for event in events:			
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_DOWN:
					passoY -= 40
					waitKey = False
				if event.key == pygame.K_UP:
					passoY += 40
					waitKey = False
				if event.key == pygame.K_LEFT:
					passoX += 40
					waitKey = False
				if event.key == pygame.K_RIGHT:
					passoX -= 40
					waitKey = False	
				if event.key == pygame.K_a:
					zoom -= 10
					waitKey = False	
				if event.key == pygame.K_b:
					zoom += 10
					waitKey = False	
				if event.key == pygame.K_q:
					zoom1 += 900
					passoQ += 7
					waitKey = False	
				if event.key == pygame.K_w:
					zoomW += 700
					passoW += 60
					waitKey = False	
				if event.key == pygame.K_e:
					zoomW += 100
					passoE += 5
					waitKey = False	
				pass

		for event in events:			
			# Esperando para sair do Pygame	(clicar no X da janela)
			if event.type == pygame.QUIT:					
				pygame.quit()
				waitKey = False
				runProgram = False
			
exit()