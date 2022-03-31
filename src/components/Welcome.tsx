import * as React from "react";
import axios from "axios";

interface MyState {
  mail: string;
  password: string;
}

interface MyProps {
  history: any;
}

class Welcome extends React.Component<MyProps, MyState> {
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

   

    return (
      <div>
        <h1>
            Welcome
        </h1>
      </div>
    );
  }
}

export default Welcome;
