#include "complexo.h"

Complexo::Complexo(){
    this->img = 0.0;
    this->real = 0.0;
}

Complexo::Complexo(float real, float img){
    this->img = img;
    this->real = real;
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

int Complexo::eIgual(Complexo c1){
    if ((this->real == c1.getReal())&&(this->img == c1.getImg()))
        return 1;
    else
        return 0;
}



ostream& operator<<(ostream& os, Complexo &c1){
    if(c1.getImg()<0.0){
        os<<c1.getReal()<<' '<<'-'<<' '<<(c1.getImg()*-1)<<'i'<<endl;
    }else{
        os<<c1.getReal()<<' '<<'+'<<' '<<c1.getImg()<<'i'<<endl;
    }
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
    //a+bi    c+di
    //real ac-bd
    //img  ad+bc
    resultado.setImg((c1.getReal()*c2.getImg())+(c1.getImg()*c2.getReal()));
    resultado.setReal((c1.getReal()*c2.getReal())-(c1.getImg()*c2.getImg()));
    return resultado;
}

Complexo operator/(Complexo c1, Complexo c2){
    //real - ac+bd/c2+d2
    //img = bc-ad/c2+d2
    float cc2 = c2.getReal()*c2.getReal();
    float d2 = c2.getImg()*c2.getImg();
    float den = cc2 + d2;
    Complexo resultado;
    resultado.setImg(((c1.getImg()*c2.getReal())-(c1.getReal()*c2.getImg()))/den);
    resultado.setReal(((c1.getReal()*c2.getReal())+(c1.getImg()*c2.getImg()))/den);
    return resultado;
}

bool operator==(Complexo c1, Complexo c2){
    if(c1.eIgual(c2)) return true;
    else return false;
}
