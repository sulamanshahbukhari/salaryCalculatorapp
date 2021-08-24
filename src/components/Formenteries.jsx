import React, { useState } from 'react';
const Formenteries =()=>{
    // usetate hook for total number of days
    const [numofdays,setnumofdays]=useState(0);
    const getnumofdays=(event)=>{
        const newnumofdays= event.target.value;
        if(newnumofdays>=0)
        {
            setnumofdays(newnumofdays);
            document.querySelector('.error').innerHTML='';
        }
        else{
            document.querySelector('.error').innerHTML='wrong entery';
        }
    }

    // usestate hook for number of public holidays
    const [numOfpublicholidays,setnumOfpublicholidays]=useState(0);
    const getNumofPublicholidays=(event)=>{
        const newpublicholidays=event.target.value;
        if(newpublicholidays>=0)
        { 
            setnumOfpublicholidays(newpublicholidays);
            document.querySelector('.error2').innerHTML='';
        }
        else{
            document.querySelector('.error2').innerHTML='wrong entery';
        }
       
    }

      // usestate hook for number of absents
      const [numofAbsents,setnumofAbsents]=useState(0);
      const getnumofAbsents=(event)=>{
          const newnumofAbsents=event.target.value;
          if(newnumofAbsents>=0)
          {
            setnumofAbsents(newnumofAbsents);
              document.querySelector('.error3').innerHTML='';
          }
          else{
              document.querySelector('.error3').innerHTML='wrong entery';
          }
      }

      // usestate hook for number of late arrivals
      const [numofLateArivals,setnumofLateArivals]=useState(0);
      const getnumofLateArivals=(event)=>{
          const newnumofLateArivals=event.target.value;
          if(newnumofLateArivals>=0)
          { 
            setnumofLateArivals(newnumofLateArivals);
              document.querySelector('.error4').innerHTML='';
          }
          else{
              document.querySelector('.error4').innerHTML='wrong entery';
          }
          
      }
      
      // usestate hook for base salary
      const [baseSalary,setbaseSalary]=useState(0);
         const getbaseSalary=(event)=>{
          const newbaseSalary=event.target.value;
          if(newbaseSalary>=0)
          { 
            setbaseSalary(newbaseSalary);
              document.querySelector('.error5').innerHTML='';
          }
          else{
              document.querySelector('.error5').innerHTML='wrong entery';
          }
         
      }

//calculate penalty days

const numberoflatearrivals=()=>{
     const numberoflatearrivalspenalty=Math.round(numofLateArivals/3);
      const penalty=(numberoflatearrivalspenalty/2).toFixed(1);//3days = 0.5 day);
     return penalty;
 }
 
 
//  calculate number of days worked
const numberofdaysworked=()=>{   
    const absentsandarrivals= parseFloat(numofAbsents)  +  parseFloat( numberoflatearrivals());
    const TotalNumberofDaysWorked=numofdays-absentsandarrivals;
    return TotalNumberofDaysWorked;
}
        // calculate number of payable days
    const NumberOfPayableDays=()=>{
const numberofpayabledays=parseFloat(numberofdaysworked()) + parseFloat(numOfpublicholidays) ;
 return numberofpayabledays;
        }
    //    calculate payable salary
    const PayableSalary=()=>{
        const payablesalary= parseFloat(NumberOfPayableDays()) *  parseFloat(baseSalary / numofdays) ; 
     return (payablesalary).toFixed(2);
    }
    
const handleFormsubmit=(event)=>{
    event.preventDefault();
}
              
return(
    <>
    <h1>Salary calculation form</h1>
    <div className="container">
    <form action= "" onSubmit={handleFormsubmit} >
        <div style={{margin:'20px'}}>
        <label htmlFor="TotalNumberofDays">Total Number of Days</label> <br />
        <input type="number" min="0"  name='TotalNumberofDays' value={numofdays} onChange={getnumofdays} id='' placeholder='Enter Total Number of Days'/>
        <p className='error' style={{color:'red'}}></p>
        </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="NumberOfPublicholidays"> Number of Public Holidays</label> <br />
           <input type="number" min="0" name='NumberOfPublicholidays' value={numOfpublicholidays} onChange={getNumofPublicholidays} id='' placeholder='Enter Total Number of Public Days' />
           <p className='error2' style={{color:'red'}}></p>
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="NumberOfAbsents"> Number of Absents</label> <br />
           <input type="number" min="0" name='NumberOfAbsents' value={numofAbsents} onChange={getnumofAbsents}  id='' placeholder='Enter Number of absents' />
           <p className='error3' style={{color:'red'}}></p>
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="NumberOfLateArrivals"> Number of Late Arrivals</label> <br />
           <input type="number" min="0" name='NumberOfLateArrivals' value={numofLateArivals} onChange={getnumofLateArivals}
           id='' placeholder='Enter Number of late arrivals' />
           <p className='error4' style={{color:'red'}}></p>
       <p >Penalty days : {numberoflatearrivals()}</p>
       <hr />
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="BaseSalary"> Base Salary</label> <br /> 
           <input type="number" min="0" name='BaseSalary'  value={baseSalary} onChange={getbaseSalary} id='' placeholder='' />
           
           <p className='error5' style={{color:'red'}}></p>
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="NumberOfDaysWorked"> Number of Days Worked :</label>
          <span> {numberofdaysworked()}</span>
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="NumberofPayableDays">Number of Payable Days :</label>
     <span> {NumberOfPayableDays()}</span>
       </div>
       <div style={{margin:'20px'}}>
           <label htmlFor="PayableSalary">Payable Salary :</label>
           <span> {PayableSalary()} </span>
       </div>
       
    </form>
    </div>
    
    </>
);

}
export default Formenteries;