/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'

let logo = "https://o.remove.bg/downloads/1398b8a6-f0af-4f04-a27c-5e9987c2013b/IMG-20191210-WA0009-removebg-preview.png";

export class HeaderBlock extends Component{

    render (){

        return (
            <div className="split-intro" >

                <img style={{maxWidth: '200px', maxHeight: '200px'}} src={logo} />

                <h1 style={{fontColor:"#34495e", fontWeight:700}}>WE SHAPE, WE TRANSFORM, WE RECONCILE.</h1>

                {/*<span className="tagline">WE SHAPE, WE TRANSFORM, WE RECONCILE.</span>*/}

            </div>
        );

    }

}
