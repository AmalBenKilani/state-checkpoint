import React from "react";
import myImage from "./pic4.png";

class App extends React.Component {
  state = {
    person: {
      fullName: "Amal Ben Kilani",
      bio: "xxxxx",
      imgSrc: myImage,
      profession: "Engineer"
    },
    show: false,
    time: 0,
    intervalId: 0
  }
  showProfile = () => {
    this.setState({
      ...this.state.person,
      show: !this.state.show,
    })

    if (this.state.intervalId) {
      clearInterval(this.state.intervalId)
      this.setState((prevState) => {
        return {
            intervalId: 0,

        }
      })
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
        
          time: prevState.time + 1
        }

      })
    }, 1000);
    
    this.setState((prevState) => {
      return {
      
        intervalId: newIntervalId,
      }
    })
  }

  render() {
    return (
      <>
        {this.state.show && (<>
          <h1>{this.state.person.fullName}</h1>
          <p>{this.state.person.bio}</p>
          <img src={this.state.person.imgSrc} alt="Me" />
          <h2>{this.state.person.profession}</h2>
          <br></br>
          <section>this compenent has been rendered to the screen for {this.state.time} seconds</section>
        </>)}

        <button onClick={this.showProfile} >{this.state.intervalId!==0 ? "Hide Profile" : "Show Profile"}</button>
        
      </>
    );
  }
}

export default App;
