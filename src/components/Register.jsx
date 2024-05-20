import { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const result = await register(name, email, password);

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

    console.log(result.data);

    if(result.data.message !== 'User Already Exist'){
      
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    }
  }

  return (
    <>
      <ToastContainer />
      <div
        className="form container my-5"
      >
        <h2 className="text-center">Register</h2>

        <form
          className="form_inner my-3"
          onSubmit={registerHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="form-control"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="form-control"
              id="exampleInputEmail13"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="form-control"
              id="exampleInputPassword14"
            />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
