import React from 'react';
import './Tweet.css';
import dummyTweets from '../static/dummyData';

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-KR');

  return (
    <li className="tweet" id={`tweet-${tweet.id}`}>
      <div className="tweet__profile">
        <img src={tweet.picture} alt={`${tweet.username} profile`} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <h4 className="tweet__username">{tweet.username}</h4>
            <p className="tweet__createdAt">{parsedDate}</p>
          </div>
        </div>
        <div className="tweet__message">
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;