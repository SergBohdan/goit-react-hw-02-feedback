import PropTypes from 'prop-types';
import { Message } from './NotificationStyled';

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

