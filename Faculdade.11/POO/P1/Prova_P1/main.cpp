#include <iostream>
#include "complexo.h"
#include "quaternio.h"

using namespace std;

//Andre Carneiro 92854
int main() {
    Quaternio q(2.0, 3.0, 1.0, 1.0);
    Quaternio p(1.0, 2.0, 1.0, 2.0);

    Quaternio r1 = q.somar(p);
    cout << r1 << endl;

    Quaternio r2 = q.escalar(2.0);
    cout << r2 << endl;

    Quaternio r3 = q.conjugado();
    cout << r3 << endl;

    Quaternio r4 = q.inversao();
    cout << r4 << endl;


    return 0;
}
