/**
 * Created by user on 2017-09-29.
 */
import React, {Component} from "react";
import {OurMissionModal} from "./modals/OurMissionModal";
import {OurVisionModal} from "./modals/OurVisionModal";
import {ContactUsModal} from "./modals/ContactUsModal";
import {OurAchievementsModal} from "./modals/OurAchievementsModal";
import {GalleryModal} from "./modals/GalleryModal";
import {AboutUsModal} from "./modals/AboutUsModal";
import {AboutFounderModal} from "./modals/AboutFounderModal";
import {ManagementTeamModal} from "./modals/ManagementTeamModal";

export class FooterBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            missionModalVisible: false,
            visionModalVisible: false,
            contactUsModalVisible: false,
            achievementsModalVisible: false,
            galleryModalVisible: false,
            aboutFounderVisible: false,
            aboutUsVisible: false,
            managementTeamVisible: false
        };
    }

    showOurMission = () => this.setState({missionModalVisible: true});
    hideOurMission = () => this.setState({missionModalVisible: false});

    showOurAchievement = () => this.setState({achievementsModalVisible: true});
    hideOurAchievement = () => this.setState({achievementsModalVisible: false});

    showOurVision = () => this.setState({visionModalVisible: true});
    hideOurVision = () => this.setState({visionModalVisible: false});

    showContactUs = () => this.setState({contactUsModalVisible: true});
    hideContactUs = () => this.setState({contactUsModalVisible: false});

    showGallery = () => this.setState({galleryModalVisible: true});
    hideGallery = () => this.setState({galleryModalVisible: false});

    showAboutFounder = () => this.setState({aboutFounderVisible: true});
    hideAboutFounder = () => this.setState({aboutFounderVisible: false});

    showAboutUs = () => this.setState({aboutUsVisible: true});
    hideAboutUs = () => this.setState({aboutUsVisible: false});

    showManagementTeam = () => this.setState({managementTeamVisible: true});
    hideManagementTeam = () => this.setState({managementTeamVisible: false});

    render() {
        return (
            <div className="split-lists">
                <OurMissionModal
                    visible={this.state.missionModalVisible}
                    disable={this.hideOurMission}
                />
                <OurVisionModal
                    visible={this.state.visionModalVisible}
                    disable={this.hideOurVision}
                />
                <ContactUsModal
                    visible={this.state.contactUsModalVisible}
                    disable={this.hideContactUs}
                />
                <OurAchievementsModal
                    visible={this.state.achievementsModalVisible}
                    disable={this.hideOurAchievement}
                />

                <GalleryModal visible={this.state.galleryModalVisible} disable={this.hideGallery}/>

                <AboutUsModal
                    visible={this.state.aboutUsVisible}
                    disable={this.hideAboutUs}
                />
                <AboutFounderModal
                    visible={this.state.aboutFounderVisible}
                    disable={this.hideAboutFounder}
                />
                <ManagementTeamModal
                    visible={this.state.managementTeamVisible}
                    disable={this.hideManagementTeam}
                />

                <div style={{marginBottom: 48}}>
                    <h3 className="list-header">FOREDEM IN THE NEWS</h3>

                    <ul className="news-list">
                        <li>
                            <a href="https://www.ghanaweb.com/GhanaHomePage/NewsArchive/The-spread-of-illicit-weapons-causes-conflicts-Mr-Alhassan-240744">The spread of illicit weapons causes conflicts</a>
                        </li>

                        <li>
                            <a href="https://www.modernghana.com/news/385830/72/foredem-appeals-to-royal-families-in-dagbon-to-bur.html">FOREDEM
                                appeals to Royal Families in Dagbon to bury their differences</a>
                        </li>

                        <li>
                            <a href="https://www.modernghana.com/news/382673/fordem-appeals-to-politicians-to-desist-from-polit.html">FORDEM
                                appeals to Politicians to desist from politics of insults</a>
                        </li>

                        <li>
                            <a href="https://www.modernghana.com/news/409370/use-democracy-to-promote-peace-in-dagbon-prince.html">Use
                                democracy to promote peace in Dagbon</a>
                        </li>

                        <li>
                            <a href="https://www.ghanaweb.com/GhanaHomePage/NewsArchive/FORDEM-urges-Ghanaians-to-renew-confidence-in-state-institutions-1153979">FORDEM
                                urges Ghanaians to renew confidence in state institutions</a>
                        </li>
                    </ul>

                </div>

                <div className="split-list">
                    <h3>GET TO KNOW US</h3>

                    <ul>
                        <li>
                            <a onClick={this.showOurMission}>Our Mission</a>
                        </li>
                        <li>
                            <a onClick={this.showOurVision}>Our Vision</a>
                        </li>
                        <li>
                            <a onClick={this.showAboutFounder}>About The Founder</a>
                        </li>
                        <li>
                            <a onClick={this.showManagementTeam}>Management Team</a>
                        </li>
                        <li>
                            <a onClick={this.showAboutUs}>About Us</a>
                        </li>
                        {/*<li><a onClick={this.showOurAchievement}>Our Achievements</a></li>*/}
                        <li>
                            <a onClick={this.showContactUs}>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="split-list"></div>

                <div className="split-list">
                    <h3>Social</h3>

                    <ul>
                        {/*<li><a target="_blank" href="#">Twitter</a></li>*/}
                        <li>
                            <a target="_blank" href="https://www.facebook.com/">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/">
                                Instagram
                            </a>
                        </li>
                        {/*<li><a onClick={this.showGallery}>Events and Programmes</a></li>*/}
                    </ul>
                </div>

                <div className="split-list"></div>
            </div>
        );
    }
}
