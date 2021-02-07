linha = []
coluna = []

for l in range (3):
    for c in range(3):
        print('Forneça o elemento (',l,c,')')
        num=int(input())
        coluna.append(num)
    linha.append(coluna[:])
    coluna.clear()

for l in linha:
    for c in l:
        print(c,end=' ')
    print()
print('*'*35)
