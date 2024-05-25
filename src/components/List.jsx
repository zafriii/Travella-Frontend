// import React, { useState,useEffect } from 'react';
// import { useList } from '../store/ListContext';

// function List() {
//   const { state, dispatch } = useList();
 

//   useEffect(() => {
//     const storedList = localStorage.getItem('list');
//     if (storedList) {
//       dispatch({ type: 'LOAD_LIST', payload: JSON.parse(storedList) });
//     }
//   }, [dispatch]);

  

//   const handleRemoveItem = (itemId) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: itemId });
//   };
  
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [duration, setDuration] = useState(0);


//   useEffect(() => {
//     const storedStartDate = localStorage.getItem('startDate');
//     const storedEndDate = localStorage.getItem('endDate');
//     const storedDuration = localStorage.getItem('duration');

//     if (storedStartDate) {
//       setStartDate(storedStartDate);
//     }
//     if (storedEndDate) {
//       setEndDate(storedEndDate);
//     }
//     if (storedDuration) {
//       setDuration(parseInt(storedDuration));
//     }
//   }, []);

 
//   useEffect(() => {
//     localStorage.setItem('startDate', startDate);
//     localStorage.setItem('endDate', endDate);
//     localStorage.setItem('duration', duration.toString());
//   }, [startDate, endDate]);



//   return (
//     <div className='list'>
//       <h2>Trip Lists</h2>
//       {state.list.map((item) => (
//         <div key={item.id}>
//           <h3>{item.country}</h3>
//           <p>Places: {item.place.join(', ')}</p>
//           <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
//           <p>Stays: {item.stays}</p>

//         <label>
//         Start Date:
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         End Date:
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
        
//       </label>
//       <br />


      
//       <br />
      
//       <br />
//       <div>
//         <p>Start Date: {startDate}</p>
//         <p>End Date: {endDate}</p>
       
//       </div>
//           <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default List;











// import React, { useState,useEffect } from 'react';
// import { useList } from '../store/ListContext';

// function List() {
//   const { state, dispatch } = useList();

//   useEffect(() => {
//     const storedList = localStorage.getItem('list');
//     if (storedList) {
//       dispatch({ type: 'LOAD_LIST', payload: JSON.parse(storedList) });
//     }
//   }, [dispatch]);

//   const handleRemoveItem = (itemId) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: itemId });
//   };

//   const handleDateChange = (itemId, field, value) => {
//     dispatch({ type: 'UPDATE_DATE', payload: { itemId, field, value } });
//   };



//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   useEffect(() => {
//     const storedStartDate = localStorage.getItem('startDate');
//     const storedEndDate = localStorage.getItem('endDate');

//     if (storedStartDate) {
//       setStartDate(storedStartDate);
//     }
//     if (storedEndDate) {
//       setEndDate(storedEndDate);
//     }
//   }, []);

  
//   useEffect(() => {
//     localStorage.setItem('startDate', startDate);
//     localStorage.setItem('endDate', endDate);
//   }, [startDate, endDate]);



//   return (
//     <div>
//       <h2>List</h2>
//       {state.list.map((item) => (
//         <div key={item.id}>
//           <h3>{item.country}</h3>
//           <p>Places: {item.place.join(', ')}</p>
//           <p>Stays: {item.stays}</p>
//           <label>
//             Start Date:
//             <input
//               type="date"
//               value={item.startDate}
//               onChange={(e) => handleDateChange(item.id, 'startDate', e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             End Date:
//             <input
//               type="date"
//               value={item.endDate}
//               onChange={(e) => handleDateChange(item.id, 'endDate', e.target.value)}
//             />
//           </label>
//           <br />
          
//           <br />

//           <div>
//          <p>Start Date: {startDate}</p>
//          <p>End Date: {endDate}</p>
        
//       </div>



//           <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//         </div>
//       ))}


      
//     </div> 
//   );
// }

// export default List;











// import React, { useState, useEffect } from 'react';
// import { useList } from '../store/ListContext';

// function List() {
//   const { state, dispatch } = useList();

//   // Define separate state variables for startDate and endDate for each item
//   const [dates, setDates] = useState([]);


//     useEffect(() => {
//     const storedList = localStorage.getItem('list');
//     if (storedList) {
//       dispatch({ type: 'LOAD_LIST', payload: JSON.parse(storedList) });
//     }
//   }, [dispatch]);

//   // Initialize the dates state when the component mounts
//   useEffect(() => {
//     setDates(state.list.map(item => ({
//       id: item.id,
//       startDate: '',
//       endDate: '',
//     })));
//   }, [state.list]);

//   // Update the startDate and endDate for a specific item
//   const handleDateChange = (itemId, field, value) => {
//     setDates(prevDates => prevDates.map(date => {
//       if (date.id === itemId) {
//         return {
//           ...date,
//           [field]: value,
//         };
//       }
//       return date;
//     }));
//   };

//   const handleRemoveItem = (itemId) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: itemId });
//   };

//   return (
//     <div className='list'>
//       <h2>Trip Lists</h2>
//       {state.list.map((item, index) => (
//         <div key={item.id}>
//           <h3>{item.country}</h3>
//           <p>Places: {item.place.join(', ')}</p>
//           <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
//           <p>Stays: {item.stays}</p>

//           {dates[index] && ( // Add this check to prevent accessing undefined dates[index]
//             <>
//               <label>
//                 Start Date:
//                 <input
//                   type="date"
//                   value={dates[index].startDate}
//                   onChange={(e) => handleDateChange(item.id, 'startDate', e.target.value)}
//                 />
//               </label>
//               <br />
//               <label>
//                 End Date:
//                 <input
//                   type="date"
//                   value={dates[index].endDate}
//                   onChange={(e) => handleDateChange(item.id, 'endDate', e.target.value)}
//                 />
//               </label>
//               <br />
//             </>
//           )}

            

//           <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default List;





import React, { useState, useEffect } from 'react';
import { useList } from '../store/ListContext';
import './list.css'

function List() {
  const { state, dispatch } = useList();

  // Define separate state variables for startDate and endDate for each item
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      dispatch({ type: 'LOAD_LIST', payload: JSON.parse(storedList) });
    }
  }, [dispatch]);

  // Initialize the dates state when the component mounts
  useEffect(() => {
    setDates(state.list.map(item => ({
      id: item.id,
      startDate: '',
      endDate: '',
    })));
  }, [state.list]);

  // Update the startDate and endDate for a specific item
//   const handleDateChange = (itemId, field, value) => {
//     setDates(prevDates => prevDates.map(date => {
//       if (date.id === itemId) {
//         return {
//           ...date,
//           [field]: value,
//         };
//       }
//       return date;
//     }));

//     // Save to local storage
//     localStorage.setItem('dates', JSON.stringify(dates));
//   };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };




  useEffect(() => {
    setDates(state.list.map(item => {
      const storedItemDates = JSON.parse(localStorage.getItem(`date-${item.id}`));
      return {
        id: item.id,
        startDate: storedItemDates ? storedItemDates.startDate : '',
        endDate: storedItemDates ? storedItemDates.endDate : '',
      };
    }));
  }, [state.list]);

  // Update the startDate and endDate for a specific item
  const handleDateChange = (itemId, field, value) => {
    setDates(prevDates => prevDates.map(date => {
      if (date.id === itemId) {
        const updatedDate = {
          ...date,
          [field]: value,
        };
        // Save updated date to local storage
        localStorage.setItem(`date-${itemId}`, JSON.stringify(updatedDate));
        return updatedDate;
      }
      return date;
    }));
  };






  return (

    <div className="list-sec">
    <div className='list'>
      <h2>Trip Lists</h2>
      {state.list.map((item, index) => (
        <div key={item.id}>

          <div className="head-btn">

          <h3> {index + 1}. {item.country}</h3>
          <button className='rmv' onClick={() => handleRemoveItem(item.id)}>Remove</button>

          </div>

          <p>Places: {item.place.join(', ')}</p>
          <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
          <p>Stays: {item.stays}</p>        

          <div className="date">

          {dates[index] && (
            <>

          <h2 className='mark'>Mark your trip dates</h2>

          <div className="date-inputs">  

              
              <label>
                Start Date:
                <input
                  type="date"
                  value={dates[index].startDate}
                  onChange={(e) => handleDateChange(item.id, 'startDate', e.target.value)}
                />
              </label>
              <br />
              <label className='end-date'>
                End Date:
                <input 
                  type="date"
                  value={dates[index].endDate}
                  onChange={(e) => handleDateChange(item.id, 'endDate', e.target.value)}
                />
              </label>

              </div>   
              <br />
              <div className='date-outputs'>
                <p>Start Date: {dates[index].startDate}</p>
                <p className='end-datep'>End Date: {dates[index].endDate}</p>
                
              </div>
            </>
          )}

        </div>
        

          

        </div>
      ))}
    </div>
    </div>
  );
}

export default List;
