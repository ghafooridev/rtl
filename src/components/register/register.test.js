import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./index";
import { BrowserRouter } from "react-router-dom";
import { ERROR_MESSAGE } from "../../constants";
import  {utils} from '../helper';

const getElement=(element)=>{
  const elements={
    "Email":screen.getByRole("textbox", { name: "Email"}),
    "Password": screen.getByLabelText("Password"),
    "Confirm Password": screen.getByLabelText("Confirm Password"),
    "Button": screen.getByRole("button" ,{name:"Submit"})
  }
  if( elements[element])  return elements[element]
}

const changeElement=(element,value)=>{
  userEvent.type(getElement(element), value)
}

const clickOnSubmitButton = () => {
  userEvent.click(getElement("Button"));
};


//mock the navigation behavior
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Register page", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>);
  });

  // test.only("inputs should be initially empty111", () => {
  //  // just run this test
  // })


// list of the HTML role
// https://www.w3.org/TR/html-aria/#docconformance

  test("inputs should be initially empty", () => {
    // const email = screen.getByRole("textbox",{name:"Email"})
    // const aboutAnchorNode3 = screen.getByLabelText("Email") // same the up line
    expect(getElement("Email").value).toBe("");
    expect(getElement("Password").value).toBe("");
    expect(getElement("Confirm Password").value).toBe("");
  })
  test("should be able to type into inputs and get value", () => {
    changeElement("Email","stackjs@gmail.com");
    changeElement("Password","123456");
    changeElement("Confirm Password","123456");

    expect(getElement("Email").value).toBe("stackjs@gmail.com");
    expect(getElement("Password").value).toBe("123456");
    expect(getElement("Confirm Password").value).toBe("123456");
  });
  test("button should be disabled when all inputs are empty", () => {
    expect(getElement("Button")).toHaveClass('btn');

    //spay on example
    const isEmpty = jest.spyOn(utils, 'isEmpty');
    utils.isEmpty(getElement("Email").value)
    utils.isEmpty(getElement("Password").value)
    utils.isEmpty(getElement("Confirm Password").value)
    expect(isEmpty).toHaveBeenCalledTimes(3);
   
    expect(getElement("Button")).toBeDisabled()
  });
  test("button should be enabled when all inputs are filled", () => {
    changeElement("Email","stackjs@gmail.com");
    changeElement("Password","123456");
    changeElement("Confirm Password","123456");

    expect(getElement("Button")).toBeEnabled();
  });
  describe("handle errors and navigate", () => {
    beforeEach(()=>{
      expect(
        screen.queryByText(ERROR_MESSAGE.EMAIL)
      ).not.toBeInTheDocument(); 

      expect(
        screen.queryByText(ERROR_MESSAGE.PASSWORD)
      ).not.toBeInTheDocument(); 

      expect(
        screen.queryByText(ERROR_MESSAGE.CONFIRM_PASSWORD)
      ).not.toBeInTheDocument(); 
    });
    
    test("should show email error message on invalid email", () => {
      changeElement("Email","stackjs");
      changeElement("Password","123456");
      changeElement("Confirm Password","123456");

      clickOnSubmitButton();

      expect(
        screen.getByText(ERROR_MESSAGE.EMAIL)
      ).toBeInTheDocument();
    });

    test("should show password error message on invalid password", () => {
      changeElement("Email","stackjs@gmail.com");
      changeElement("Password","123");
      changeElement("Confirm Password","123");

      clickOnSubmitButton();

      expect(
        screen.getByText(ERROR_MESSAGE.PASSWORD)
      ).toBeInTheDocument();
    });

    test("should show confirm password error message if passwords don't match", () => {
      changeElement("Email","stackjs@gmail.com");
      changeElement("Password","123456");
      changeElement("Confirm Password","1234567");

      clickOnSubmitButton();

      expect(
        screen.getByText(ERROR_MESSAGE.CONFIRM_PASSWORD)
      ).toBeInTheDocument();
    });


    test("should call the navigation", () => {
      changeElement("Email","stackjs@gmail.com");
      changeElement("Password","123456");
      changeElement("Confirm Password","123456");
      
      clickOnSubmitButton();
     
      expect(mockedUsedNavigate).toHaveBeenCalledWith('products');
    });
  });
});