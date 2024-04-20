import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  //console.log(currentUser);
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h3 className="font-semibold">Auth App</h3>
        </Link>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="Profile" className='h-8 w-8 rounded-full object-cover'/>
            ):(
              <li>Sign In</li>
            )}
           </Link>
          {/* <Link to="/sign-up">
            <li>Sign Up</li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}
