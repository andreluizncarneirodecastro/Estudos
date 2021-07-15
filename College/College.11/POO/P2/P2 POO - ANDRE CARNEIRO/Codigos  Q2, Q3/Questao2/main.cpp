#include <iostream>
#include<windows.h> //include da biblioteca do Windows
#include<mysql.h> // � a biblioteca do cliente API e tamb�m o link da lib-mysqlclient

// Especifica��es da conex�o com o banco de dados

const char* hostname = "localhost"; // host
const char* username = "root"; // user
const char* password = "123456";//pw do urusario �root�
const char* database = "aulateste"; //nome da base de dados
unsigned int port = 3306; // porta de conex�o
const char* unixsocket = NULL;
unsigned long clientflag = 0;


using namespace std;

int main()
{
    MYSQL* conn; //instancia��o da conex�o

    conn = mysql_init(0); //aloca o objeto criado na linha de cima

    conn = mysql_real_connect(conn, hostname, username, password, database, port, unixsocket, clientflag);  // estabelece a conexao com os par�metros de especifica��o da conex�o do banco

    if(conn){
        cout<<"Conexao Estabelecida"<<endl;
    }else{
        cout<<"N�o foi poss�vel realizar a conex�o"<<endl;
    }
    return 0;
}
