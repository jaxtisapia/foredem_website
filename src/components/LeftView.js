/**
 * Created by user on 2017-09-29.
 */
import React, { Component } from 'react'

// import bg1 from '../img/bg1.jpg'
// import bg2 from '../img/bg2.jpg'
// import bg3 from '../img/bg3.jpg'
// import bg4 from '../img/bg4.jpg'
// import bg5 from '../img/bg5.jpg'
// import bg6 from '../img/bg6.jpg'
// import bg7 from '../img/bg7.jpg'
// import bg8 from '../img/bg8.jpg'
// import bg9 from '../img/bg9.jpg'
// import bg10 from '../img/bg10.jpg'
// import bg11 from '../img/bg11.jpg'
// import bg12 from '../img/bg12.jpg'
// import bg13 from '../img/bg13.jpg'

// const image_urls = [
//     "http://media.gettyimages.com/photos/african-girl-picture-id108312102",
//     "http://andykristian.com/wp-content/uploads/2011/06/15.jpg"
// ];

let bg1 = "https://borgenproject.org/wp-content/uploads/African-Poverty.jpg";
let bg2 ="https://africanarguments.org/wp-content/uploads/2013/01/Africa_children_DRC-1024x682.jpg";
let bg3 ="https://www.artflakes.com/artwork/products/514956/zoom/dsc08242-1-1-1.jpg?1310683485";
let bg4 ="http://jon-atkinson.com/Large%20Images%204%20bigger/Black_And_White%201.jpg";
let bg5 ="https://cdn.pixabay.com/photo/2015/03/07/19/28/children-663392_1280.jpg";
let bg6 ="https://c.wallhere.com/photos/cd/46/poverty_africa_girls_boy_boys_girl_kids_children-1100177.jpg";
let bg7 ="https://cdn.pixabay.com/photo/2015/02/24/19/36/girl-647714_1280.jpg";
let bg8 ="https://images.unsplash.com/photo-1495556650867-99590cea3657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60";
let bg9 ="https://c.wallhere.com/photos/69/2f/africa_zambia_ordinaryafrica_bicycle_everydayafrica_lifeinafrica_katete_streetlife-858490.jpg";
let bg10 ="http://yesofcorsa.com/wp-content/uploads/2018/07/Child-And-Poverty-Best-Wallpaper-1024x576.jpg";
let bg11 ="https://sites.google.com/a/nv.ccsd.net/poverty-in-nicaragua/about/mission/28926e5e4a40b7f90eb7b098f0fd7222.jpg?attredirects=0";
let bg12 ="https://images.theconversation.com/files/241246/original/file-20181018-67161-q6ladm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip";
let bg13 ="https://childphotocompetition.com/wp-content/uploads/2014/08/2nd-place-ID-277-documentary-street.jpg";
let bg14 ="https://user-images.githubusercontent.com/32112641/221374113-f08ab86b-3539-4eca-9bf0-66dd48c13925.jpeg";
let bg15 ="https://user-images.githubusercontent.com/32112641/221374110-885e7961-4cee-44d3-a509-0b42c3ee9abf.jpeg";

const image_urls = [
    bg14, bg15, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg9, bg10, bg11, bg12, bg13
];

export class LeftView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image_index: 0,
            image: image_urls[0]
        };

        this.changeBackground = this.changeBackground.bind(this);
    }

    componentDidMount() {
        setInterval(this.changeBackground, 5000);
    }


    changeBackground(event) {

        if (this.state.image_index === image_urls.length - 1) {
            this.setState({ image_index: 0 })
        }
        else {
            this.setState({ image_index: this.state.image_index + 1 })
        }

        this.setState({
            image: image_urls[this.state.image_index]
        });


    }

    render() {

        return (
            <div className="split-image" style={{ backgroundImage: `url(${this.state.image})` }}>

            </div>
        );

    }

}
