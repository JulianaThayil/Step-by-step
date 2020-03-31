import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

//redux
import { connect } from 'react-redux';


class BadgeContent extends Component {
    render() {
        const notifications = this.props.notifications;
        let notificationsIcon;
    if (notifications && notifications.length > 0) {
      notifications.filter((not) => not.read === false).length > 0
        ? (notificationsIcon = (
            <Badge
              badgeContent={
                notifications.filter((not) => not.read === false).length
              }
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />);
    } else {
      notificationsIcon = <NotificationsIcon />;
    }
        return (
                <div>
                    {notificationsIcon}
                </div> 
        )
    }
}

BadgeContent.propTypes = {
    notifications: PropTypes.array.isRequired
  };
  
  const mapStateToProps = (state) => ({
    notifications: state.user.notifications
  });
  
  export default connect(
    mapStateToProps,
  )(BadgeContent);
