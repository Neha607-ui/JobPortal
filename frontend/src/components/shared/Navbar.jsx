import React from 'react';
// import { Popover } from '@headlessui/react';  // Only import Popover
import { Button } from '../ui/button';  // Corrected import path
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';  // Importing icons correctly
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  // Import useSelector
import axios from 'axios';  // Import axios
import { setUser } from "../../redux/authSlice"; // Import the setUser action
 import { Popover,PopoverContent,PopoverTrigger } from "../ui/popover"
// import PopoverTrigger from ""



const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get('${USER_API_POINT}/logout', { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            {
              user && user.role === 'recruiter' ?(
            <>
              <li><link to="/admin/companies">Companies</link></li>
              <li><link to="/admin/jobs">Jobs</link></li>
            </>
            ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/browse">Browse</Link></li>
            </>
            )
          }
          </ul>
          {
            !user ? (
              <div className='flex item-center gap-2'>
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className='flex gap-2 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user.fullName}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>  {/* Corrected */}
                    </div>
                  </div>
                  <div className='flex flex-col my-2 text-gray-600'>
                    {
                      user && user.role === 'student' && (
                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                    </div>

                      )
                    }
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
