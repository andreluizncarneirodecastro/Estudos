#include "quaternio.h"

Quaternio::Quaternio(double real, double img1, double img2, double img3) : Complexo(real, img1) {
    setImg2(img2);
    setImg3(img3);
}

Quaternio Quaternio::conjugado() {
    return Quaternio(getReal(), (getImg() * -1), (getImg2() * -1), (getImg3() * -1));
}

Quaternio Quaternio::inversao() {
    float div = (getReal()*getReal()) + (getImg()*getImg()) + (getImg2()*getImg2()) + (getImg3()*getImg3());

    return Quaternio(getReal()/div, ((getImg()-1)/div), ((getImg2()-1)/div), ((getImg3()-1)/div));
}

Quaternio Quaternio::somar(Quaternio q2) {
    double real = getReal() + q2.getReal();
    double img1 = getImg() + q2.getImg();
    double img2 = getImg2() + q2.getImg2();
    double img3 = getImg3() + q2.getImg3();

    return Quaternio(real, img1, img2, img3);
}

Quaternio Quaternio::escalar(double val) {
    double real = getReal()*val;
    double img1 = getImg()*val;
    double img2 = getImg2()*val;
    double img3 = getImg3()*val;

    return Quaternio(real, img1, img2, img3);
}

void Quaternio::setImg2(double img) {
    this->img2 = img;
}

void Quaternio::setImg3(double img) {
    this->img3 = img;
}

double Quaternio::getImg2() {
    return this->img2;
}

 // Rotação
double Quaternio::getImg3() {
    return this->img3;
}

ostream& operator<<(ostream& os, Quaternio &q){
    if(q.getImg()<0.0){
        os<<q.getReal()<<' '<<'+'<<' '<<(q.getImg()*-1)<<'i'<<' '<<'+'<<' '<<(q.getImg2()*-1)<<'j'<<' '<<'+'<<' '<<(q.getImg3()*-1)<<'k'<<endl;
    }else{
        os<<q.getReal()<<' '<<'+'<<' '<<q.getImg()<<'i'<<' '<<'+'<<' '<<q.getImg2()<<'j'<<' '<<'+'<<' '<<q.getImg3()<<'k'<<endl;
    }
    return os;
}
