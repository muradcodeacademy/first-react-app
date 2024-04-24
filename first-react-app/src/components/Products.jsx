import data_arr from "../../src/data";


function Products(){
    return (


      <ul>
        {data_arr.map((product)=>{
            return <li key={product.id}>{product.name} - {product.price}$</li>
        })}
      </ul>
    )
}

export default Products