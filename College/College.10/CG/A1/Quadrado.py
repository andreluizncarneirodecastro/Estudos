import os
from sys import exit
import pygame

windowTitle = 'Computação Gráfica - Aula 1'
screenWidth = 844
screenHeight = 800
	
# PYGAME ******************************************************************************************

os.environ['SDL_VIDEO_CENTERED'] = '1'
pygame.init()
windowSurface = pygame.display.set_mode((screenWidth, screenHeight), 0, 24)
pygame.display.set_caption(windowTitle)
pixArray = pygame.PixelArray(windowSurface)
pygame.key.set_repeat(1, 10)
	
runProgram = True
while runProgram:
# Programa ****************************************************************************************
	
	# Apagando todos os pixels
	for i in range (0, pixArray.shape[0]):
		for j in range (0, pixArray.shape[1]):
			pixArray[i, j] = 0xCC0000

	# Executando o código principal dentro do PyGame
	for i in range (300, 550):
		pixArray[i, 310] = 0x0000FF
	for i in range (300, 550):
		pixArray[i, 560] = 0x0000FF
	for i in range (310, 560):
		pixArray[300, i] = 0x0000FF
	for i in range (310, 560):
		pixArray[550, i] = 0x0000FF

	for i in range (301,550):
			for j in range(311,560):
				pixArray[i,j]=0x008000


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