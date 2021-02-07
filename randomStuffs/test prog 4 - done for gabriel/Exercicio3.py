import numpy as np
matrizA = np.zeros((2,2))
for l in range (2):
    for c in range (2):
        print('forneça os elementos do matriz (',l,c,')')
        matrizA[l][c]=int(input())
print('matriz A = ')
print(matrizA)

matrizB = np.zeros((2,2))
for l in range (2):
    for c in range (2):
        print('forneça os elementos do matriz (',l,c,')')
        matrizB[l][c]=int(input())
print('matriz B = ')
print(matrizB)

print('C = 2A.')
print('O valor de C = 2*A sera:')
mult = 2 * matrizA
print(mult)

print('5B: ')
print('O valor de 5*B sera:')
mult2 = 5*matrizB
print(mult2)

print('O valor total sera:')
mult3 = (mult + mult2)
print(mult3)