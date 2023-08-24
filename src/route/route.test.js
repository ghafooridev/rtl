
import {
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppRouter }  from "./index";
import { MemoryRouter} from 'react-router-dom'


describe('router',()=>{
  test('landing on a bad page', () => {
  const exampleRoute = '/products'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[exampleRoute]}>
      <AppRouter />
    </MemoryRouter>,
  )


  expect(screen.getByText(/products/i)).toBeInTheDocument();
})
})
