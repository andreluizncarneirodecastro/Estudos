#ifndef ANIMALORCAMENTO_H_INCLUDED
#define ANIMALORCAMENTO_H_INCLUDED

#include "animal.h"

class ItemOrcamentoComplexo {
};

class AnimalOrcamento : public Animal {
public:
    virtual ItemOrcamentoComplexo orcamentoGastosAnimal() = 0;

    virtual bool temVacinaW() = 0;
};

#endif // ANIMALORCAMENTO_H_INCLUDED
