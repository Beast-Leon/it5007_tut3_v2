## IT5007 TUT3

Author: Lu Yuliang

Date: 24/09/2022

Introduction: This is the repo for **IT5007 tutorial 3 -- Ticket To Ride Enhanced Version**. This web application makes the use of React to ensure smoothness while using functions, including `displayHomepage`, `displayTraveller`, `addTraveller`, `deleteTraveller`, `displayFreeSeats`.

Function Illustration:

`displayHomepage`: In the homepage, there are 4 buttons served as navigation bar which can direct the user to other pages. Besides, it can also show the current available seat counts.

`displayTraveller`: For all the booked trips, we can display the details of travellers in displayTraveller component in table format. Details include ***seat id***, ***name***, ***phone***.

`addTraveller`: In the book page, we need to input valid ***name***, ***phone***, and ***seat id*** to make reservations. Note that seat id must between 0 and 9. Besides, we can also show current available seats to the user while booking reservations.

`deleteTraveller`: In the cancel page, we need to input valid ***name*** and ***phone*** to cancel an existing reservation.

`displayFreeSeats`: We utilize this function in two pages, book page and display page. It can show all the current available seats and all the occupied seats.
