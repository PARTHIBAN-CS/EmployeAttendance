import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stat } from "fs";

interface MyState {
  rollno: number;
  firstname: string;
  lastname: string;
  gender: string;
  phoneno: number;
  mail: string;
  password: string;
  item: unknown;
  history: any;
}

interface MyProps {
  history: any;
  rollno: number;
  firstname: string;
  lastname: string;
  gender: string;
  phoneno: number;
  mail: string;
  password: string;
}
type Employes = {
  rollno: number;
  firstname: string;
  lastname: string;
  gender: string;
  phoneno: number;
  mail: string;
  password: string;
};

var array: Array<Employes> = [];

class RegistrationForm extends React.Component<MyProps, MyState> {
  constructor(Myprops: MyProps) {
    super(Myprops);
    this.state = {
      rollno: 0,
      firstname: "",
      lastname: "",
      gender: "",
      phoneno: 0,
      mail: "",
      password: "",
      item: "",
      history: "",
    };
  }

  rollhandler = (event: any) => {
    this.setState({
      rollno: event.target.value,
    });
  };
  firstnamehandler = (event: any) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  lastnamehandler = (event: any) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  genderhandler = (event: any) => {
    this.setState({
      gender: event.target.value,
    });
  };
  phonehandler = (event: any) => {
    this.setState({
      phoneno: event.target.value,
    });
  };
  mailhandler = (event: any) => {
    this.setState({
      mail: event.target.value,
    });
  };
  passwordhandler = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };
  newUser = () => {
    this.props.history.push("/LoginForm");
  };

  // handleSubmit = (event : any) => {
  //   if (this.props.rollno > 0) {
  //     const employes = {
  //       rollno: this.state.rollno,
  //       firstname: this.state.firstname,
  //       lastname: this.state.lastname,
  //       gender: this.state.gender,
  //       phoneno: this.state.phoneno,
  //       mail: this.state.mail,
  //       password: this.state.password,

  //     };
  //     console.log(employes);
  //     var rollno = this.state.rollno;
  //     axios
  //       .put("https://localhost:5001/api/emp/Edit/" +rollno, {
  //         employes: [employes],
  //       })
  //       .then((res) => {
  //         this.setState({
  //           rollno:0,
  //           firstname: "",
  //           lastname: "",
  //           gender: "",
  //           phoneno: 0,
  //           mail: "",
  //           password: "",
  //         });
  //       });
  //   } else {
  //     alert("registered Successfully");
  //     const employes = {

  //       firstname: this.state.firstname,
  //       lastname: this.state.lastname,
  //       gender: this.state.gender,
  //       phoneno: this.state.phoneno,
  //       mail: this.state.mail,
  //       password: this.state.password,
  //     };
  //    console.log(employes);
  //     axios
  //       .post("https://localhost:5001/api/emp/Create",{
  //         employes:  {

  //           firstname: "Parthipan",

  //         }
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data.length > 0 && response.data[0].rollno > 0) {
  //           array.push(response.data[0]);
  //           this.setState({
  //           rollno:0,
  //           firstname: "",
  //           lastname: "",
  //           gender: "",
  //           phoneno: 0,
  //           mail: "",
  //           password: "",
  //           });
  //         }
  //       });
  //   }
  //   event.preventDefault();
  // };
  // componentWillMount() {
  //   alert("1")
  //   if (this.props.rollno > 0) {
  //    const rollno = this.props.rollno;
  //    axios.get("https://localhost:5001/api/emp/"+rollno)
  //    .then((response) => {

  //      array = response.data;
  //      console.log(array)

  //      this.setState({
  //      rollno: response.data.rollno,
  //      firstname: response.data.firstname,
  //      lastname:response.data.lastname,
  //      gender: response.data.gender,
  //      phoneno: response.data.phoneno,
  //      mail: response.data.mail,
  //      password: response.data.password,
  //         })
  //    })
  //   }

  // }

  handleSubmit = (event: any) => {
    const employes = {
      rollno: this.state.rollno,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender,
      phoneno: this.state.phoneno,
      mail: this.state.mail,
      password: this.state.password,
    };
    axios
      .post("https://localhost:5001/api/Employes/Create", employes)
      .then((response) => {
        array.push(response.data[0]);
        this.setState({
          rollno: 0,
          firstname: "",
          lastname: "",
          gender: "",
          phoneno: 0,
          mail: "",
          password: "",
        });
      });
    alert("Registered Successfully");
    this.props.history.push("/LoginForm");
  };

  render() {
    return (
      <div>
        <div>
          <h1>Create New Employee</h1>
        </div>

        {/* <div>
          <label>Rollno</label>
          <br />
          <input
            type="number"
            value={this.state.rollno}
            onChange={this.rollhandler}
          />
        </div> */}

        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            id="firstname"
            value={this.state.firstname}
            onChange={this.firstnamehandler}
          />
        </div>

        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            id="lastname"
            value={this.state.lastname}
            onChange={this.lastnamehandler}
          />
        </div>

        <div>
          {" "}
          <label>Gender :</label>
          <br />
          <select
            id="gender"
            onChange={this.genderhandler}
            defaultValue="Select Gender"
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
        </div>

        <div>
          <label>Phone Number</label>
          <br />
          <input
            type="number"
            id="phone"
            value={this.state.phoneno}
            onChange={this.phonehandler}
          />
        </div>

        <div>
          <label>Mail</label>
          <br />
          <input
            type="text"
            id="mail"
            value={this.state.mail}
            onChange={this.mailhandler}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="text"
            id="password"
            value={this.state.password}
            onChange={this.passwordhandler}
          />
        </div>
        <br />
        {/* <button
          type="button"
          id="register"
          className="buttonDelete"
          onClick={this.handleSubmit()}
        >
          Register
        </button> */}
        <input
          type="submit"
          id="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
        <br />

        <button
          type="button"
          id="register"
          className="buttonDelete"
          onClick={this.newUser}
        >
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    rollno: state.user.rollno,
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    gender: state.user.gender,
    phoneno: state.user.phoneno,
    mail: state.user.mail,
    password: state.user.password,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setName() {
      console.log("setting name ,...", "$$$$");

      dispatch({ type: "SET_LASTNAME" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
