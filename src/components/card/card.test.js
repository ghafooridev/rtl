import {fireEvent, render,screen,waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Card from "./Card.jsx";


describe.skip("Card Component",()=>{




it("should show name of Product...",async()=>{
  // Arrange
    const view =render(
    <div>
      <Card title="product1" price="1000" 
      description="description of product1" 
      img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" count="120"/>
   </div>)
   
   
//Act



//Asset

expect(screen.getByRole('button',{name:'Add to Cart'})).toBeInTheDocument()
expect(view.container.getElementsByClassName('price')[0]).toBeInTheDocument()
expect(screen.getByText('coun',{selector:"span",exact:false})).toBeInTheDocument()

    fireEvent.click(view.getByRole('button',{name:'Add to Cart'}))

    // await waitFor(() => {expect(screen.getByRole('button',{name:'selected'})).toBeInTheDocument()});
    await expect(screen.getByRole('button',{name:'selected'})).toBeInTheDocument()
   

  })
})