#include <iostream>
#include<windows.h> //include da biblioteca do Windows
#include<mysql.h> // é a biblioteca do cliente API e também o link da lib-mysqlclient

// Especificações da conexão com o banco de dados

const char* hostname = "localhost"; // host
const char* username = "root"; // user
const char* password = "123456";//pw do urusario “root”
const char* database = "aulateste"; //nome da base de dados
unsigned int port = 3306; // porta de conexão
const char* unixsocket = NULL;
unsigned long clientflag = 0;


using namespace std;

int main()
{
    MYSQL* conn; //instanciação da conexão

    conn = mysql_init(0); //aloca o objeto criado na linha de cima

    conn = mysql_real_connect(conn, hostname, username, password, database, port, unixsocket, clientflag);  // estabelece a conexao com os parâmetros de especificação da conexão do banco

    if(conn){
        cout<<"Conexao Estabelecida"<<endl;
    }else{
        cout<<"Não foi possível realizar a conexão"<<endl;
    }
    return 0;
}
