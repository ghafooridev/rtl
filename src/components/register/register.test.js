import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./index";

const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole("textbox", {
    name: "email",
  });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};

const getElement=(element)=>{
  const elements={
    "Email":screen.getByRole("textbox", { name: "Email"}),
    "Password": screen.getByLabelText("Password"),
    "Confirm Password":   screen.getByLabelText("Confirm Password")
  }
  if( elements[element])  return elements[element]
}

const changeElement=(element,value)=>{
  userEvent.type(getElement(element), value)
}

const clickOnSubmitButton = () => {
  const submitBtnElement = screen.getByRole("button", {
    name: "submit",
  });
  userEvent.click(submitBtnElement);
};

describe("Register page", () => {
  beforeEach(() => {
    render(<Register />);
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

  describe.skip("Error Handling", () => {
    test("should show email error message on invalid email", () => {
      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();

      typeIntoForm({
        email: "selenagmail.com",
      });
      clickOnSubmitButton();

      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).toBeInTheDocument();
    });

    test("should show password error if password is less than 5 characters", () => {
      typeIntoForm({ email: "selena@gmail.com" });

      expect(
        screen.queryByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();

      typeIntoForm({ password: "123" });

      clickOnSubmitButton();

      expect(
        screen.queryByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).toBeInTheDocument();
    });

    test("should show confirm password error if passwords don't match", () => {
      typeIntoForm({
        email: "selena@gmail.com",
        password: "12345",
      });

      expect(
        screen.queryByText(/the passwords don't match. try again/i)
      ).not.toBeInTheDocument();

      typeIntoForm({
        confirmPassword: "123456",
      });

      clickOnSubmitButton();

      expect(
        screen.queryByText(/the passwords don't match. try again/i)
      ).toBeInTheDocument();
    });

    test("should show no error message if every input is valid", () => {
      typeIntoForm({
        email: "selena@gmail.com",
        password: "12345",
        confirmPassword: "12345",
      });
      clickOnSubmitButton();

      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the passwords don't match. try again/i)
      ).not.toBeInTheDocument();
    });
  });
});