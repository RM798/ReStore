const products =[
  {name: 'product1', price: 100.00},
  {name: 'product2', price: 200.00},
  {name: 'product2', price: 300.00},
]



function App() {
  return (
    <div>
      <h1>Re-Store</h1>

      <ul>
        {products.map((item, _index) =>(
          <li key={_index}>{item.name} - {item.price}</li>
        ) )}
      </ul>
    </div>
  )
}

export default App
