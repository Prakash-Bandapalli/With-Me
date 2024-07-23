import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputField from "./Inputfield";
import Notes from "./Notes";
const App = () => {
  const [store, setStore] = useState([]);
  const StoreContent = (heading, content, event) => {
    if (!heading && !content) return;

    setStore((prevValue) => {
      return [...prevValue, { title: heading, info: content }];
    });
  };
  const delItems = (index, event) => {
    // const newItems = store.filter((notes,indexVal)=>{
    //   return indexVal !== index ;
    // });
    // setStore(newItems);
    setStore((prevNotes) => {
      return prevNotes.filter((notes, indexVal) => {
        return indexVal !== index;
      });
    });
  };
  return (
    <div>
      <Header />
      <InputField onAdd={StoreContent} />
      {store.map((element, index) => {
        return (
          <div key={index}>
            <Notes
              title={element.title}
              info={element.info}
              index={index}
              onDelete={delItems}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};
export default App;
