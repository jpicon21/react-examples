import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";
import Counter from "./Counter";

const ButtonExamples = () => {

  const [data, setData] = useState();
  const [show, showModal] = useState(false);

  /*const postData = () => {
    const login = {login: "Jonathan Picon"};
    axios.post("https://api.github.com/users/", login).then((response) => {
      setData(response.data)
    })
  }*/

  const fetchData = () => {
    axios.get("https://api.github.com/users/hacktivist123").then((response) => {
      setData(response.data)
    })
    showModal(true);
  }

  const clearData = () => {
    showModal(false)
    setData(null)
  }

  /*useEffect(() => {
    axios.get("https://api.github.com/users/hacktivist123").then((response) => {
      setData(response)
    })
  }, [data]);*/

  return(
    <>
      <div className="buttons">
        <button onClick={fetchData}>Call API</button>
      </div>
      <Modal open={show} title="Button Example" onClose={clearData}>
        {data && 
          <div className="counter">
            <Counter />
            <p>{data.login}</p>
          </div>
        }
      </Modal>
    </>
  )
}

export default ButtonExamples;