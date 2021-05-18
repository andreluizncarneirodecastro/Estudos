#ifndef COMPLEXO_HPP
#define COMPLEXO_HPP

#include <iostream>

using namespace std;

class Complexo{

private:
    float real;
    float img;

public:

    Complexo(); //OK
    Complexo(float real, float img);//OK
    float getReal();//OK
    float getImg();//OK
    void setReal(float real);//OK
    void setImg(float img);//OK
    Complexo conjugado();//OK
    int eIgual(Complexo c1);//OK

    //sobrecarga de operadores
    friend ostream& operator<<(ostream& os, Complexo &c1);//OK
    friend Complexo operator+(Complexo c1, Complexo c2);//ok
    friend Complexo operator-(Complexo c1, Complexo c2);
    friend Complexo operator*(Complexo c1, Complexo c2);
    friend Complexo operator/(Complexo c1, Complexo c2);
    friend bool operator==(Complexo c1, Complexo c2);
};


#endif // COMPLEXO_HPP
