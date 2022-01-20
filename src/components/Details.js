import React, { useEffect, useState } from 'react'
import { getCribwiseData } from '../service/api'

const useDetail = () =>{
    const [data, setData] = useState([])
    useEffect(async ()=>{
        const response = await getCribwiseData()
        setData(response);
    },[])   
console.log(data)
    return {data};
   
}
function  Details(){
    const {data} = useDetail();
return(
    <div className='row'>
        <div className='col-9'>
      <h1>Details page</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Item ID</th>
      <th scope="col">Item Name</th>
      <th scope="col">Item Category</th>
      <th scope="col">Item Stock Status</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item) => {return <tr>
            <th scope="row">{item.id}</th>
            <td>{item.itemName}</td>
            <td>{item.itemCategory}</td>
            <td>{item.itemstockStatus}</td>
       </tr>
        })
        
    }
    
  </tbody>
</table>
   </div>
</div>
)
}

export default Details