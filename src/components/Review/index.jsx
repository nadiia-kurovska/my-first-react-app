import React from "react";
import './style.css';
import './reset.css';


    const reviewData = {
        id: 1,
        title: 'Best device ever',
        mark: 9.5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        authorName: 'User Userenko',
        authorImg:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
        pros: ['cheap', 'efficient', 'feeds my cat'],
        cons: ['bulky, cant place 2 of them in my house'],
    }
    


function Review(props) {
    const {title, mark, text,authorName, authorImg, pros, cons} = reviewData; 
    props = reviewData;
    return (
        <ul id="root" className="commentsContainer">
        <li className="commentWrapper">
          <article className="commentArticle">
            <div className="authorData">
              <div className="imageWrapper">
                <img
                  className="authorImg"
                  src={authorImg}
                  alt="Jonh Doe"
                />
              </div>
              <p className="authorName">{authorName}</p>
            </div>
            <div className="commentBody">
            <h2 className="commentTitle">{title}</h2>
            <p className="mark">{mark}</p>
            <p className="commentText">
              S{text}
            </p>
          </div>
            </article>
            </li>
            </ul>
    );
  }
  

  export default Review;
    
