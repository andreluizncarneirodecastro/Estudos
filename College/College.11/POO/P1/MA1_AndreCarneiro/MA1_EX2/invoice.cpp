#include "invoice.h"

Invoice::Invoice(int numItemFaturado, std::string desc, int qtd, double preco) {
    setNumeroItemFaturado(numItemFaturado);
    setDescricao(desc);

    if (qtd > 0) {
        setQuantidade(qtd);
    } else {
        setQuantidade(0);
    }

    if (preco > 0) {
        setPreco(preco);
    } else {
        setPreco(0.0);
    }
}

double Invoice::getInvoiceAmount() {
    return getQuantidade() * getPreco();
}

void Invoice::setNumeroItemFaturado(int num) {
    this->numeroItemFaturado = num;
}

void Invoice::setDescricao(std::string desc) {
    this->descricaoItem = desc;
}

void Invoice::setQuantidade(int qtd) {
    this->quantidade = qtd;
}

void Invoice::setPreco(double preco) {
    this->preco = preco;
}

int Invoice::getNumeroItemFaturado() {
    return this->numeroItemFaturado;
}

std::string Invoice::getDescricao() {
    return this->descricaoItem;
}

int Invoice::getQuantidade() {
    return this->quantidade;
}

double Invoice::getPreco() {
    return this->preco;
}
