import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useSelector, useDispatch } from "react-redux";
import { dePost } from '../../redux/postAction';
const Dropde = ({postInfo}) => {
    const { login } = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleDeletePost = () => {
        dispatch(dePost((postInfo._id),login.userData.token))}
    return (
        <div>
             <div className="absolute top-0 right-1">
              <Dropdown className="mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <div className=" text-3xl  rounded-full hover:text-blue-500 hover:bg-gray-50  hover:bg-opacity-25">
                    <ExpandMoreRoundedIcon fontSize="large" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className=" text-md  text-left text-green-500  bg-gray-50 rounded-2xl p-2">
                  <div>
                    <Dropdown.Item>save</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>update</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item 
                    onClick={handleDeletePost}>
                      delete
                    </Dropdown.Item>
                    </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
        </div>
    )
}

export default Dropde
