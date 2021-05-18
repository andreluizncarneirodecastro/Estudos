#include <iostream>

#include "invoice.h"

using namespace std;

int main()
{
    Invoice invoice1(1, "item1", 10, 3.7);
    Invoice invoice2(2, "item2", 14, 2.5);

    std::cout << invoice1.getInvoiceAmount() << std::endl;
    std::cout << invoice2.getInvoiceAmount() << std::endl;

    return 0;
}
