/**
 * Created by user on 2017-09-29.
 */
import React, { Component } from "react";
import { DonationModal } from "./modals/DonationModal";

export class AboutBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donationModalVisible: false
    };

    this.showDonation = this.showDonation.bind(this);
    this.hideDonation = this.hideDonation.bind(this);
  }

  showDonation() {
    this.setState({ donationModalVisible: true });
  }

  hideDonation() {
    this.setState({ donationModalVisible: false });
  }

  render() {
    return (
      <div className="split-bio">
        <DonationModal
          visible={this.state.donationModalVisible}
          disable={this.hideDonation}
        />

        <p className="margin-bottom-10">
          Foredem is an acronym for the foundation for reconciliation and
          democracy. It's a Non Governmental Organization, which has its aim
          being the promotion of democratic governance and the enhancement of
          peace and reconciliation amongst ethnic groups in the country to
          attain progress and development.
        </p>
      </div>
    );
  }
}
