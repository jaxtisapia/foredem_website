/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function ContactUsModal(props){
    return ( <Modal
            title="Contact Us"
            visible={props.visible}
            onCancel={() => props.disable()}
            footer={null}>

           <div>

               <ul className="margin-medium list-items">
              <li><span>Prince Abdulai Baba Alhassan</span><br/>
                  Adjiriganor East Legon<br/>
                  GPS  GD -188-7629 #26 Okpewuo Mensah Ave.
                  <br/>
               werisefoundation@hotmail.com<br/>
                  +233243971045</li>

               </ul>


           </div>
        </Modal>
    )
};
