#ifndef VACA_H_INCLUDED
#define VACA_H_INCLUDED

#include "animalorcamento.h"

class Vaca : public AnimalOrcamento {
    ItemOrcamentoComplexo orcamentoGastosAnimal();

    bool temVacinaW();
};

#endif // VACA_H_INCLUDED
