import React, { useEffect, useState } from "react";
import data from "./Products.json";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import './App.css'

const App = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setfilter] = useState(null);
  const [len, setlen] = useState(data.jobs.length);
  // const [inputchecked, setinputchecked] = useState({})
  const [inputchecked, setinputchecked] = useState(null);
  const [inputchecked1, setinputchecked1] = useState(null);
  const [inputchecked2, setinputchecked2] = useState(null);
  const [inputchecked3, setinputchecked3] = useState(null);




  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const renderData = data.jobs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  

  
  
  
  const handleCheck = (event) => {
    setinputchecked(event.value);
  };
  const handleCheck1 = (event) => {
    setinputchecked1(event.value);
  };
  const handleCheck2 = (event) => {
    setinputchecked2(event.value);
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
  const options2 = [
    { value: "", label: "Select" },
    { value: "New Delhi", label: "New Delhi" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Pune", label: "Pune" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
  ];
  const options3 = [
    { value: "Fresher", label: "Fresher" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];

  useEffect(() => {
    const text0 = options[0].value;
    const text1 = options[1].value;
    const text2 = options[2].value;
    const text3 = options[3].value;
    const text4 = options[4].value;

    const text11 = options2[1].value;
    const text12 = options2[2].value;
    const text13 = options2[3].value;
    const text14 = options2[4].value;
    const text15 = options2[5].value;
    const text16 = options2[6].value;
    const text17 = options2[7].value;
    const text00 = options2[0].value;
    const text000 = options3[0].value;
    const text111 = options3[1].value;
    const text122 = options3[2].value;
    const text133 = options3[3].value;
    const text144 = options3[4].value;
    const text155 = options3[5].value;

    const filteredData = data.jobs.filter((job) => {
      if (inputchecked) {
        return (
          (inputchecked === text0
            ? job.name.toLowerCase().includes(text0.toLowerCase())
            : "") ||
          (inputchecked === text1
            ? job.name.toLowerCase().includes(text1.toLowerCase())
            : "") ||
          (inputchecked === text2
            ? job.name.toLowerCase().includes(text2.toLowerCase())
            : "") ||
          (inputchecked === text3
            ? job.name.toLowerCase().includes(text3.toLowerCase())
            : "") ||
          (inputchecked === text4
            ? job.name.toLowerCase().includes(text4.toLowerCase())
            : "") ||
          (inputchecked === text5
            ? job.name.toLowerCase().includes(text5.toLowerCase())
            : "") ||
          (inputchecked === text6
            ? job.name.toLowerCase().includes(text6.toLowerCase())
            : "")
        );
      } else {
        return job;
      }
    });

    const filteredData1 = data.jobs.filter((job) => {
      if (inputchecked1) {
        return (
          (inputchecked1 === text00
            ? job.location.toLowerCase().includes(text00.toLowerCase())
            : "") ||
          (inputchecked1 === text11
            ? job.location.toLowerCase().includes(text11.toLowerCase())
            : "") ||
          (inputchecked1 === text12
            ? job.location.toLowerCase().includes(text12.toLowerCase())
            : "") ||
          (inputchecked1 === text13
            ? job.location.toLowerCase().includes(text13.toLowerCase())
            : "") ||
          (inputchecked1 === text14
            ? job.location.toLowerCase().includes(text14.toLowerCase())
            : "") ||
          (inputchecked1 === text15
            ? job.location.toLowerCase().includes(text15.toLowerCase())
            : "") ||
          (inputchecked1 === text16
            ? job.location.toLowerCase().includes(text16.toLowerCase())
            : "") ||
          (inputchecked1 === text17
            ? job.location.toLowerCase().includes(text17.toLowerCase())
            : "")
        );
      } else {
        return job;
      }
    });

    const filteredData2 = data.jobs.filter((job) => {
      if (inputchecked2) {
        return (
          (inputchecked2 === text000 ? job["min-experience"] >= 0 : "") ||
          (inputchecked2 === text111 ? job["min-experience"] >= 1 : "") ||
          (inputchecked2 === text122 ? job["min-experience"] >= 2 : "") ||
          (inputchecked2 === text133 ? job["min-experience"] >= 3 : "") ||
          (inputchecked2 === text144 ? job["min-experience"] >= 4 : "") ||
          (inputchecked2 === text155 ? job["min-experience"] >= 5 : "")
        );
      } else {
        return job;
      }
    });
    const filteredData3 = data.jobs.filter((job) => {
      if (inputchecked3) {
        return (
          (inputchecked3 === 0 ? job["price"] >= 10 : "") ||
          (inputchecked3 === 1 ? job["price"] >= 30 : "") ||
          (inputchecked3 === 2 ? job["price"] >= 70 : "") ||
          (inputchecked3 === 4 ? job["price"] >= 90 : "") ||
          (inputchecked3 === 3 ? job["price"] >= 100 : "") ||
          (inputchecked3 === 5 ? job["price"] >= 120 : "")
        );
      } else {
        return job;
      }
    });
    const combinedResult = filteredData.filter((item) => filteredData1.includes(item) && filteredData2.includes(item) && filteredData3.includes(item));



    if (
      (inputchecked === null || inputchecked === text0) &&
      (inputchecked1 === null || inputchecked1 === text00) &&
      (inputchecked2 === null || inputchecked2 === text000) &&
      (inputchecked3 === null || inputchecked3 === 0)
    ) {
      setCheckCheck(false);
      setlen(data.jobs.length);
      setCurrentPage(currentPage);
      console.log(1)
    } else if(((inputchecked !== text0) ||
    (inputchecked1 !== text00) ||
    (inputchecked2 !== text000) ||
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

  }, [inputchecked,inputchecked1, inputchecked2,inputchecked3]);





 

  return (
    <div id="jobsDiv" style={{"minHeight":"50vw"}}>
    <div id="mainJobDir" className="flex justify-center">
      <div className="col-2 flex justify-center items-start mt-24">
        <div className="">
          <h5 className="text-center font-bold">Filter</h5>
          <div className="mx-4">
            <h6>Profile</h6>
            <Select
              className="jobSelectoption"
              options={options}
              placeholder="e.g. Web development"
              onChange={handleCheck}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4">
            <h6>Location</h6>
            <Select
              className="jobSelectoption"
              options={options2}
              placeholder="e.g. Delhi"
              onChange={handleCheck1}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4">
            <h6>Min Experience</h6>
            <Select
              className="jobSelectoption"
              options={options3}
              placeholder="Select Year of Experience"
              onChange={handleCheck2}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4 mt-3">
            <h6 className="my-3">CTC</h6>
            <form >
  <div class="form-group">
  <h6><label for="formControlRange">Select minimum Price</label></h6>
    <input type="range" class="form-control-range"  onChange={handleCheck3} defaultValue={0} min="0" max="5" step="1" id="formControlRange"/>
    <div className="flex justify-between">
      <span>10</span>
      <span>30</span>
      <span>70</span>
      <span>90</span>
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
          About {len} <span className="sp"> Job </span>results
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
