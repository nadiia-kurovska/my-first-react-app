import React from "react";


class ReviewDashboard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        messages: structuredClone(responseData),
        isDirectSort: true,
      };
    }
  
    sortReviews = () => {
      const { reviews, isDirectSort } = this.state;
    }
  }

  export default ReviewDashboard;
