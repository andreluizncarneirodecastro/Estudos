#include <iostream>
#include<windows.h>
#include<mysql.h>

const char* hostname = "localhost";   //
const char* username = "root";
const char* password = "12345678";
const char* database = "topicosavc";
unsigned int port = 3306;

using namespace std;

class Conexao {
private:
    MYSQL* conn;

    void conectar(char* hostname, char* username, char* password, char* database, int port) {
        conn = mysql_init(0);
        conn = mysql_real_connect(conn, hostname, username, password, database, port, NULL, 0);
    }

    MYSQL_RES* query(char* q) {
        mysql_query(conn, q);
        return mysql_store_result(conn);
    }

    void close() {
        mysql_close(conn);
    }
};

int main()
{
    Conexao conexao;
    conexao.conectar(hostname, username, password, database, port);
    MYSQL_RES* res = conexao.query("SELECT * FROM usuarios"); //retorn todos usuarios e todas colunas
    int rows = mysql_num_rows(res);
    int fields = mysql_num_fields(res);
    MYSQL_FIELD *mfield;
    MYSQL_ROW row;

    while ((row = mysql_fetch_row(res))) {
        for (int i = 0; i < fields; i++) {
            // usar row[i]...
        }
    }

    return 0;
}
