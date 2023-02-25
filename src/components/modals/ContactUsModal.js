/**
 * Created by user on 2017-10-01.
 */

import React from "react";
import { Modal } from "antd";

export function ContactUsModal(props) {
  return (
    <Modal
      title="Contact Us"
      visible={props.visible}
      onCancel={() => props.disable()}
      footer={null}
    >
      <div>
        <ul className="margin-medium list-items">
          <li>
            <span>Abdulai Baba Alhassan</span>
            <br />
            P.O.Box 485
            <br />
            Tamale
            <br />
            Northern Region
            <br />
            Ghana, West Africa
          </li>

          <li>
            E446 Galbang Avenue
            <br />
            Dagban Dabba fong
            <br />
            Tamale, Northern Region
            <br />
            Ghana, West Africa
          </li>

          <li>
            foredemgh@yahoo.com
            <br />
            +233-24-397-1045
            <br />
            +233-24-412-0134
            <br />
            +233-50-788-1959
          </li>
        </ul>
      </div>
    </Modal>
  );
}
