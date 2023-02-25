/**
 * Created by user on 2017-10-01.
 */

import React from "react";
import { Modal } from "antd";

export function ManagementTeamModal(props) {
  return (
    <Modal
      title="Management Team"
      visible={props.visible}
      footer={null}
      onCancel={() => props.disable()}
    >
      <div>
        <ul className="margin-medium list-items">
          <li>
            <span>
              Usama Mumuni Arimiyawu
            </span>
          </li>
        </ul>
        <div style={{display: "flex", justifyContent: "center"}}>
	      <img style={{maxWidth: '200px', maxHeight: '200px'}} src="https://user-images.githubusercontent.com/32112641/221374114-258dd7ac-9ec6-4704-a1bb-51a715c24fb5.JPG" />
        </div>
      </div>

      <div>
        <ul className="margin-medium list-items">
          <li>
            <span>
              Mr Hamza Nayi Alhassan
            </span>
          </li>
        </ul>
        <div style={{display: "flex", justifyContent: "center"}}>
	      <img style={{maxWidth: '200px', maxHeight: '200px'}} src="https://user-images.githubusercontent.com/32112641/221374117-54202dd3-c90d-4e45-b8a5-83d4387e0fc2.JPG" />
        </div>
      </div>
    </Modal>
  );
}
