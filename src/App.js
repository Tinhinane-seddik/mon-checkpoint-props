
import './App.css';
import Profile from './profile/Profile_component'
import ProfileImg from "./profile/ProfileImg.jpg";

function App() {
  const handleName = (name) => {

    alert(`Name of the profile user is ${name}`)
  }
  return (
    
       <div className="App">
      {/* Props to profileComponent */}
      <Profile
        fullName="Tinhinane seddik"
        profession="software developer"
        bio="A developer, student at university, a lover of books and new discovery,always ready and motivated for challenges."
        handleName={handleName}
      >
        {/* Pass as Children Props to profileComponent */}
        <img src={ProfileImg} alt="img" />
      </Profile>
    </div >
      
   
  );
}

export default App;
