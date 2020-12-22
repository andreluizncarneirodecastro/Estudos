import cv2
import numpy as np 

classificador = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
imagem = cv2.imread('foto1.jpg')

escalaCinzas = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
faces = classificador.detectMultiScale(escalaCinzas, 1.3, 5)

for (x, y, w, h) in faces:
    imagem = cv2.rectangle(imagem, (x,y), (x+w, y+h), (0,255,0), 3)

cv2.imwrite('foto1_faces.jpg', imagem)
cv2.imshow('resultado', imagem)
cv2.waitKey(0)