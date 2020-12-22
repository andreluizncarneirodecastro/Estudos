#Nome: Andre Luiz N. Carneiro de Castro
#Ra: 92854

import os
from sys import exit
import pygame
from primitivas import *

windowTitle = 'Computação Gráfica - Aula 2'
screenWidth = 350
screenHeight = 350
	
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
			pixArray[i, j] = 0xFFFFFF
	#x
	Primitivas.LinhaReta(Ponto(0,0), Ponto(350,350), pixArray, 0xFF0000)
	Primitivas.LinhaReta(Ponto(0,349), Ponto(349,0), pixArray, 0xFF0000)
	
	

	# ------- Quadrante 1
	Primitivas.LinhaDDA(Ponto(60,140), Ponto(60,205), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenhamBaixa(Ponto(60,157), Ponto(80,190), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenhamBaixa(Ponto(40,172), Ponto(60,157), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenhamAlta(Ponto(60,205), Ponto(80,220), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenhamAlta(Ponto(60,205), Ponto(115,230), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenhamAlta(Ponto(60,205), Ponto(30,230), pixArray, 0x00FFFF)
	Primitivas.LinhaBresenham(Ponto(54,126), Ponto(58,129), pixArray, 0xFF00FF)
	Primitivas.LinhaBresenham(Ponto(54,126), Ponto(58,129), pixArray, 0xFF00FF)
	Primitivas.LinhaBresenham(Ponto(66,126), Ponto(62,129), pixArray, 0xFF00FF)
	meusPontos = [Ponto(50,119), Ponto(60,100), Ponto(70,119)]
	Primitivas.CirculoBresenham(Ponto(60,130), 10, pixArray, 0x00FFFF)

	# ------ Quadrante 2
	Primitivas.CirculoBresenham(Ponto(60,130), 10, pixArray, 0x00FFFF)

	#trapezio
	meusPontos2 = [Ponto(76, 300), Ponto(76, 330), Ponto(140, 330), Ponto(115, 300)]
	
	#triangle
	meusPontos3 = [Ponto(146,266), Ponto(170,232), Ponto(189,266)]

	#hexagono
	meusPontos4 = [Ponto(206,287), Ponto(234,287), Ponto(254,307), Ponto(237,331), Ponto(206,331), Ponto(190,305)]

	#ScanLine
	meusPontos5 = [Ponto(190, 15), Ponto(120, 90), Ponto(200, 110)]

	
	Primitivas.Poligono(meusPontos, pixArray, 0x00FFFF)
	Primitivas.Poligono2(meusPontos2, pixArray, 0x00FF00)
	Primitivas.Poligono3(meusPontos3, pixArray, 0xB0E0E6)
	Primitivas.Poligono4(meusPontos4, pixArray, 0xFFFF00)
	
	#SL
	Primitivas.ScanLine(meusPontos5, pixArray, 0xFFFF00)
	
	# Atualizando a tela do PyGame
	pygame.display.update()

	# Recebimento de input do Pygame:
	waitKey = True
	while waitKey:
		events = pygame.event.get()
		for event in events:			
			# Esperando para sair do Pygame	(clicar no X da janela)
			if event.type == pygame.QUIT:					
				pygame.quit()
				waitKey = False
				runProgram = False
			
exit()