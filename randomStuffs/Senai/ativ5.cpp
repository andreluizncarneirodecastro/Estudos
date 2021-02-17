/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
    float produto1, produto2, valor3, valor4;
    int escolha;
    int quantidadeDeProdutos;
    int tiposDeProdutos;
    int album1 = 0, album2 = 0, album3 = 0;
    float valorTotal;
    float resultadoSoma;
    float valorDisponivel=0;
    double armazena;
    cout << "Insira o procedimento que voce deseja fazer: " << endl;
    cout << "1) Soma | " <<  "2) Subtracao | " 
         << "3) Multiplicacao | " <<  "4) Divisao | " << "5) Resto da divisao. " 
         << endl;
    cin >> escolha;
    
    switch (escolha) {
        case 1:
            cout << ".::Voce escolheu SOMA::." << endl;
            cout << "Insira o valor do primeiro produto: " << endl;
            cin >> produto1;
            cout << "Insira o valor segundo produto: " <<  endl;
            cin >> produto2;
            cout << "A soma dos produtos sera de: R$: " << produto1+produto2 << endl;
        break;
        case 2:
            cout << ".::Voce escolheu SUBTRACAO::.";
            cout << "Para que ela ocorra a somatoria dos 2 produtos deve ser maior que 100 Reais, Portanto.." << endl;
            cout << "Insira o primeiro produto: " << endl;
            cin >> produto1;
            cout << "Insira o segundo produto: " <<  endl;
            cin >> produto2;
            resultadoSoma = (produto1+produto2);
            cout << "A soma dos produtos sera de: " << "R$: " << resultadoSoma << endl;
            if(resultadoSoma > 100)
            {
                cout << "O desconto do produto sera de 10%, portanto sera de: " << endl;
                resultadoSoma = (resultadoSoma*0.1);
                cout << "R$ " << resultadoSoma ;
            }
        break;
        case 3:
            cout << ".::Voce escolheu Multiplicacao::." ;
            cout << "Na empresa Ozzy trabalhamos com 3 tipos de produtos: " << endl;
            cout << "Digite 1 - Album Ordinary Man (R$ - 10,50) | 2 - Album No More Tears (R$ - 5,50) | 3 - Album Paranoid (R$ - 5,00)" << endl;

            cout << "\nQuantos produtos voce adquiriu?" << endl;
            cin >> quantidadeDeProdutos;
            for(int i=0; i<quantidadeDeProdutos; i++){
                cout << "Qual foi o item numero " << i << ", que foi processado pela maquina de leitura automatica? .::Lembrando: 1 - Album Ordinary Man | 2 - Album No More Tears | 3 - Album Paranoid::." << endl;
                cin >> tiposDeProdutos;
                if(tiposDeProdutos == 1){
                    album1++;
                }
                else if(tiposDeProdutos == 2){
                    album2++;
                }
                else{
                    album3++;
                }
            }
            cout << "Voce adquiriu do album 1 total de " << album1 << " unidade(s)" << endl;
            cout << "Voce adquiriu do album 2 o total de " << album2 << " unidade(s)" << endl;
            cout << "Voce adquiriu do album 3 o total de " << album3 << " unidade(s)" << endl;
            
            if(album1 == 0){
                    valorTotal = ((album2*5.50)+(album3*5.00));
                    cout << "O valor total da compra sera de: " << valorTotal;
                }
                else if(album2 == 0){
                    valorTotal = ((album1*10.50)+(album3*5.00));
                    cout << "O valor total da compra sera de: " << valorTotal;
                }
                else if(album3 == 0){
                    valorTotal = ((album1*10.50)+(album2*5.50));
                    cout << "O valor total da compra sera de: " << valorTotal;
                }
                else if(album1 == 0 && album2 == 0){
                    valorTotal = album3*5.00;
                    cout << "O valor total da compra sera de: " << valorTotal;
                }
                else if(album1 == 0 && album3 == 0){
                    valorTotal = album2*5.50;
                    cout << "O valor total da compra sera de: " << valorTotal;
                }
                else if(album2 == 0 && album3 == 0){
                    valorTotal = album1*10.50;
                    cout << "O valor total da compra sera de: " << valorTotal;
                }   
        break;
        case 4:
        cout << "Insira a quantidade de valor que voce possui, para determinarmos quantos Albuns voce pode adquirir." << endl;
        int album1 = 10.50, album2 = 5.50, album3 = 5.00;
        cin >> valorDisponivel;
        
        if(valorDisponivel > album1)
            armazena = valorDisponivel/album1;
        cout << "Do Album 1, voce pode adquirir um total de " << armazena << endl;
        
        if(valorDisponivel > album2)
            armazena = valorDisponivel/album2;
        cout << "Do Album 2, voce pode adquirir um total de " << armazena << endl;
        
        if(valorDisponivel > album3)
            armazena = valorDisponivel/album3;
        cout << "Do Album 3, voce pode adquirir um total de " << armazena << endl;
        break;
        

    }
}