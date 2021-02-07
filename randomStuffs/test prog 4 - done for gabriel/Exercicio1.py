linha = []
coluna = []

x = input("Qual o numero de linhas da tabela? ")
y = input("Qual o numero de colunas da tabela? ")

for l in range (int(x)):
    for c in range(int(y)):
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
