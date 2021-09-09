import React,{useState} from 'react'
import { upPost } from '../../redux/postAction';
import { useDispatch,useSelector } from 'react-redux';
const Editpost = ({postdata}) => {

    const { login } = useSelector((state) => state);
    const [content,setContent] = useState("")
    console.log(content)
    const dispatch = useDispatch()
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(({email,password}))
        upPost({content},(postdata._id),login.userData.token,dispatch)
    };
    return (
        <div className='bg-green-500 h-3/6 w-2/6 mx-auto text-center' >
            {/* <h1>{postdata._id}</h1>
            <h1>hello world</h1> */}
            <form onSubmit={handleSubmit} >
                <div className ="">
            <h1>update content</h1>
            <textarea
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2 h-36"
                  type="text"
                  defaultValue={postdata.content}
                // value="kagjklgjagkajg"
                  placeholder="Your's content..."
                  onChange={(e) => setContent(e.target.value)}
                />
                <div>
                <button className="bg-gray-300 p-2 m-2 rounded-md" type="submit">update</button>
                </div>
                </div>
                </form>
        </div>
    )
}

export default Editpost
