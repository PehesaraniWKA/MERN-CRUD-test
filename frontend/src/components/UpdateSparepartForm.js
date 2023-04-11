import { useEffect, useState } from "react";
//import { useSparepartContext } from '../hooks/useSparepartContext'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateSparepartForm = () => {
  //const { dispatch } = useSparepartContext()
  const navigate = useNavigate(); // navigate to another page
  const { id } = useParams(); // get the id from the url
  const [data, setData] = useState([]); // store the spare part data in this state

  // states for the form
  const [name, setSparePartName] = useState(""); // default value is an empty string
  const [price, setSparePartPrice] = useState("");
  const [discount, setSparePartDiscount] = useState("");
  const [description, setSparePartDescription] = useState("");

  const [error, setSparePartError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // track whether data has been loaded

  useEffect(() => {
    console.log("Fetching data");
    const getSparePartById = async () => {
      const response = await axios.get(`/api/spareParts/${id}`);
      console.log(response.data);

      if (response.status === 200) {
        console.log("Data set");
        setData(response.data);
        setSparePartName(response.data.name);
        setSparePartPrice(response.data.price);
        setSparePartDiscount(response.data.discount);
        setSparePartDescription(response.data.description);
        setIsLoaded(true);
      } else {
        setSparePartError("Unable to retrieve the sparepart");
      }
    };
    if (!isLoaded) {
      getSparePartById();
    }
  }, [id, isLoaded]);

  const updateSparepart = () => {
    axios
      .patch(`/api/spareParts/${id}`, {
        name: name,
        price: price,
        discount: discount,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <Form>
      <h3>Update Sparepart</h3>
      <label>Name: </label>
      <input
        type="text"
        defaultValue={data.name}
        onChange={(e) => {
          setSparePartName(e.target.value);
        }} // set the state to the value of the input
      />
      <label>Price: </label>
      <input
        type="number"
        defaultValue={data.price}
        onChange={(e) => {
          setSparePartPrice(e.target.value);
        }}
      />
      <label>Discount: </label>
      <input
        type="number"
        defaultValue={data.discount}
        onChange={(e) => {
          setSparePartDiscount(e.target.value);
        }}
      />
      <label>Description: </label>
      <input
        type="text"
        defaultValue={data.description}
        onChange={(e) => {
          setSparePartDescription(e.target.value);
        }}
      />

      <Button variant="primary" onClick={updateSparepart}>
        Update Sparepart
      </Button>
      {error && <div className="error">{error}</div>}
      {!isLoaded && <div>Loading...</div>}
    </Form>
  );
};

export default UpdateSparepartForm;
