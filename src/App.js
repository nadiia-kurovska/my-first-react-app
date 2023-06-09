import React from "react";
import Greeting from './components/Greeting';
import Header from './components/Header';
import Review from './components/Review';
import ReviewDashboard from './components/Review Dashboard'; 


// const data = {
//   id: 1,
//   title: 'Best device ever',
//   mark: 9.5,
//   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   authorName: 'User Userenko',
//   authorImg:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
//   pros: ['cheap', 'efficient', 'feeds my cat'],
//   cons: ['bulky, cant place 2 of them in my house'],
// }


const responseData = [
  {
    id: 1,
    title: 'Best device ever',
    mark: 9.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorName: 'User Userenko',
    authorImg:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
    pros: ['cheap', 'efficient', 'feeds my cat'],
    cons: ['bulky, cant place 2 of them in my house'],
  },
  {
    id: 2,
    title: 'Worst device ever',
    mark: 1,
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    authorName: 'Null Undefinovich',
    authorImg:
      'https://img.freepik.com/premium-photo/young-ecuadorian-man-isolated-white-background-keeping-arms-crossed-frontal-position_1368-270514.jpg',
    pros: [
      'expensive',
      'inefficient',
      'my cat was so scared of that thing that he run off and wsa hiding for 4 days',
    ],
    cons: ['takes all space in room'],
  },
  {
    id: 3,
    title: 'Another mediocre device',
    mark: 5,
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    authorName: 'Jane Doe',
    authorImg:
      'https://media.istockphoto.com/id/1388899176/video/4k-video-footage-of-various-people-against-an-urban-background.jpg?b=1&s=640x640&k=20&c=8LhrexpSvHCyM1cH0c-tbt1f9pmHLUzmNxQ-sN04Glw=',
    pros: [
      'Lorem',
      'Ipsum',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor',
      'incididunt ut labore et dolore magna aliqua',
    ],
    cons: [
      'because it is pleasure, but because those who do not know how to pursue',
      'labore et dolore magnam aliquam quaerat voluptatem',
    ],
  },
];



class App extends React.Component {
  render(){

    const responsesArray = responseData.map((responseData, index, arr) => {
      return (
      <Review
        id={responseData.id}
        key={responseData.id}
        title={responseData.title}
        mark={responseData.mark}
        text={responseData.text}
        authorName={responseData.authorName}
        authorImg={responseData.authorImg}/>
      );
    });

    return <>{responsesArray}</>;
    
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }