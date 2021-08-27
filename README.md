# BinaryClock

This project is a simple demonstration of one way to create a binary clock in HTML and Javascript.

Binary clocks typically show the time using the 24 hour clock and display the time as:

| 2^n | H | H | M | M | S | S |
|:--|:--|:--|:--|:--|:--|:--|
| 3 | - | 0 | - | 1 | - | 1 |
| 2 | - | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |

As shown, the time would be (following the patter HH:MM:SS:

HH: 2^1 : 0 == 20\
MM: 2^0 + 2^1 : 2^0 + 2^3 == 39\
SS: 2^0 + 2^2 : 2^0 + 2^3 == 59

Time: 20:39:59 or 8:39:59 PM


