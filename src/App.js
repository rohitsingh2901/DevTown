import React, { useEffect, useState } from "react";
import data from "./Products.json";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import './App.css'

const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setfilter] = useState(null);
  const [len, setlen] = useState(data.products.length);
  const [inputchecked, setinputchecked] = useState(null);
  const [inputchecked3, setinputchecked3] = useState(null);




  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const renderData = data.products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  

  
  
  
  const handleCheck = (event) => {
    setinputchecked(event.value);
  };
  const handleCheck3 = (event) => {
    console.log(event)
    setinputchecked3(parseInt(event.target.value));
  };

  const [CheckCheck, setCheckCheck] = useState(false);

  const options = [
     { value: "", label: "Select" },
    { value: "A", label: "Category A" },
    { value: "B", label: "Category B" },
    { value: "C", label: "Category C" },
    { value: "D", label: "Category D" },    
  ];

  useEffect(() => {
    const text0 = options[0].value;
    const text1 = options[1].value;
    const text2 = options[2].value;
    const text3 = options[3].value;
    const text4 = options[4].value;




    const filteredData = data.products.filter((product) => {
      if (inputchecked) {
        return (
          (inputchecked === text0
            ? product.category.toLowerCase().includes(text0.toLowerCase())
            : "") ||
          (inputchecked === text1
            ? product.category.toLowerCase().includes(text1.toLowerCase())
            : "") ||
          (inputchecked === text2
            ? product.category.toLowerCase().includes(text2.toLowerCase())
            : "") ||
          (inputchecked === text3
            ? product.category.toLowerCase().includes(text3.toLowerCase())
            : "") ||
          (inputchecked === text4
            ? product.category.toLowerCase().includes(text4.toLowerCase())
            : "")
        );
      } else {
        return product;
      }
    });



    const filteredData3 = data.products.filter((product) => {
      if (inputchecked3) {
        return (
          (inputchecked3 === 0 ? product["price"] >= 10 : "") ||
          (inputchecked3 === 1 ? product["price"] >= 30 : "") ||
          (inputchecked3 === 2 ? product["price"] >= 70 : "") ||
          (inputchecked3 === 3 ? product["price"] >= 100 : "") ||
          (inputchecked3 === 4 ? product["price"] >= 120 : "")
        );
      } else {
        return product;
      }
    });
    const combinedResult = filteredData.filter((item) =>  filteredData3.includes(item));



    if (
      (inputchecked === null || inputchecked === text0) &&
      (inputchecked3 === null || inputchecked3 === 0)
    ) {
      setCheckCheck(false);
      setlen(data.products.length);
      setCurrentPage(currentPage);
      console.log(1)
    } else if(((inputchecked !== text0) ||
    (inputchecked3 !== 0)) && currentPage!==0) {
      setCheckCheck(true);
      const renderData2 = combinedResult.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setlen(combinedResult.length);
      setfilter(renderData2);
      console.log(2)
      setCurrentPage(currentPage);
      
      const l = document.getElementsByClassName('pagination__page')[0].firstElementChild
      l.click()
    
    }
    else if(len<=5){
      setCheckCheck(true);
      const renderData2 = combinedResult.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setlen(combinedResult.length);
      setfilter(renderData2);
      console.log(3)
      setCurrentPage(0)
    }
    else{
      setCheckCheck(true);
      const renderData2 = combinedResult.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setlen(combinedResult.length);
      setfilter(renderData2);
      console.log(4)
      setCurrentPage(currentPage)
    }
// eslint-disable-next-line 
  }, [inputchecked,inputchecked3,currentPage,len]);





 

  return (
    <div id="productsDiv" style={{"minHeight":"50vw"}}>
    <div id="mainproductDir" className="flex justify-center">
      <div className="col-4 flex justify-center items-start mt-24">
        <div className="w-100" style={{minWidth:"300px"}}>
          <h5 className="text-center font-bold">Filter</h5>
          <div className="mx-4">
            <h6>Profile</h6>
            <Select
              className="productselectoption"
              options={options}
              placeholder="Select Category"
              onChange={handleCheck}
              defaultValue={inputchecked}
            />
          </div>
    


          <div className="mx-4 mt-3">
            <h6 className="my-3">CTC</h6>
            <form >
  <div class="form-group">
  <h6><label for="formControlRange">Select minimum Price</label></h6>
    <input type="range" class="form-control-range"  onChange={handleCheck3} defaultValue={0} min="0" max="4" step="1" id="formControlRange"/>
    <div className="flex justify-between">
      <span>10</span>
      <span>30</span>
      <span>70</span>
      <span>100</span>
      <span>120+</span>
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
      <div className="mt-16 col-8">
        <h1 className="text-center font-extrabold">
          About {len} <span className="sp"> product </span>results
        </h1>
        {!CheckCheck
          ? renderData.map((element) => (
              <div key={element.id} className="flex justify-center mt-8">
                <div class="card mb-3" id="mainCard">
                <div className="flex justify-center">
                       <img
                        style={{
                          width: "50%",
                          height: "200px",
                          marginTop: "5px",
                        }}
                        src={element.image}
                        alt="Logo"
                      />
                      </div>
                  <div class="row no-gutters">
                    <div class="col-md-10">
                    
                      <div class="card-body">
                       <h5>{element.title}</h5>
                       <p>{element.description}</p>
                       <p className="font-bold">₹ {element.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : filter.map((element) => (
            <div key={element.id} className="flex justify-center mt-8">
            <div class="card mb-3" id="mainCard">
            <div className="flex justify-center">
                   <img
                    style={{
                      width: "50%",
                      height: "200px",
                      marginTop: "5px",
                    }}
                    src={element.image}
                    alt="Logo"
                  />
                  </div>
              <div class="row no-gutters">
                <div class="col-md-10">
                
                  <div class="card-body">
                   <h5>{element.title}</h5>
                   <p>{element.description}</p>
                   <p className="font-bold">₹ {element.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))}

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(len / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousClassName={len === 0 ? "d-none" : "pagination__button  mx-4"}
          nextClassName={len === 0 ? "d-none" : "pagination__button mx-4"}
          disabledClassName={"pagination__button--disabled"}
          pageClassName={"pagination__page"}
          pageLinkClassName={"pagination__link"}
          activeLinkClassName={"pagination__link--active"}
          forcePage={currentPage}
        />
      </div>
    </div>
    </div>
  );
};

export default App;
