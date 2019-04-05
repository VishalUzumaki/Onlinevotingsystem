import React,{Component} from 'react';
import axios from 'axios';
import  './Home.css';
import './Navigation.css';
class Login extends Component {


    state = {
        login: true,
        voting_screen: false,
        name: "",
        name_error:"",
        pin:"",
        candidate:"",
        submitted_screen:false,
        posts: []
    }


    componentDidMount(){
        axios.get('http://localhost:5000/').
        then(
            response=>{
                this.setState({posts:response.data});
                console.log(response);
            })

    }


    display_candidates=()=>{

        const posts=this.state.posts.map(post=>{return( <div>{post.name}</div>)
        });


        for(var i=0; i<this.state.posts.length; i++) {
            if(this.state.name === this.state.posts[i].name)
            {
                if(this.state.pin === this.state.posts[i].pin) {
                    this.setState({voting_screen: true});
                    this.setState({login: false})
                }
            }
        }


    }

    thor=()=>{
        this.setState({candidate: 'Vishal'})
        this.setState({submitted_screen: true})
        this.setState({voting_screen: false})
    }

    iron=()=>{
        this.setState({candidate: 'Rushi'})
        this.setState({submitted_screen: true})
        this.setState({voting_screen: false})
    }

    doctor=()=>{
        this.setState({candidate: 'Tirth'})
        this.setState({submitted_screen: true})
        this.setState({voting_screen: false})
    }


    render()
    {
        const posts=this.state.posts.map(post=>{return( <div>{post.name}</div>)
        });

        let logindiv = null;

        if(this.state.login) {
            logindiv = (
                <center>

                    <div className={'back'} >
<div id='white'>
                        <table className={'voting_screen'}>

                            <tr>
                                <td>Name:</td>
                                <td> <input onChange={(event) =>
                                {this.setState({
                                    name: event.target.value
                                })
                                }}/> </td>
                            </tr>
                            <tr>
                                <td>Pin:</td>
                                <td><input onChange={(event) => {
                                    this.setState({
                                        pin: event.target.value
                                    })
                                }}/> </td>
                            </tr>



                            <tr>
                                <td>

                                <button onClick={this.display_candidates} className={'button_login'}>
                                    Login
                                </button>
                            </td>
                            </tr>
                        </table>

                    </div>
                </div>
                </center>
            )

        }
        let voting=null;

        if(this.state.voting_screen)
        {
            voting=(<div className={'back'}>
                <center>
                    <h1 >Welcome {this.state.name} select one of the below candidates and make your nation great</h1>

                    <div>
                        <table>
                            <tr>
                                <td><button onClick={this.thor} className={'button1'}>Vishal</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={this.iron} className={'button2'}>Rushi</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={this.doctor} className={'button3'}>Tirth</button></td>
                            </tr>
                        </table>
                    </div>






                </center>
            </div>)
        }

        let submitted_screen=null;

        if(this.state.submitted_screen)
        {
            submitted_screen=(<div className={'back'}>
                    <h1>Status: Vote Submitted</h1>
                    <br/>
                <p>
                    You have selected {this.state.candidate} as your class Represntative
                </p>

            </div>)
        }



        return(

            <div>

                <div>


                    {logindiv}

                    {voting}

                    {submitted_screen}

                </div>


            </div>


        )

    }


}

export default Login;