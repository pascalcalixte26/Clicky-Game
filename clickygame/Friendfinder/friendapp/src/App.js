import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Banner from "./components/Banner";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0    
  };

  
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.sort(function() {
      return 0.5 - Math.random()
    }) ;

   handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        
       
        <Title>     

          <Banner>Clicky Game&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="rest">Click an image to begin!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score: {this.state.count} | Top Score: 0</span></Banner>     
          
          <p>Clicky Game!</p>

          <p class="click">Click on an image to earn points, but don't click on any more than once!</p>
          
        </Title>
        
        
        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
