/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {name: 'jack', phone: "88885555", seatId: 1},
  {name: 'rose', phone: "88884444", seatId: 2},
  {name: 'mike', phone: "88883333", seatId: 5},
  {name: 'leon', phone: "88882222", seatId: 6}
];
const totalSeats = 10;
const numRow = 2;
const numColumn = Math.floor(totalSeats / numRow);



function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  const passenger = props.passenger;
  console.log(passenger);
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
    <td>{passenger.seatId}</td>
    <td>{passenger.name}</td>
    <td>{passenger.phone}</td>
    </tr>
  );
}

function seatMapping(travellerList) {
  const seatList = [];
  // Initialize seat mapping
  for (let i = 0; i < totalSeats; i++){
    seatList.push(0);
  }
  let curBookingNum = travellerList.length;
  for (let passenger of travellerList) {
    const curId = passenger.seatId;
    seatList[curId] = 1;
  }

  return seatList;
}

function Display(props) {
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  const travellerList = props.travellers;
  const TravellerInfo = travellerList.map(
    passenger => <TravellerRow key={passenger.seatId} passenger={passenger}/>
  )
  const seatmap = seatMapping(travellerList);
  return (
    <div>
      <h2>Seat Assignment Table</h2>
      <table className="seatTable">
        <thead>
          <tr>
          {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
            <th>Seat ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
          {TravellerInfo}
        </tbody>
    </table>
    <hr/>
    <DisplayFreeSeats seatList = {seatmap}/>
    </div>

  );
}

class DisplayFreeSeats extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <>
      <h2>Seat Availability</h2>
      <table className='freeSeats'>
        <tbody>
          {this.props.seatList.map((row, rowidx) => 
              <tr key={rowidx}>
                <td className={row == 1? 'occupied':'unoccupied'}>Seat Id {rowidx}</td>
              </tr>)}
        </tbody>
      </table>
      <h4>Legend</h4>
      <table className='legend'>
        <tbody>
          <tr>
            <td className='colorHelper'><div className={'occupiedLegend'} /></td>
            <td className='colorHelper'><div>Occupied</div></td>
          </tr>
          <tr>
            <td className='colorHelper'><div className={'unoccupiedLegend'} /></td>
            <td className='colorHelper'><div>Unoccupied</div></td>
          </tr>
        </tbody>
      </table>
      </>
    )
  }
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const addForm = document.forms.addTraveller;
    const passenger = {
      name: addForm.travellerName.value.toLowerCase(), phone: addForm.travellerPhone.value, seatId: parseInt(addForm.seatId.value)
    };

    if (!/^[A-Za-z\s]+$/.test(passenger.name)){
      alert("Please enter a valid name!");
      return;
    }

    if(!/^[0-9]{8}$/.test(passenger.phone)){
      alert("Please enter a valid phone (such as 80391122).");
      return;
    }

    if (passenger.seatId < 0 || passenger.seatId >= totalSeats) {
      alert("Please enter a valid seatId (between 0 inclusive and " + totalSeats.toString() + " exclusive.");
      return;
    }
    this.props.bookTraveller(passenger);
    addForm.travellerName.value = "";
    addForm.travellerPhone.value = "";
    addForm.seatId.value = "";
  }

  render() {
    const travellerList = this.props.travellers;
    const seatmap = seatMapping(travellerList);
    return (
      <div>
        <form name="addTraveller" onSubmit={this.handleSubmit}>
        {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
          <input type="text" name="travellerName" placeholder="Name" required/>
          <input type='text' name='travellerPhone' placeholder="Phone" required/>
          <input type="text" name="seatId" placeholder="Seat Id" required/>
          <button>Add</button>
        </form>
        <hr/>
        <DisplayFreeSeats seatList = {seatmap}/>
      </div>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const deleteForm = document.forms.deleteTraveller;
    const passenger = {
      name: deleteForm.travellerName.value.toLowerCase(), phone: deleteForm.travellerPhone.value
    };
    this.props.deleteTraveller(passenger);
    deleteForm.travellerName.value = "";
    deleteForm.travellerPhone.value = "";
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	      <input type="text" name="travellerName" placeholder="Name" required/>
        <input type="text" name="travellerPhone" placeholder="Phone" required/>
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor() {
	super();
	}

	render(){
    const curLength = this.props.travellers.length;
    const freeCount = totalSeats - curLength;
    return (
      <>
      <div className='homePageHeader'>
        <h1>Hello~~ This is SG High-Speed Intercontinental Railway Reservation System</h1>
      </div>
      <div>
        <h2>Current Number of Available Counts</h2>
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
        <p id='countFreeSeats'>{freeCount}</p>
      </div>
      </>);
	}
}

class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], pageName: "showHomePage"};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.loadData = this.loadData.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.setSelector = this.setSelector.bind(this);
    this.seatMapping = this.seatMapping.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({pageName: value});
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
      const passengerList = this.state.travellers.slice();
      passengerList.push(passenger);
      // Print current passenger list
      console.log(passengerList);
      this.setState({travellers: passengerList});
      alert("Successfully added!");
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    const prevTravellers = this.state.travellers;
    
    const passengerList = prevTravellers.filter(
      curPassenger => {
        return (
          curPassenger.name !== passenger.name || curPassenger.phone !== passenger.phone
        )
      }
    );

    if (passengerList.length == prevTravellers.length) {
      alert("Current record doesn't exist in the database.");
    } else{
      this.setState({travellers:passengerList});
      alert("Successfully Deleted.");
    }
  }

  seatMapping() {
    const seatList = [];
    // Initialize seat mapping
    for (let i = 0; i < totalSeats; i++){
      seatList.push(0);
    }
    const travellerList = this.state.travellers;
    let curBookingNum = travellerList.length;
    travellerList => {
      for (let passenger of travellerList) {
        const curId = passenger.seatId;
        seatList[curId] = 1;
      }
    };
    return seatList;
  }

  render() {
    let navigationBar = 
      <>
      <div id="buttonNav">
        <button onClick={() => this.setSelector("showHomePage")}>Home</button>
        <button onClick={() => this.setSelector("showBookPage")}>Book</button>
        <button onClick={() => this.setSelector("showCancelPage")}>Cancel</button>
        <button onClick={() => this.setSelector("showDisplayPage")}>Display</button>
      </div>

      </>

    let curPage = null;
    let pageName = this.state.pageName;
    if (pageName == "showHomePage") {
      curPage = <Homepage travellers={this.state.travellers}/>;
    } else if (pageName == "showBookPage") {
      curPage = <Add bookTraveller={this.bookTraveller} travellers={this.state.travellers}/>;
    } else if(pageName == 'showDisplayPage') {
      curPage = <Display travellers={this.state.travellers}/>;
    } else if(pageName == 'showCancelPage') {
      curPage = <Delete deleteTraveller={this.deleteTraveller}/>;
    }

    return (
      <div>
        <h1>Ticket To Ride</h1>
        {navigationBar}
        <hr />
        {curPage}
        <div>
            {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}

        </div>
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {/*Q3. Code to call component that Displays Travellers.*/}
          
          {/*Q4. Code to call the component that adds a traveller.*/}
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
