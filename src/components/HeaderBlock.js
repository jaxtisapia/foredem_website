/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'

let logo = "http://res.cloudinary.com/du43ktr2x/image/upload/v1507317161/logo_ilgtdl.jpg";

export class HeaderBlock extends Component{

    render (){

        return (
            <div className="split-intro" >

                <img style={{maxWidth: '200px', maxHeight: '200px'}} src={logo} />

                <h1>Sub-motto goes here</h1>

                <span className="tagline">MAIN MOTTO GOES HERE</span>

            </div>
        );

    }

}
