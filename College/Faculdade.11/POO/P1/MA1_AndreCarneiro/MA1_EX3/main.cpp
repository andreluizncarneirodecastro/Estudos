#include <iostream>

#include "date.h"

using namespace std;

int main()
{
    Date bissexto(28, 2, 2020);

    cout << "DATA ANO BISSEXTO" << endl;
    cout << bissexto.toString() << endl;
    bissexto.nextDay();
    cout << bissexto.toString() << endl;

    cout << endl;

    Date dt;
    cout << "DATA SISTEMA" << endl;
    cout << dt.toString() << endl;
    dt.nextDay();
    cout << dt.toString() << endl;

    return 0;
}
