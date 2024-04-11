// import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../user/userSlice"; //for redux
import {useDispatch, useSelector} from 'react-redux'; //for redux

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user); //for redux

  /* Adding state individually of the form:
  const [username,setusername] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState(''); */
  const navigate = useNavigate();
  const dispatch = useDispatch(); //for redux
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    //console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());//for redux
      // setLoading(true);
      // setError(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);
      
      //setLoading(false);
      if (data.success === false) {
        //setError(true);
        dispatch(signInFailure(data));//for redux
        return;
      }
      dispatch(signInSuccess(data));//for redux
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(true);
      dispatch(signInFailure(error));//for redux
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading}
          className="bg-slate-900 text-white p-3 rounded-lg uppercase hover:opacity-95 
        disabled:opacity-80"
        >
           {loading ? 'In Progress' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-600">Sign Up</span>
        </Link>
      </div>
      {/* Following line changed post redux */}
      <p className='text-red-700 mt-5'>{error ? error.message || 'Something went wrong!':""}</p>
    </div>
  );
}
