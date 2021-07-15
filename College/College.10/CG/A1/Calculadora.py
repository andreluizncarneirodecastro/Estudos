def Soma(a,b):
    return a + b
def Subtracao(a,b):
    return a - b
def Multiplicacao(a,b):
    return a * b
def Divisao(a,b):
    return a / b

while(True):
    a = float(input("Digite o primeiro valor: "))
    b = float(input("Digite o segundo valor: "))
    opcao = int(input("Digite a opção: "))
    resultado = 0
    if opcao == 0:
        resultado = Soma(a,b)
    elif opcao == 1:
        resultado = Subtracao(a,b)
    elif opcao == 2:
        resultado = Multiplicacao(a,b)
    elif opcao == 3:
        resultado = Divisao(a,b)
    print("O resultado é: ", resultado)
    