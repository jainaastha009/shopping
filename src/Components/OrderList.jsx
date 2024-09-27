import { useLoaderData } from 'react-router-dom'


const OrderList = () => {
  const {orders,meta} = useLoaderData();
  console.log(orders);
  return (
    <div className='mt-8'>
      <h4 className="mb-4 capitalize">
        Total orders:{meta.pagination.total}
      </h4>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className='hidden sm:block'>Date</th>

              
            </tr>
          </thead>
          <tbody>
            {orders.map((e)=>{
              const id=e.id 
              const {name,address,numItemInCart,orderTotal,createdAt}=e.attributes;
              const formattedDate = day(createdAt).format(new Date(), 'yyyy-MM-dd');
              return<tr key={id}>
                <td>{name}</td>
                <td>{address}</td>
                <td>{numItemInCart}</td>
                <td>{orderTotal}</td>
                <td className='hidden sm:block'>{formattedDate}</td>

              </tr>
            })}
          </tbody>
        </table>
        </div>      
    </div>
  )
}

export default OrderList
