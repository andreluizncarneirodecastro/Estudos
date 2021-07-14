import os
from sys import exit
import pygame
from primitivas import *
from transformadas import *
from Recorte import *

windowTitle = 'Computação Gráfica - Aula 1'
screenWidth = 1074
screenHeight = 700

passoX = 0
passoY = 0
zoom = 0 
	
# PYGAME ******************************

os.environ['SDL_VIDEO_CENTERED'] = '1'
pygame.init()
windowSurface = pygame.display.set_mode((screenWidth, screenHeight), 0, 24)
pygame.display.set_caption(windowTitle)
pixArray = pygame.PixelArray(windowSurface)
pygame.key.set_repeat(1, 10)
	
runProgram = True
while runProgram:
# Programa ******************************
	
	# Apagando todos os pixels
	for i in range (0, pixArray.shape[0]):
		for j in range (0, pixArray.shape[1]):
			pixArray[i, j] = 0x000000
	

	#Primitivas.LinhaReta(Ponto(10,15), Ponto(150,300), pixArray, 0xFFFFFF)
	#Primitivas.LinhaReta(Ponto(10,300), Ponto(150,300), pixArray, 0xFF00FF)
	#Primitivas.LinhaBresenhamBaixa(Ponto(150,180), Ponto(228,200), pixArray, 0x00FF00)
	#Primitivas.LinhaBresenhamAlta(Ponto(200,60), Ponto(250,300), pixArray, 0xAAAA00)
	#Primitivas.LinhaBresenham(Ponto(200,60), Ponto(250,300), pixArray, 0x00FF00)

	
	meusPontos=[Ponto(300, 400), Ponto(700,350),Ponto(610,400),Ponto(650,200)]
	
	trianguloCoordenadas=[Ponto(50,150),Ponto(150,150),Ponto(100,50)]			
	quadradoCoordenadas=[Ponto(50,150),Ponto(150,150),Ponto(150,200),Ponto(50,200)]
	trapezioCoordenadas=[Ponto(50,250),Ponto(100,200),Ponto(150,200),Ponto(200,250)]
	bj1Coordenadas=[Ponto(940,350),Ponto(880,430),Ponto(810,390), Ponto(870,310)]
	hexagonoCoordenadas =[Ponto(50,350),Ponto(100,300),Ponto(150,300),Ponto(200,350),Ponto(150,400),Ponto(100,400)]
	#listaOP=[MatrixEspelhamento('x')]
	#listaOP2=[MatrixEspelhamento('y')]
	#Primitivas.Poligono(transformada(bj1Coordenadas,listaOP),pixArray,0x0000FF)
	#Primitivas.Poligono(transformada(bj1Coordenadas,listaOP2),pixArray,0x0000FF)
	#Lista=[Ponto(200,200),Ponto(0,0)]
	#Primitivas.Poligono(Lista,pixArray,0x0000FF)
	
	
	#Primitivas.Poligono(trianguloCoordenadas,pixArray,0x0000FF)

	Recorte.recorteReta(trianguloCoordenadas)
	
	Primitivas.Poligono(Mapeamento(quadradoCoordenadas,Ponto(0+passoX,0+passoY),Ponto(300+passoX,300+passoY),Ponto(0,0),Ponto(200+zoom,200+zoom)),pixArray,0xFFFFFF)
	Primitivas.ScanLine(Mapeamento(trianguloCoordenadas,Ponto(0+passoX,0+passoY),Ponto(300+passoX,300+passoY),Ponto(0,0),Ponto(200+zoom,200+zoom)),pixArray,0xFFFFFF)
	Primitivas.ScanLine(Mapeamento(hexagonoCoordenadas,Ponto(0,0),Ponto(300,300),Ponto(0,0),Ponto(500,500)),pixArray,0xFFFFFF)
    #desenhando circulo
	#Primitivas.CirculoBresenham(Ponto(300,300),100,pixArray,0xFFFFFF)

	testeRecorteReta.cohenSutherlandClip()
	# Atualizando a tela do PyGame
	pygame.display.update()

	# Recebimento de input do Pygame:
	waitKey = True
	while waitKey:
		events = pygame.event.get()
		for event in events:
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_DOWN:
					passoY -= 1
					waitKey = False
				if event.key == pygame.K_UP:
					passoY += 1
					waitKey = False
				if event.key == pygame.K_LEFT:
					passoX += 1
					waitKey = False
				if event.key == pygame.K_RIGHT:
					passoX -= 1
					waitKey = False	
				if event.key == pygame.K_a:
					zoom -= 1
					waitKey = False	
				if event.key == pygame.K_b:
					zoom += 1
					waitKey = False		

			# Esperando para sair do Pygame	(clicar no X da janela)
			if event.type == pygame.QUIT:					
				pygame.quit()
				waitKey = False
				runProgram = False
			
exit()