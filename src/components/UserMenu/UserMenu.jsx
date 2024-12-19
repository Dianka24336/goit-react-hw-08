import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"

const UserMenu = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default UserMenu