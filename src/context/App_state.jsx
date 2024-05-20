/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./App_Context";

const App_state = (props) => {
  const [token, setToken] = useState("");

  const [recipe, setRecipe] = useState([]);

  const [savedRecipe, setSavedRecipe] = useState([]);

  const [user, setUser] = useState([])

 const [userId, setUserId] = useState("")
 const [userRecipe, setUserRecipe] = useState([])
 const [isAuthenticated, setIsAuthenticated] = useState(false)
 const [reload, setReload] = useState(true)



  // const url = "http://localhost:3000/api";
  const url = "https://recipe-app-back.onrender.com/api";

  useEffect(() => {
    const fetchRecipe = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // console.log(api.data.recipes)
      setRecipe(api.data.recipes);
    };
    fetchRecipe();
    getSavedRecipeById();
    profile();
    recipeByUser(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ token, userId , reload]);



  useEffect(()=>{
    if(token){
      localStorage.setItem("token" , token)
    }

    const tokenFromLocalStorage = localStorage.getItem("token");

    if(tokenFromLocalStorage){
      setToken(tokenFromLocalStorage)
      setIsAuthenticated(true)
    }

  } , [token , reload])



  //Register
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return api;
  };

  // login
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // console.log("Login Data" , api)
    setToken(api.data.token);
    setIsAuthenticated(true)
    return api;
  };

  // add Recipe
  const addRecipe = async (
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
  ) => {
    const api = await axios.post(
      `${url}/add`,
      {
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
      },
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
     
    setReload(!reload)
    return api;
  };

  // get recipe by id
  const getRecipeById = async (id) => {
    const api = await axios.get(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return api;
  };

  // saved recipe by id
  const savedRecipeById = async (id) => {
    const api = await axios.post(
      `${url}/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    setReload(!reload)
    return api;
  };

  // get saved recipes
  const getSavedRecipeById = async () => {
    const api = await axios.get(`${url}/saved`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    // return api;
    // console.log("getting saved recipe", api.data.recipe);
    setSavedRecipe(api.data.recipe);
  };

 
  // profile

  const profile = async ()=>{
    const api = await axios.get(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      withCredentials: true,
    });
     
    setUserId(api.data.user._id)
    setUser(api.data.user)

    console.log(api.data.user._id)
  }
 

  // recipe by userId

  const recipeByUser = async (id) =>{
    const api = await axios.get(`${url}/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    setUserRecipe(api.data.recipe)
    // console.log("User Specific recipes" , api);
  }


  // logout
  const logout = () =>{
    localStorage.removeItem("token" , token)
    setToken("")
    setIsAuthenticated(false)
  }
    

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        addRecipe,
        recipe,
        getRecipeById,
        savedRecipeById,
        savedRecipe,
        user,
        userRecipe,
        isAuthenticated,
        logout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_state;
