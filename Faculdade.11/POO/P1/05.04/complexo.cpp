#include "complexo.hpp"

Complexo::Complexo(){
    this->img = 0.0;
    this->real = 0.0;
}

float Complexo::getImg(){
    return this->img;
}

float Complexo::getReal(){
    return this->real;
}

void Complexo::setImg(float img){
    this->img = img;
}

void Complexo::setReal(float real){
    this->real = real;
}

Complexo Complexo::conjugado(){
    Complexo resultado;
    resultado.setImg(-1 * this->img);
    resultado.setReal(this->real);
    return resultado;
}

bool Complexo::eIgual(Complexo c1) {
    return *this == c1;
}

ostream& operator<<(ostream& os, Complexo &c1){
    os<<c1.getReal()<<' '<<'+'<<' '<<c1.getImg()<<'i'<<endl;
    return os;
}

Complexo operator+(Complexo c1, Complexo c2){
    Complexo resultado;
    resultado.setImg(c1.getImg()+c2.getImg());
    resultado.setReal(c1.getReal()+c2.getReal());
    return resultado;
}

Complexo operator-(Complexo c1, Complexo c2){
    Complexo resultado;
    resultado.setImg(c1.getImg()-c2.getImg());
    resultado.setReal(c1.getReal()-c2.getReal());
    return resultado;
}

Complexo operator*(Complexo c1, Complexo c2){
    Complexo resultado;
    resultado.setImg(c1.getImg()*c2.getImg());
    resultado.setReal(c1.getReal()*c2.getReal());
    return resultado;
}

Complexo operator/(Complexo c1, Complexo c2){
    Complexo resultado;
    resultado.setImg(c1.getImg()/c2.getImg());
    resultado.setReal(c1.getReal()/c2.getReal());
    return resultado;
}

bool operator==(Complexo c1, Complexo c2){
    if (c1.getImg() == c2.getImg() && c1.getReal() == c2.getReal())
        return true;

    return false;
}


