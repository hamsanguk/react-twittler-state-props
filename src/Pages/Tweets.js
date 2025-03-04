import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // 트윗 목록과 새로운 트윗 입력 상태 관리
  const [tweets, setTweets] = useState(dummyTweets);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    if (!message.trim() || !username.trim()) return; // 빈 메시지 및 사용자명 방지

    const newTweet = {
      id: tweets.length + 1, // 고유 ID 설정
      username: username,
      picture: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 98) + 1}.jpg`,
      content: message,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTweets([newTweet, ...tweets]); // 최신 트윗이 위로 가도록
    setMessage(''); // 입력창 초기화
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" alt="Profile" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="Your username here.."
                  className="tweetForm__input--username"
                />
                <textarea
                  value={message}
                  onChange={handleChangeMsg}
                  placeholder="What's happening?"
                  className="tweetForm__input--message"
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  Total Tweets: {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <button onClick={handleButtonClick} className="tweetForm__submitButton">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
