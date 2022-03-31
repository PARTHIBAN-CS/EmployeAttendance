import * as React from "react";
import axios from "axios";

interface MyState {
  mail: string;
  password: string;
}

interface MyProps {
  history: any;
}

class LoginForm extends React.Component<MyProps, MyState> {
  constructor(Myprops: MyProps) {
    super(Myprops);
    this.state = {
      mail: "",
      password: "",
    };
  }
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

  newUser = ()=>{
    this.props.history.push("/");
  }
  render() {

    const handleSubmit =() => {
        //event.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(this.state.mail);
        const employe = {
            mail: this.state.mail,
            password: this.state.password
        }
        console.log(employe)
        axios.put("https://localhost:5001/api/Employes/detail/", employe)
            .then(response => {
                console.log(response); 
                if(response.data.length>0){
                  alert("1")
                  this.props.history.push('/EmployeDetail');
                 // thiapp.props.setLastname(response);
  
              }
              else {
                  alert("please enter the correct Email and password")
              }
    
                this.setState({
                    mail :"",
                    password :""
                 });
          })
    
      }

    return (
      <div>
        <div>
          <button type="button" id="registerbutton" onClick={this.newUser}>
            Create a new User
          </button>
        </div>
        <div>
          <label>Mail</label>
          <input
            type="text"
            id="mail"
            value={this.state.mail}
            onChange={this.mailhandler}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="Password"
            id="password"
            value={this.state.password}
            onChange={this.passwordhandler}
          />
        </div>
        <br />
        <button
          type="button"
          id="login"
          className="buttonDelete"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginForm;
