#include<iostream>
using namespace std;

class Animal{
     private:
     string name;
     int code;
     public:
     void setName(string name){
     this->name = name;
 }

 void getName(){
    cout<<this->name<<endl;
 }
 virtual void executaCaracteristica() = 0;

};

class Oviparo: public Animal{
     public:
     void setOName(){
     string temp;
     cout<<"Digite o nome do oviparo"<<endl;
     cin>>temp;
     setName(temp);

 }
 void executaCaracteristica(){
    cout<<"botando ovo"<<endl;
 }
};

class Mamifero: public Animal{
     public:
     void executaCaracteristica(){
     cout<<"amamentando"<<endl;
     }
};

class Crocodilo: public Oviparo{
     public:
     void cacar(){
     cout<<"estou caçando"<<endl;
     }
};

class Baleia: public Mamifero{
     public:
     void nadar(){
     cout<<"Estou nadando"<<endl;
     }
};

int main(){
 //Animal a1; não permitido por ser virtual pura
 Mamifero m1;
 Oviparo o1;
 Crocodilo c1;
 Baleia b1;
 m1.executaCaracteristica();
 o1.executaCaracteristica();
 o1.setOName();
 o1.setName("Romildo");
 o1.getName();
 b1.nadar();
 b1.executaCaracteristica();
 c1.cacar();
 c1.executaCaracteristica();
}
