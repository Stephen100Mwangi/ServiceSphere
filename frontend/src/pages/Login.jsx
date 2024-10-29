import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import toast, {Toaster} from 'react-hot-toast'
import Loading from '../components/Loading';

const Login = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required")
    }

    try {
      setLoading(true)
      const response = await fetch("http://localhost:4500/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      })

      const data = await response.json();

      if(!response.ok){
        toast.error(data.message || "Error logging in user")
      }

      toast.success("User login successful")
      setTimeout(() => {
        navigate('/hero')        
      }, 1500);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to login Please try again")
      return;    
      
    }finally{
      setLoading(false)
    }
    
  }

  return (
    <div className="flex justify-center items-center h-screen -space-x-5">
      <Toaster></Toaster>
      <img src="./welcome.svg" alt="" className='h-auto scale-90' />
      <form className='py-9 px-4 flex flex-col h-auto gap-y-6 bg-gray rounded-lg'>
        <div className="flex flex-col p-2.5 space-y-1.5">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="py-2 pl-3 pr-4"
            type="email"
            name=""
            id=""
            placeholder="someone@gmail.com"
            value={email}
            onChange={e => setEmail (e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2.5 space-y-1.5">
          <label htmlFor="confirmPassword">Password</label>
          <input
            className="py-2 pl-3 pr-4"
            type="password"
            name=""
            id=""
            placeholder="********"
            value={password}
            onChange={e => setPassword (e.target.value)}
          />
        </div>
        <div className="flex justify-between w-full gap-x-4 items-center px-4">
          <p>New Here?</p>
          <Link to="/register" className="text-card">Create an account</Link>
        </div>
       
        <Link to="/login" className="text-red-500 mx-auto">Forgot Password</Link>

        {
          loading && <Loading text={"Signing in user Processing...."}></Loading>
        }

        {
          !loading &&  <Button clickFunction={loginUser} text={"Login"}></Button>
        }


       

      </form>
    </div>
  );
};

export default Login;
