import React,{Component} from 'react';
import axios from 'axios';
import vishal from '../images/vishal.JPG';
import rushi from '../images/rushi.JPG';
import tirth from '../images/tirth.JPG';
import './Home.css';

class About extends Component {

    state = {

        posts: []

    }




    render()
    {
        const posts=this.state.posts.map(post=>{return( <div>{post.name}</div>)
        });

        return(

            <div className={'back'}>

                <div id={"profiles_back"}>
                    <img src={vishal} height={'300'} width={'300'}/>
                </div>

                <div>
                     <h1>Vishal Patel</h1>
                        <p id="info_of_profile">
                            Art, freedom and creativity will change society faster than politics.
                        </p>
                </div>

                <br/>
                <div className={'separate'}>
                </div>



                <div id={"profiles_back"}>
                    <img src={rushi} height={'300'} width={'300'} />
                </div>

                <div>
                    <h1> Rushi Rami</h1>
                        <p id="info_of_profile">
                            Perseverance is the hard work you do after you get tired of doing the hard work you already did.
                        </p>
                </div>

                <br/>
                <div className={'separate'}>
                </div>





                <div id={"profiles_back"}>
                    <img src={tirth} height={'300'} width={'300'} />
                </div>

             <h1>Tirth Pandit</h1>

                <p id="info_of_profile">
                    Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future.

                </p>

                <div className={'separate'}>
                </div>


            </div>


        )

    }


}

export default About;