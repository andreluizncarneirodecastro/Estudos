#ifndef DATE_H_INCLUDED
#define DATE_H_INCLUDED

#include <string>

class Date {
public:
    Date(int day, int month, int year);

    Date();

    bool isLeapYear(int year);

    bool isValidDay(int day, int month, int year);

    void toSystemDate();

    void nextDay();

    void setDay(int day);

    void setMonth(int month);

    void setYear(int year);

    int getDay();

    int getMonth();

    int getYear();

    std::string toString();

private:
    int day;
    int month;
    int year;
};

#endif // DATE_H_INCLUDED
