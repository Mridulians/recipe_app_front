import { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();

  const { addRecipe } = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    inst: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qnt1: "",
    qnt2: "",
    qnt3: "",
    qnt4: "",
    imgUrl: "",
  });

  const addRecipeHandler = async (e) => {
    e.preventDefault();


    const {
      title,
      inst,
      ing1,
      ing2,
      ing3,
      ing4,
      qnt1,
      qnt2,
      qnt3,
      qnt4,
      imgUrl,
    } = formData;

    const result = await addRecipe(
      title,
      inst,
      ing1,
      ing2,
      ing3,
      ing4,
      qnt1,
      qnt2,
      qnt3,
      qnt4,
      imgUrl
    );

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

    // console.log(result.data);
    
    setTimeout(()=>{
        navigate('/')
    } , 1500)

  

    // console.log(result)
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ToastContainer />
      <div
        className="form container my-5"
      >
        <h2 className="text-center">Add Recipe</h2>

        <form
          className="form_inner my-3"
          onSubmit={addRecipeHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              value={formData.title}
              onChange={onChangeHandler}
              required
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instructions
            </label>
            <input
              value={formData.inst}
              onChange={onChangeHandler}
              required
              name="inst"
              type="text"
              className="form-control"
              id="exampleInputEmail13"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ing1
            </label>
            <input
              value={formData.ing1}
              onChange={onChangeHandler}
              name="ing1"
              type="text"
              className="form-control"
              id="exampleInputPassword14"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ing2
            </label>
            <input
              value={formData.ing2}
              onChange={onChangeHandler}
              name="ing2"
              type="text"
              className="form-control"
              id="exampleInputPassword15"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ing3
            </label>
            <input
              value={formData.ing3}
              onChange={onChangeHandler}
              name="ing3"
              type="text"
              className="form-control"
              id="exampleInputPassword16"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ing4
            </label>
            <input
              value={formData.ing4}
              onChange={onChangeHandler}
              name="ing4"
              type="text"
              className="form-control"
              id="exampleInputPassword17"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Qty1
            </label>
            <input
              value={formData.qnt1}
              onChange={onChangeHandler}
              name="qnt1"
              type="text"
              className="form-control"
              id="exampleInputPassword18"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Qty2
            </label>
            <input
              value={formData.qnt2}
              onChange={onChangeHandler}
              name="qnt2"
              type="text"
              className="form-control"
              id="exampleInputPassword19"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Qty3
            </label>
            <input
              value={formData.qnt3}
              onChange={onChangeHandler}
              name="qnt3"
              type="text"
              className="form-control"
              id="exampleInputPassword20"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Qty4
            </label>
            <input
              value={formData.qnt4}
              onChange={onChangeHandler}
              name="qnt4"
              type="text"
              className="form-control"
              id="exampleInputPassword21"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ImgUrl
            </label>
            <input
              value={formData.imgUrl || ''}
              onChange={onChangeHandler}
              name="imgUrl"
              type="text"
              className="form-control"
              id="exampleInputPassword22"
            />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Add
            </button>
          </div>
        </form>

      </div>
    </>
  );
};

export default AddRecipe;
