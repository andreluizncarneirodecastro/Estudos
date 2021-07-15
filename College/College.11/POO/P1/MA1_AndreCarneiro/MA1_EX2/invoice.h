#ifndef INVOICE_H_INCLUDED
#define INVOICE_H_INCLUDED

#include <string>

class Invoice {
public:
    Invoice(int numItemFaturado, std::string desc, int qtd, double preco);

    double getInvoiceAmount();

    void setNumeroItemFaturado(int num);

    void setDescricao(std::string desc);

    void setQuantidade(int qtd);

    void setPreco(double preco);

    int getNumeroItemFaturado();

    std::string getDescricao();

    int getQuantidade();

    double getPreco();

public:
    int numeroItemFaturado;
    std::string descricaoItem;
    int quantidade;
    double preco;
};

#endif // INVOICE_H_INCLUDED
