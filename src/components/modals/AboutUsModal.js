/**
 * Created by user on 2017-10-01.
 */

import React from "react";
import Modal from "antd/lib/modal";

export function AboutUsModal(props) {
  return (
    <Modal
      title="About Us"
      visible={props.visible}
      footer={null}
      onCancel={() => props.disable()}
    >
      <div>
        <ul className="margin-medium list-items">
          <li>
            <p className="margin-bottom-10">
              Foredem is an acronym for the foundation for reconciliation and
              democracy. It's a Non Governmental Organization, which has its aim
              being the promotion of democratic governance and the enhancement
              of peace and reconciliation amongst ethnic groups in the country
              to attain progress and development.
            </p>
          </li>

          <li>
            {" "}
            <p className="margin-bottom-10">
              The organization has been formed solely to complement government
              efforts of providing the necessary leadership to bring about rapid
              development. We believe strongly that government should not be the
              only medium through which development can take place.
            </p>
          </li>

          <li>
            <p className="margin-bottom-10">
              In this regard, it has its aim the identification of the problems
              militating against development and consequently suggesting
              solutions to such problems, some of the problems that crop up as
              the result of the western style of governance is that the large
              number of the populace are illiterates. The level of illiteracy
              has impacted on the practice of democratic governance. This is
              because people need to understand the basic tenets of democracy so
              that it can be very successful.
            </p>
          </li>

          <li>
            {" "}
            <p className="margin-bottom-10">
              Foredem has one of its objective the education of many
              illiterates, it therefore, has plans of providing educational
              facilities to various parts of the country with the necessary
              logistics such as qualified resource personal to carry out this
              objective. The organization believe strongly that a literate
              population can bring about the success of this kind of political
              ideology. We also intend to play an active role in educating
              people of national importance. There are instances when issues
              crop up and pit various political parties against one another, a
              classical example is the controversial Representative of People's
              Amendment Bill (ROPAB) which is now (ROPAL). Since it has been
              passed into a law in 2007. This issue divided the government and
              the opposition by then.
            </p>
          </li>

          <li>
            <p className="margin-bottom-10">
              Even at this time, many Ghanaians did not and still did not know
              what this law is all about. Another important bill which is before
              parliament is the Right To Information Bill (RTI) that has taken
              so long for its passage by successful governments. The foundation
              identifies such a lapse as one of its primary objectives. There
              are several issues that are of national importance that need to be
              delved into such as the need for environmental
              consciousness-keeping our urban and rural areas clean.
            </p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
