import { Album, BackpackIcon, BookCheck, Crown, Home} from "lucide-react";
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";
import { useDispatch } from 'react-redux';
import logo from '../../images/hd-logo.png';
import { removeUser } from "../../features/reducers/authSlice";
import { axiosintance } from "../../config/axiosintance";
import { toast } from "react-toastify";


// ===================
// Nav link 
// ===================
const navlink = [
  { label: "Dashboard", icon: Home, to: "/home" },
  {label:"Special Offer", icon:Crown, to:"/home/special-offer"},
  { label: "My Courses", icon: BookCheck, to: "/home/my-courses" },
  { label: "My Internship", icon: Album, to: "/home/my-internship" },
  { label: "Admin Dashboard", icon: BackpackIcon, to: "/home/admin-dashoard" },
]

const NavLink = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // ============================
  // Logout handler for logout
  // =============================
  const logouthandler = async () => {
    try {
      const response = await axiosintance.get("/api/auth/logout");
      toast.success("Logout Successfully", {
        style: {
          color: "#FFFFFF",
          background: "#0F172B"
        }
      });
      navigate("/")
      if (response) {
        console.log("user is logout")
        dispatch(removeUser());
      }
    } catch (error) {
      throw error.response?.data || error
    }
  }

  return (
    <>
      {/* Navigation Section */}
      <section className='h-full w-full p-10 flex flex-col items-center space-y-5 bg-slate-900 ' >

        {/* company logo */}
        <div className='h-[70px] w-[200px] mb-5' >
          <img src={logo} alt="company logo" />
        </div>

        {/* Nav map */}
        <div className='w-full flex flex-col items-start justify-center gap-10 text-xl font-bold' >
          {navlink.map(({ label, icon: Icon, to }, Idx) => {
            return (
              <RouterNavLink
                key={label}
                to={to}
              >
                <div className='flex gap-2 hover:scale-[1.1] transition ' >
                  <Icon className="text-[#424242] " />
                  <span className="text-[#05AFF1] " >{label}</span>
                </div>
              </RouterNavLink>
            )
          })}
        </div>

        {/* logout button */}
        <div className="text-center mt-5" >
          <button onClick={logouthandler} className='text-[#424242] font-bold text-2xl hover:scale-[1.1]' >Logout</button>
        </div>
      </section>
    </>
  )
}

export default NavLink;