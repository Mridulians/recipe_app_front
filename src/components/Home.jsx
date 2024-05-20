import { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
 const navigate = useNavigate();


  const { recipe , savedRecipeById } = useContext(AppContext);



  // Check if recipe is an array before mapping
  if (!Array.isArray(recipe)) {
    console.error("Recipe is not an array:", recipe);
    return null;
  }


  const saved = async (id) =>{
  const result = await savedRecipeById(id);


  
  toast.success(result.data.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
  }

  return (
    <>
     <ToastContainer />
      <div className="card_container">
        {/* <div className=""> */}
        {recipe.map((data) => (
          <div className="card" key={data._id}>
            {/* <div className=""> */}
            <div className="card_img">
              <img src={data.imgUrl} className="" alt="..." />
            </div>
            <div className="card_body">
              <h5 className="card_title">{data.title}</h5>

              <div className="btns">
                <button className="btn btn-primary" onClick={()=> saved(data._id)}>Save</button>
                <button className="btn btn-warning" onClick={()=> navigate(`/${data._id}`)}>View More</button>
              </div>
            </div>
          </div>
          // </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
