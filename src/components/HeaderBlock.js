/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from 'react'

let logo = "https://user-images.githubusercontent.com/47640619/73796428-0fe40880-47a5-11ea-93d2-14e3bd3f618e.jpg";

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
