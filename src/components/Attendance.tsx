import * as React from "react";
import axios from "axios";

import { connect } from "react-redux";

interface Mystate {
  rollno: number;
  firstname: string;
  lastname: string;
  gender: string;
  phoneno: number;
  mail: string;
  password: string;
  rollno1: number;
  firstname1: string;
  lastname1: string;
  gender1: string;
  phoneno1: number;
  mail1: string;
  password1: string;
  filter: string;
  attendance : string;
  item: unknown;
  index: unknown;
  readOnly: boolean;
  response: any;
  
}

interface Myprops {
  history: any;
}
type Employes = {
  rollno: number;
  firstname: string;
  lastname: string;
  gender: string;
  phoneno: number;
  mail: string;
  password: string;
  attendance : string;
};

var array: Array<Employes> = [];
var status = 0;
var arrayindex = -1;
var thiapp: any;
var rollnoindex: any;

class Attendance extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops) {
    super(Myprops);

    this.state = {
      rollno: 0,
      firstname: "",
      lastname: "",
      gender: "",
      phoneno: 0,
      mail: "",
      password: "",
      rollno1: 0,
      firstname1: "",
      lastname1: "",
      gender1: "",
      phoneno1: 0,
      mail1: "",
      password1: "",
      filter: "",
      item: "",
      index: "",
      response: "",
      attendance: "",
      readOnly: false,
    };
    this.searchTxt = this.searchTxt.bind(this);
  }
  rollnohandler = (event: any) => {
    this.setState({
      rollno1: event.target.value,
    });
  };
  firstnamehandler = (event: any) => {
    this.setState({
      firstname1: event.target.value,
    });
  };
  lastnamehandler = (event: any) => {
    this.setState({
      lastname1: event.target.value,
    });
  };
  genderhandler = (event: any) => {
    this.setState({
      gender1: event.target.value,
    });
  };
  phonehandler = (event: any) => {
    this.setState({
      phoneno1: event.target.value,
    });
  };
  mailhandler = (event: any) => {
    this.setState({
      mail1: event.target.value,
    });
  };
  passwordhandler = (event: any) => {
    this.setState({
      password1: event.target.value,
    });
  };
  attendancehandler = (event: any) => {
    this.setState({
      attendance: event.target.value,
    });
  };
  searchTxt(event: any) {
    this.setState({ filter: event.target.value });
  }
  handleApiClick = () => {
    alert("1");
    axios.get("https://localhost:5001/api/Employes/rollno").then((response) => {
      console.log(response);
      array = response.data;
      console.log(array);
      this.setState({
        response: array,
      });
    });
  };
  componentWillMount() {
    this.handleApiClick();
  }
  render() {
    thiapp = this;

    let filter = this.state.filter;
    var dataSearch = array.filter((item) => {
      return (
        Object.keys(item).some((key) =>
          item["firstname"].toLowerCase().includes(filter.toLowerCase())
        ) ||
        item["rollno"].toString().toLowerCase().includes(filter.toLowerCase())
      );
    });

    const handleDeleteClick = (index: any) => {
      // event.preventDefault();
      const rollno = array[index].rollno;
      //  axios.delete("https://192.168.131.170:5001/api/students/Delete/"+rollno)
      axios
        .delete("https://localhost:5001/api/Employes/Delete/" + rollno)
        .then((res) => {
          if (res.data == 1) {
            array.splice(index, 1);

            this.setState({ index: array });
          }
        });

      // console.log(rollno);
      // }

      // console.log(res.data));
    };

    //    const history = useHistory();

    const handleEditClick = (item: any, index: any) => {
      // status=1;
      // item ={item}.rollno;
      rollnoindex = array[index].rollno;
      // console.log(item);
      // // arrayindex= array[index];
      // console.log(index);
      console.log(rollnoindex);
      arrayindex = index;
      this.setState({
        rollno1: item.rollno,
        firstname1: item.firstname,
        lastname1: item.lastname,
        gender1: item.gender,
        phoneno1: item.phoneno,
        mail1: item.mail,
        password1: item.password,
      });
      console.log(this.state);
      thiapp.props.setLastname(item);
    };

    // const handleSaveClick = () => {
    //   alert("1");
    //   const employes = {
    //     rollno: this.state.rollno,
    //     firstname: this.state.firstname1,
    //     lastname: this.state.lastname1,
    //     gender: this.state.gender1,
    //     phoneno: this.state.phoneno1,
    //     mail: this.state.mail1,
    //     password: this.state.password1,
    //   };
    //   console.log(employes);
    //   var rollno = this.state.rollno1;
    //   var firstname = this.state.firstname1;
    //   var lastname = this.state.lastname1;
    //   var gender = this.state.gender1;
    //   var phoneno = this.state.phoneno1;
    //   var mail = this.state.mail1;
    //   var password = this.state.password1;

    //   axios
    //     .put("https://localhost:5001/api/Employes/Edit/" + rollno, employes)

    //     .then((res) => {
    //       this.setState({ item: res.data });
    //     });

    //   array.splice(arrayindex, 1, {
    //     rollno: rollno,
    //     firstname: firstname,
    //     lastname: lastname,
    //     gender: gender,
    //     phoneno: phoneno,
    //     mail: mail,
    //     password: password,
    //   });
    //   arrayindex = -1;
    //   this.setState({
    //     firstname1: "",
    //     lastname1: "",
    //     gender1: "",
    //     phoneno1: 0,
    //     mail1: "",
    //     password1: "",
    //   });
    // };
    const click = () => {
      this.props.history.push("/LoginForm");
    };
    const click1 = () => {
      this.props.history.push("/Attendance");
    };
    const handleSaveClickml = (index:any, item:any,event:any) => {
        alert("save")
        var temparr1 = thiapp.state.array;
        console.log(temparr1);
        const attendance = {
            firstname:item.firstname,
            attendance:this.state.attendance,
        }
        console.log(attendance);
        axios.post("https://localhost:5001/api/Attendance/Create", attendance)
        .then(response=>{
         var data = response.data;
         console.log(data)
        })
        thiapp.setState({ attendance: temparr1})
    }

    const _click = (index: any,item : any,event: any) => {
        this.setState(prevState => ({ readOnly: !prevState.readOnly }))
        var temparr1 = thiapp.state.attendance;
         console.log(temparr1)
        //var a = event.currentTarget.getAttribute("tag");
        const attendance = {
          //firstname: temparr1[index].firstname,
          attendance: temparr1[index].attendance,
        }
        const id = temparr1[index].id
        axios.put("https://localhost:5001/api/Attendance/Edit/" + id, attendance)
          .then(res => {
            this.setState({ 
              //item: res.data
              attendance: item.attendance,
             });
        })
    }

    // const handleDeleteClickml = (index:any, item:any,event:any ) => {
    //     // var temparr1 = marklist;
    //     console.log(item)
    //     console.log(index)
    //     var temparr1 = thiapp.state.attendance;
    //     console.log(temparr1)
    //     const id =temparr1[index].id;
    //     console.log(id);
    //     axios.delete("https://localhost:5001/api/Attendance/Delete/" + id)
    //       .then(res => {
    //         console.log(res.data)
    //         if (res.data == 1) {
    //           temparr1.splice(index, 1);
    //           thiapp.setState({ temparr1: attendance });
    //         }
    //       })
    //     attendance.splice(index, 1);
    //     thiapp.setState({ attendance: attendance });
    // }

    return (
      <div>
        <div></div>
        <br />
        <button onClick={() => click()}>LoginForm</button>
        {/* <button onClick={() => click1()}>Attendance</button> */}
        <label>search :</label>
        <input
          type="text"
          id="search"
          value={filter}
          onChange={this.searchTxt}
        />{" "}
        <div>
    
        </div>
        {dataSearch.length > 0 ? (
          <div> search for {filter} </div>
        ) : (
          <div> Not found {filter} </div>
        )}
        <div>
          <table>
            <thead>
              <tr>
                
                <th>FirstName</th>
                <th>Attendance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
               
              </tr>
              {dataSearch.length > 0
                ? dataSearch.map((item, index) => {
                    return (
                      <tr key={index}>
                        {/* <td>{item.rollno}</td> */}
                        <td>{item.firstname} </td>
                        
                        <td>
                          <select
                            id="gender"
                            onChange={this.attendancehandler}
                            defaultValue="Select Gender"
                          >
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                          </select>
                        </td>
                        <td> <button  className='buttonDelete' id="save" onClick={(event) =>handleSaveClickml(index,item,event)}>
                        Save </button><button  className='buttonEdit' onClick={(event) =>_click(index,item,event)}>
                          {this.state.readOnly ? 'Edit' : 'Update'}
                        </button>
                        </td>
                      </tr>
                    );
                  })
                : array.map((item, index) => {
                    return (
                      <tr key={index}>
                
                        <td>{item.firstname}</td>
                       
                            <td>
                          <select
                            id="gender"
                            onChange={this.attendancehandler}
                            defaultValue="Select Gender"
                          >
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                          </select>
                        </td>
                       <td> <button  className='buttonDelete' id="save" onClick={(event) =>handleSaveClickml(index,item,event)}>
                        Save </button><button  className='buttonEdit' onClick={(event) =>_click(index,item,event)}>
                          {this.state.readOnly ? 'Edit' : 'Update'}
                        </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>

          <br />
          <br />
          <br />
          
        </div>
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
    setLastname(item: any) {
      const user = {
        firstname: item.firstname,
        lastname: item.lastname,
        rollno: item.rollno,
        gender: item.gender,
        phoneno: item.phoneno,
        mail: item.mail,
        password: item.password,
      };
      console.log(user);

      dispatch({ type: "SET_LASTNAME", state: user });

      // thiapp.props.history.push("/RegistrationForm");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
