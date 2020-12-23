import React, { Component } from 'react';
import { GoTrashcan, GoMail, GoStar } from 'react-icons/go';
import firebase from './Firebase';

class AttendeesList extends Component {
    constructor(props) {
        super(props);

        this.deleteAttendee = this.deleteAttendee.bind(this);
    }

    deleteAttendee = (e, whichMeeting, whichAttendee) => {
        e.preventDefault();
        const adminUser = this.props.adminUser;
        const ref = firebase
            .database()
            .ref(
                `meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}`
            );
        ref.remove();
    };

    toggleStar = (e, star, whichMeeting, whichAttendee) => {
        e.preventDefault();
        const adminUser = this.props.adminUser;
        const ref = firebase
            .database()
            .ref(
                `meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}/star`
            );

        if (star === undefined) {
            ref.set(true);
        } else {
            ref.set(!star);
        }
    };

    render() {
        const admin =
            this.props.adminUser === this.props.userID ? true : false;
        const attendees = this.props.attendees;
        const myAttendees = attendees.map(item => {
            return (
                <div className="col-sm-12 col-md-10 offset-md-1 mt-2"
                    key={item.attendeeID}
                >
                    <div className="card ">
                        <div
                            className={
                                'card-body px-3 py-2 d-flex align-items-center ' +
                                (admin ? '' : 'justify-content-center')
                            }
                        >
                            {admin && (
                                <div className="btn-group pr-2">
                                    <button
                                        className={
                                            'btn btn-sm ' +
                                            (item.star
                                                ? 'btn-info'
                                                : 'btn-outline-secondary')
                                        }
                                        tite="Give user a star"
                                        onClick={e =>
                                            this.toggleStar(
                                                e,
                                                item.star,
                                                this.props.meetingID,
                                                item.attendeeID
                                            )
                                        }
                                    >
                                        <GoStar />
                                    </button>
                                    <a
                                        href={`mailto:${item.attendeeEmail}`}
                                        className="btn btn-sm btn-outline-secondary"
                                        title="Mail Attendee"
                                    >
                                        <GoMail />
                                    </a>
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        tite="Delete Attendee"
                                        onClick={e =>
                                            this.deleteAttendee(
                                                e,
                                                this.props.meetingID,
                                                item.attendeeID
                                            )
                                        }
                                    >
                                        <GoTrashcan />
                                    </button>
                                </div>
                            )}

                            <div>{item.attendeeName}</div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="row justify-content-center">
                <div className="container col-md-8">{myAttendees}</div>
            </div>
        );
    }
}

export default AttendeesList;