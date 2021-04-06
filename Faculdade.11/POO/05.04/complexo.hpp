#pragma once

#include <iostream>

using namespace std;

class Complexo{

private:
    float real;
    float img;

public:

    Complexo();
    Complexo(float real, float img);
    float getReal();
    float getImg();
    void setReal(float real);
    void setImg(float img);
    Complexo conjugado();
    bool eIgual(Complexo c1);

    //sobrecarga de operadores
    friend ostream& operator<<(ostream& os, Complexo &c1);
    friend Complexo operator+(Complexo c1, Complexo c2);
    friend Complexo operator-(Complexo c1, Complexo c2);
    friend Complexo operator*(Complexo c1, Complexo c2);
    friend Complexo operator/(Complexo c1, Complexo c2);
    friend bool operator==(Complexo c1, Complexo c2);
};
