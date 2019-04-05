import React,{Component} from 'react';
import axios from 'axios';
import  './Home.css';

class Home extends Component {

    state = {

        posts: []

    }


    render()
    {
        const posts=this.state.posts.map(post=>{return( <div>{post.name}</div>)
        });

        return(

            <div className={'back'}>


                <h1>Class Representative Elections</h1>

                <p>
                    The role of Class Representative
                    Class Representatives ensure that students' views on academic matters are heard.

                    They help ensure the University continually listens to and engages with students to improve teaching, learning, assessment and academic services.

                    Class Representatives can feed issues back directly into their departments and courses through Staff-Student Liaison Committees.

                    They can raise these and more general concerns at their School Councils.
                </p>



            </div>


        )

    }


}

export default Home;