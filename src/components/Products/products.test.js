import {render,screen,fireEvent, getByRole} from "@testing-library/react";
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
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  const list = await screen.findAllByRole("listitem");
  expect(list.length).toBe(5);
   
//Act



//Asset

   

  });
  test("should filter for jewelery terms", async () => {
     // Arrange
    const list = await screen.findAllByRole("listitem");

// Act
   await fireEvent.change(screen.getByRole('combobox'), { target: { value: 'jewelery' } })
    let options = screen.getAllByRole('option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
    expect(options[3].selected).toBeFalsy();
    expect(options[4].selected).toBeFalsy();

// Asset

expect(screen.getAllByRole("listitem")).toEqual([list[1]]);
expect(screen.queryByText("product1")).not.toBeInTheDocument();
expect(screen.getByText("product2")).toBeInTheDocument()
expect(screen.queryByText("product3")).not.toBeInTheDocument()


  });
})