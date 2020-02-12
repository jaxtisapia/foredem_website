/**
 * Created by user on 2017-10-01.
 */

import React from "react";
import {} from "antd";
import { Modal } from "antd";

export function AboutFounderModal(props) {
  return (
    <Modal
      title="About the Founder"
      visible={props.visible}
      footer={null}
      onCancel={() => props.disable()}
    >
      <div>
        <ul className="margin-medium list-items">
          <li>
            <span>
              Prince Abdulai Baba Alhassan is the Founder of the Foundation for
              Reconciliation and Democracy (foredem).
            </span>
          </li>

          <li>
            <span>
              Foundation for Reconciliation and Democracy was formed on the 30th
              July 2007 to promote peace and reconciliation amongst various
              ethnic groups as a catalyst for economic and democratic
              development in the country.
            </span>
          </li>

          <li>
            <span>
              Prince Baba Alhassan is a student of Media and Communication
              Studies at Islamic University College, (IUCG) and a trained
              Mediator and Reconciliator, who graduated from the Center for
              Peace and Reconciliation at GIMPA, Green Hill in 2019.
            </span>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
