#include "complexo.hpp"

int main()
{
    Complexo Comp;
    Complexo Comp2;
    Complexo resultado;

    Comp.setImg(1.01);
    Comp.setReal(1.01);
    Comp2.setImg(2.02);
    Comp2.setReal(2.02);
    resultado = Comp + Comp2;

    cout<<Comp<<endl<<Comp2<<endl;
    cout<<resultado<<endl;

    resultado = Comp - Comp2;
    cout<<"RES: "<< resultado<<endl;

    return 0;
}
