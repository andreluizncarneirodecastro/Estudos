from primitivas import *
from transformadas import *
# Python program to implement Cohen Sutherland algorithm 
# for line clipping. 
  
# Defining region codes 
INSIDE = 0  # 0000 
LEFT = 1    # 0001 
RIGHT = 2   # 0010 
BOTTOM = 4  # 0100 
TOP = 8     # 1000 
  
# Defining x_max, y_max and x_min, y_min for rectangle 
# Since diagonal points are enough to define a rectangle 
  
# Function to compute region code for a point(x, y) 
def computeCode(x, y,viewport): 
    x_max = viewport.pontoMaxJD.x
    y_max = viewport.pontoMaxJD.y
    x_min = viewport.pontoMinJD.x
    y_min = viewport.pontoMinJD.y

    code = INSIDE 
    if x < x_min:      # to the left of rectangle 
        code |= LEFT 
    elif x > x_max:    # to the right of rectangle 
        code |= RIGHT 
    if y < y_min:      # below the rectangle 
        code |= BOTTOM 
    elif y > y_max:    # above the rectangle 
        code |= TOP 
  
    return code 
  
  
# Implementing Cohen-Sutherland algorithm 
# Clipping a line from P1 = (ponto1.x, ponto1.y) to P2 = (ponto2.x, ponto2.y) 
def cohenSutherlandClip(ponto1,ponto2,viewport): 
    x_max = viewport.pontoMaxJD.x
    y_max = viewport.pontoMaxJD.y
    x_min = viewport.pontoMinJD.x
    y_min = viewport.pontoMinJD.y
  
    # Compute region codes for P1, P2 
    code1 = computeCode(ponto1.x, ponto1.y,viewport) 
    code2 = computeCode(ponto2.x, ponto2.y,viewport) 
    accept = False
  
    while True: 
  
        # If both endpoints lie within rectangle 
        if code1 == 0 and code2 == 0: 
            accept = True
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
            # using formulas y = ponto1.y + slope * (x - ponto1.x),  
            # x = ponto1.x + (1 / slope) * (y - ponto1.y) 
            if code_out & TOP: 
                
                # point is above the clip rectangle 
                x = ponto1.x + (ponto2.x - ponto1.x) * (y_max - ponto1.y) / (ponto2.y - ponto1.y) 
                y = y_max
  
            elif code_out & BOTTOM: 
                  
                # point is below the clip rectangle 
                x = ponto1.x + (ponto2.x - ponto1.x) *(y_min - ponto1.y) / (ponto2.y - ponto1.y) 
                y = y_min 
  
            elif code_out & RIGHT: 
                  
                # point is to the right of the clip rectangle 
                y = ponto1.y + (ponto2.y - ponto1.y) * (x_max - ponto1.x) / (ponto2.x - ponto1.x) 
                x = x_max-1 
  
            elif code_out & LEFT: 
                  
                # point is to the left of the clip rectangle 
                y = ponto1.y + (ponto2.y - ponto1.y) *(x_min - ponto1.x) / (ponto2.x - ponto1.x) 
                x = x_min
  
            # Now intersection point x, y is found 
            # We replace point outside clipping rectangle 
            # by intersection point 
            if code_out == code1: 
                ponto1.x = x 
                ponto1.y = y 
                code1 = computeCode(ponto1.x, ponto1.y,viewport) 
  
            else: 
                ponto2.x = x 
                ponto2.y = y 
                code2 = computeCode(ponto2.x, ponto2.y,viewport) 
  
    if accept: 
        print ("Line accepted from %.2f, %.2f to %.2f, %.2f" % (ponto1.x, ponto1.y, ponto2.x, ponto2.y))
        listaPontos = [ponto1,ponto2]        
        return listaPontos
        # Here the user can add code to display the rectangle 
        # along with the accepted (portion of) lines 
  
    else: 
        print("Line rejected") 
        return None
  
# Driver Script 
# First Line segment 
# P11 = (5, 5), P12 = (7, 7) 
#Ponto(200,60),Ponto(250,700)
ponto1 =Ponto(200, 60)
ponto2 =Ponto(250,800)
#cohenSutherlandClip(ponto1,ponto2) 
  
# Third Line segment 
# P31 = (1, 5), P32 = (4, 1) 
#cohenSutherlandClip(750, 780, 850, 900)