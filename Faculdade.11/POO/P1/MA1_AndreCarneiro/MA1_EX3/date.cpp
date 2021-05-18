#include "date.h"

#include <ctime>

Date::Date(int day, int month, int year) {
    if (!isValidDay(day, month, year)) {
        toSystemDate();
        return;
    }

    if (month < 0 || month > 12 || year < 0) {
        toSystemDate();
        return;
    }

    setDay(day);
    setMonth(month);
    setYear(year);
}

Date::Date() {
    toSystemDate();
}

bool Date::isValidDay(int day, int month, int year) {
    if (day < 0)
        return false;

    int months[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    bool leap_year = isLeapYear(year);

    if (leap_year) {
        months[1] = 29;
    }

    // verifica se ultimo dia é maior que o ultimo dia do mes
    if (day > months[month-1])
        return false;

    return true;
}

void Date::nextDay() {
    int months[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    int day = getDay();
    int month = getMonth();
    int year = getYear();

    // é bissexto?
    if(isLeapYear(year)) {
        months[1] = 29;
    }

    //acabou mes?
    if ((day+1) > months[month-1]) {
        setDay(1);

        // vira o ano?
        if ((month+1 > 12)) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month+1);
        }
    } else {
        setDay(day + 1);
    }
}

bool Date::isLeapYear(int year) {
    // é bissexto?
    if(year % 400 == 0 || (year % 4 == 0) && (year % 100 != 0)) {
        return true;
    }

    return false;
}

void Date::toSystemDate() {
    std::time_t t = std::time(0);
    std::tm* now = std::localtime(&t);

    setYear(now->tm_year + 1900);
    setMonth(now->tm_mon + 1);
    setDay(now->tm_mday);
}

void Date::setDay(int day) {
    this->day = day;
}

void Date::setMonth(int month) {
    this->month = month;
}

void Date::setYear(int year) {
    this->year = year;
}

int Date::getDay() {
    return this->day;
}

int Date::getMonth() {
    return this->month;
}

int Date::getYear() {
    return this->year;
}

std::string Date::toString() {
    std::string str = std::to_string(getDay()) + "/" + std::to_string(getMonth()) + "/" + std::to_string(getYear());

    return str;
}
