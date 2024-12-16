import React from 'react';

const CustomerFeedbackCard = ({message}) => {
    
    return (
        <div className='bg-gradient-to-br from-yellow-400 to-lime-400 p-6'>
            <h3>Client's Mail: {message.email}</h3>
            <h3>Client's Feedback: {message.textMessage}</h3>
        </div>
    );
};

export default CustomerFeedbackCard;