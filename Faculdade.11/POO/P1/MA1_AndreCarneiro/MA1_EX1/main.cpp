#include <iostream>
#include <vector>

#include "vaca.h"

using namespace std;

std::vector<AnimalOrcamento*> orcamentos(std::vector<AnimalOrcamento*> &animais) {
    std::vector<AnimalOrcamento*> orcs;

    for (unsigned int i = 0; i < animais.size(); i++) {
        AnimalOrcamento* orc = animais[i];

        //Ve se cada AnimalOrcamento tem vacina. Caso tenha, adiciona no vetor que retorna os orcamento q tem vacina
        if (orc->temVacinaW()) {
            orcs.push_back(orc);
        }
    }

    return orcs;
}

int main() {
    Vaca vaca1;
    Vaca vaca2;
    Vaca vaca3;

    // Adiciona vacas (herdam AnimamOrcamento) ao vetor
    std::vector<AnimalOrcamento*> orcs;
    orcs.push_back(&vaca1);
    orcs.push_back(&vaca2);
    orcs.push_back(&vaca3);

    std::vector<AnimalOrcamento*> ret = orcamentos(orcs);

    // Só vai ter vaca1, vaca2 e vaca3
    for (unsigned int i = 0; i < ret.size(); i++) {
        AnimalOrcamento* orc = ret[i];

        std::cout << orc->temVacinaW() << std::endl;
    }

    return 0;
}
