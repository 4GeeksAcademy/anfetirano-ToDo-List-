import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

//include images into your bundle
import fondo from "../../img/fondo.jpg";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <div className="background">
      <img src={fondo} alt="fondo" className="image" />
      <div className="content">
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList} />
      </div>
    </div>
  );
};
export default Home;
<div>
  <img src="" alt="" />
  <div></div>
</div>;
