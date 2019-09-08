/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
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
                        Working deprived communities for their upliftment and with emphasis on children and women and provide them livelihood opportunities and them into the mainstream of society
                    </li>
                </ul>
            </div>
        </Modal>
    )
}
