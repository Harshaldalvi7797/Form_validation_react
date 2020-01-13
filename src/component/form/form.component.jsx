import React,{Component} from "react";
import SimpleReactValidator from 'simple-react-validator';
import TemplateForm from "./template.form";
import "./form.css";

class Form extends Component{
    constructor()
    {
        super();
        this.state =
        {
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            mobileno : "",
            UserLogin:
            {
                userid: "",
                username: ""

            }
        };
        this.validator = new SimpleReactValidator({autoForceUpdate:this});
        
    }
    setfirstname = (e) => this.setState ({firstname : e.target.value});
    setlastname = (e) => this.setState ({lastname : e.target.value});
    setemail = (e) => this.setState ({email : e.target.value});
    setpassword = (e) => this.setState ({password : e.target.value});
    setmobileno = (e) => this.setState ({mobileno : e.target.value});
    setuserid = (e) => {
        // this.setState ({"UserLogin.userid": e.target.value});
        let a = Object.assign({} , this.state.UserLogin);
        console.log(a); 
        a.userid= e.target.value;
        this.setState({UserLogin : a});

    };
    setusername = (e) => {
        // this.setState ({"UserLogin.username": e.target.value});
        let b = Object.assign({}, this.state.UserLogin);
        console.log(b);
        b.username= e.target.value;
        this.setState({UserLogin : b});

    }
    handleFormSubmit = () =>{
        if(this.validator.allValid())
        {

            let data = {
                firstname :this.state.firstname,
                lastname : this.state.lastname,
                email :this.state.email,
                password : this.state.password,
                mobileno : this.state.mobileno,
                // userid : this.state.UserLogin.userid
                UserLogin: {
                    userid : this.state.UserLogin.userid,
                    username:this.state.UserLogin.username
                }

            };
            console.log(data);
        }
        else
        {
            this.validator.showMessages();
            this.forceUpdate();
        }


    }

    render()
    {
    


        const style={
            marginTop:"50px"
    
        }
        return(
            <div className="container" style={style}>
                <div className="row">
                    <div className="col-md-6">
                    {/* <TemplateForm/> */}
                    <form>
            <div className="form-group">
                <input type="text" placeholder="Enter First Name" className="form-control"
                onChange = {this.setfirstname}
                value={this.state.firstname}
                
                />
                {
                    this.validator.message('firstname',this.state.firstname,'required|alpha|min:3')
                }
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Last Name" className="form-control"
                   onChange = {this.setlastname}
                   value={this.state.lastname}
                
                />
                {
                    this.validator.message('lastname',this.state.lastname,'required|alpha|min:4')
                }
            </div>
            <div className="form-group">
                <input type="text" placeholder="Email" className="form-control"
                   onChange = {this.setemail}
                   value={this.state.email}
                
                />
                {
                    this.validator.message('email',this.state.email, 'required|email')
                }
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" className="form-control"
                   onChange = {this.setpassword}
                   value={this.state.password}
                
                />
                  {
                    this.validator.message('password',this.state.password,'required|min:6')
                }
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Mobile No" className="form-control"
              onChange = {this.setmobileno}
              value={this.state.mobileno}
                
                
                />
                  {
                    this.validator.message('mobileno',this.state.mobileno,'required|min:10|max:13')
                }
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter UserId" className="form-control"
                  onChange = {this.setuserid}
                  value={this.state.UserLogin.userid}
                 
                
                
                />
                {
                    this.validator.message("userid",
                     this.state.UserLogin.userid, "required")
                }
              
            </div>


            <div className="form-group">
                <input type="text" placeholder="Enter UserName" className="form-control"
                 onChange = {this.setusername}
                 value={this.state.UserLogin.username}
               
                
                
                />
                 {
                    this.validator.message("username",
                     this.state.UserLogin.username, "required")
                }
               
            </div>
            <button type="button" className="btn btn-outline-primary"  onClick={this.handleFormSubmit}>Submit</button>
        </form>
    </div>
    </div>
           
                </div>
           
        )
    }
} 

export default Form;