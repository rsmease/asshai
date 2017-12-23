//utils
import React from 'react';
import { Link, Router, withRouter } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

//modals
import Modal from 'react-modal';
import GroupModalContainer from '../modals/group_modal_container';
import SidebarGroupMembersIndex from './sidebar_group_members_index';
import SidebarMemberIndex from './sidebar_member_index';

class SidebarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    showModal() {
        return <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            overlayClassName={
                {
                    base: "root-modal-container",
                    afterOpen: "root-modal-container",
                    beforeClose: "root-modal-container"
                }
            }
            className={
                {
                    base: "override-content-default",
                    afterOpen: "override-content-default",
                    beforeClose: "override-content-default"
                }
            }>
            <GroupModalContainer
                closeModal={this.closeModal}
                targetGroup={undefined}
                modalAction="new"
                groupType={this.props.groupType} />
        </Modal>;
    }


    render() {
        return (
            <section className="sidebar-section">
                <header className="sidebar-index-header">
                    <h3 className="sidebar-title">{`My ${this.props.groupType}s`}</h3>
                    <MaterialDesign.MdAddCircleOutline
                        className="sidebar-new-group-button"
                        onClick={this.openModal} />
                    {this.showModal()}
                </header>
                <SidebarGroupsIndex
                    groups={this.props.currentUserGroups}
                    groupType={this.props.groupType} />
            </section>
        );
    }
}

export default withRouter(SidebarIndex);
