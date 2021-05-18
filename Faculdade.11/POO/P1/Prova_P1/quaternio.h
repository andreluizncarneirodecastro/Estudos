#ifndef QUATERNIO_H_INCLUDED
#define QUATERNIO_H_INCLUDED

#include "complexo.h"

class Quaternio :public Complexo{
private:
    // img1 (y) vem da herança da classe Complexo //
    double img2; // imaginario w
    double img3; // rotacao z

public:
    Quaternio(double real, double i, double j, double k);

    Quaternio somar(Quaternio q2);

    Quaternio conjugado();

    Quaternio escalar(double val);

    Quaternio inversao();

    double getImg2();

    double getImg3();

    void setImg2(double img);

    // Rotação
    void setImg3(double img);

    friend ostream& operator<<(ostream& os, Quaternio &q);//OK
};

#endif // QUATERNIO_H_INCLUDED
