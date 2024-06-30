import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <div className="relative">
      <button className="flex items-center gap-x-1" onClick={() => setOpen(!open)}>
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="w-8 h-8 rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-lg text-[#344648]" />
      </button>
      {open && (
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-48 bg-[#fbe0c3] rounded-md shadow-lg z-10 border-[1px] border-[#344648]"
        >
          <Link
            to="/dashboard/my-profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-x-2 px-4 py-2 text-sm text-[#344648] hover:bg-white hover:text-[#344648]"
          >
            <VscDashboard className="text-lg" />
            Dashboard
          </Link>
          <button
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-2 px-4 py-2 text-sm text-[#344648] hover:bg-white hover:text-[#344648]"
          >
            <VscSignOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

