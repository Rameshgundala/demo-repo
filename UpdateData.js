import React, { Component } from "react";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", course: "", fee: ""};
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 className="p-2 border-bottom">Edit Data</h4>

            {/* customer name starts */}
            <div className="form-group form-row">
              <label className="col-lg-4"> name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">course</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.course}
                  onChange={(event) => {
                    this.setState({ course: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4">Fee</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fee}
                  onChange={(event) => {
                    this.setState({ fee: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className=" border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }


componentDidMount = async () => {
    //get id from route parameters
    let id = this.props.match.params.id;
    console.log(id);

    //make GET request to fetch customer object from database based on id
    let response = await fetch(`http://localhost:3001/contacts/${id}`, {
      method: "GET",
    });
    let body = await response.json();

    this.setState({
        name: body.name,
        course: body.course,
        fee: body.fee,
    });
  };
   
  onSaveClick = async (event) => {
    event.preventDefault();
    let id = this.props.match.params.id;

    var custmomer = {
      name: this.state.name,
      course: this.state.course,
      fee: this.state.fee,
    };

    //make post request
    var response = await fetch(`http://localhost:3001/contacts/${id}`, {
      method: "PUT",
      body: JSON.stringify(custmomer),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);

    //after receiving response body, redirect to /customers
    if (body) {
      this.props.history.replace("/GetData");
    }
  };
}

export default UpdateCustomer;
