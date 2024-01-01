// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Header from "./Header";
import { useState } from "react";

// import './App.css'
// const products = [
//   {name: 'product1', price: 100.00},
//   {name: 'product2', price: 200.00},
  
// ]
function App() {
  // const [products, setProducts] = useState([
  //   {name: 'product1', price: 100.00},
  //   {name: 'product2', price: 200.00},
  
  // ]);
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

    function handleThemeChange(){
      setDarkMode(!darkMode);
    }

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      < Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
            <Catalog />
      </Container>
      
    </ThemeProvider>
  );

  // return (
  //   <>
  //     <CssBaseline />
  //     < Header/>
  //     {/* <h1>Re-Store</h1> */}
  //     {/* <Typography variant='h1'>Re-Store</Typography> */}
  //     <Catalog products={products} addProduct={addProduct}/>
  //     {/* <ul> */}
  //       {/* {products.map((item, index) => (
  //         <li key={index}>{item.name} - {item.price}</li>
  //       ))} */}

  //       {/* {products.map(product => (
  //         <li key={product.id}>{product.name} - {product.price}</li>
  //       ))}
  //     </ul>
  //     <button onClick={addProduct}>Add Product</button>
  //    */}
  //   </>
  // );
}

export default App




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
