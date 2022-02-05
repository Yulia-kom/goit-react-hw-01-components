import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json"

function App() {
  return (
    <div>
    <Profile
     userName={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     followers={user.stats.followers}
     views={user.stats.views}
     likes={user.stats.likes}

   />, 
    </div>
  );
}

export default App;
