import React from "react";
import './style.css';
import './reset.css';




    class Review extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {

        const {
          reviewData: { title, mark, text, authorName, authorImg, pros, cons },
        } = this.props;
    
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
                {text}
              </p>
            </div>
              </article>
              </li>
              </ul>
        );
      }
    }

// function Review(props) {
//     const {title, mark, text,authorName, authorImg, pros, cons} = reviewData; 
//     props = reviewData;
//     return (
        // <ul id="root" className="commentsContainer">
        // <li className="commentWrapper">
        //   <article className="commentArticle">
        //     <div className="authorData">
        //       <div className="imageWrapper">
        //         <img
        //           className="authorImg"
        //           src={authorImg}
        //           alt="Jonh Doe"
        //         />
        //       </div>
        //       <p className="authorName">{authorName}</p>
        //     </div>
        //     <div className="commentBody">
        //     <h2 className="commentTitle">{title}</h2>
        //     <p className="mark">{mark}</p>
        //     <p className="commentText">
        //       S{text}
        //     </p>
        //   </div>
        //     </article>
        //     </li>
        //     </ul>
//     );
//   }
  

  export default Review;
    
