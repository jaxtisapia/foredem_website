/**
 * Created by user on 2017-10-01.
 */

import React from 'react'
import { } from 'antd'
import {Modal} from "antd";

export function OurVisionModal(props) {

        return (
            <Modal
                title="Our Vision"
                onCancel={() => props.disable()}
                visible={props.visible}
                footer={null}>
                <div>
                    <ul className="margin-medium list-items">
                        <li>To establish an independent institution to train youth and women in leadership skills to enhance good democratic governance</li>
                    </ul>
                </div>
            </Modal>
        );

}
