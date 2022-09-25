## IT5007 TUT3

Author: Lu Yuliang

Date: 24/09/2022

Github repo link: https://github.com/Beast-Leon/it5007_tut3_v2.git

**Introduction**:

 This is the repo for **IT5007 tutorial 3 -- Ticket To Ride Enhanced Version**. This web application makes the use of React to ensure smoothness while using functions, including `displayHomepage`, `displayTraveller`, `addTraveller`, `deleteTraveller`, `displayFreeSeats`.

**Function Illustration**:

`displayHomepage`: In the homepage, there are 4 buttons served as navigation bar which can direct the user to other pages. Besides, it can also show the current available seat counts.

`displayTraveller`: For all the booked trips, we can display the details of travellers in displayTraveller component in table format. Details include ***seat id***, ***name***, ***phone***.

`addTraveller`: In the book page, we need to input valid ***name***, ***phone***, and ***seat id*** to make reservations. Besides, we can also show current available seats to the user while booking reservations. Checks for form inputs include:
- Seat Id must be between 0 and 9.
- Name can't have character other than letters from a-A, z-Z (We will alert the user if he/she enters it in a wrong format).
- Phone number must be 8 digit numbers (We will alert the user if he/she enters it in a wrong format).
- User can't make reservation of a specific seat if the seat is already occupied. Therefore, if all 10 seats are occupied, no more reservations is taken.

`deleteTraveller`: In the cancel page, we need to input valid ***name*** and ***phone*** to cancel an existing reservation. Check for form input includes:
- Name can't have character other than letters from a-A, z-Z (We will alert the user if he/she enters it in a wrong format).
- Phone number must be 8 digit numbers (We will alert the user if he/she enters it in a wrong format).

`displayFreeSeats`: We utilize this function in two pages, book page and display page. It can show all the current available seats and all the occupied seats. Red shaded box means the seat is occupied. Unshaded box means the seat is unoccupied.

**Steps to set up and launch the application**:

```
git clone https://github.com/Beast-Leon/it5007_tut3_v2.git
npm install
npm run compile
npm start

```
