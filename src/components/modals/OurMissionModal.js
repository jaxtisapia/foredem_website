/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import {Modal} from "antd";

export function OurMissionModal(props){
    return ( <Modal
            title="Our Mission"
            visible={props.visible}
            footer={null}
            onCancel={() => props.disable()}>

            <div>
                <ul className="margin-medium list-items">
                    <li>
                        To work for deprived communities for their upliftment and betterment with special emphasis on children and women to provide them livelihood opportunities and bring them into the mainstream of society
                    </li>
                </ul>
            </div>
        </Modal>
    )
}
