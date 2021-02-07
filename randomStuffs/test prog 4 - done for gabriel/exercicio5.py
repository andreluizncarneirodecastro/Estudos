import math

radius = float(input('Enter radius: '))
theta = float(input('Enter theta in degree: '))

theta = theta * math.pi/180.0;

x = radius * math.cos(theta)
y = radius * math.sin(theta)

print('O valor cartesiano sera de: (x = %0.2f, y = %0.2f)' %(x,y))