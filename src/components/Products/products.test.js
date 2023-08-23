import {render,screen,within} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {rest} from "msw";
import  {setupServer} from "msw/node";
import data from "../../mock/products.json"
import Products from "./index.jsx";

const server=setupServer(
  rest.get("https://fakestoreapi.com/products",(req,res,ctx)=>{
   
  return res(
    ctx.status(200),
    ctx.json(data)
    )
  })
)

beforeEach(() => render(<Products />));
beforeAll(()=>server.listen());
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close())

describe("Product Component",()=>{

test("should show all products property",async()=>{
  // Arrange
  const list = await screen.findAllByRole("listitem");
 
  expect(list.length).toBe(5);
   
//Act



//Asset
// const items = screen.getAllByRole("list")
// console.log(items)
// expect(items.length).toBe(4)
// expect(screen.getByRole('button',{name:'Add to Cart'})).toBeInTheDocument()
// expect(view.container.getElementsByClassName('price')[0]).toBeInTheDocument()
// expect(screen.getByText('coun',{selector:"span",exact:false})).toBeInTheDocument()

//     fireEvent.click(view.getByRole('button',{name:'Add to Cart'}))

//     // await waitFor(() => {expect(screen.getByRole('button',{name:'selected'})).toBeInTheDocument()});
//     await expect(screen.getByRole('button',{name:'selected'})).toBeInTheDocument()
   

  })
})