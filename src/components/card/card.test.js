import {fireEvent, render,screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Card from "./Card";


describe("Card Component",()=>{


const cardProps={
  title:"product1" ,
      price:"1000" ,
      description:"description of product1" ,
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
      rating:{rate:3.5}
}


it("should show all card items property",async()=>{
  // Arrange
    const view =render(
      <Card {...cardProps}
    />
   )
   
   
const image=screen.getByRole('img')
expect(image).toBeInTheDocument()
expect(image.src).toContain(cardProps.image)

const title=screen.getByText(cardProps.title)
expect(title).toBeInTheDocument()

const price=screen.getByText(`$${cardProps.price}`)
expect(price).toBeInTheDocument()

const description=screen.getByText(cardProps.description)
expect(description).toBeInTheDocument()

const rate=screen.getByText(`${cardProps.rating.rate}`,{exact:false})
expect(rate).toBeInTheDocument()


// example of using view
// expect(view.container.getElementsByClassName('price')[0]).toBeInTheDocument()

  })




it("should change the button text after selecting card",async()=>{
  // Arrange
    const view =render(
      <Card {...cardProps}
    />
   )

   const button=screen.getByRole('button');

   expect(button).toHaveTextContent('Add to Cart')

   userEvent.click(button)
   expect(button).toHaveClass('selected')
    expect(button).toHaveTextContent('selected')


    userEvent.click(button)
    expect(button).not.toHaveClass('selected')
     expect(button).toHaveTextContent('Add to Cart')


  })
})



   
