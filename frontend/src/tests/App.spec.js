import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App';

describe('Login screen', () => {

  it('Should login screen render email and password input and a button Sign In', () => {

    render(<App />);

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const btnSignIn = screen.getByRole('button', {  name: /sign in/i})

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnSignIn).toBeInTheDocument();

  });

  it('Should Register screen render name, email and password input and a button Sign Un', () => {

    render(<App />);

    const link = screen.getByRole('link', {  name: /don't have an account\?/i})

    userEvent.click(link);

    const inputName = screen.getByPlaceholderText(/name/i)
    const inputEmail = screen.getByPlaceholderText(/email/i)
    const inputPassword = screen.getByPlaceholderText(/password/i)

    const btnSignUp = screen.getByRole('button', {  name: /sign up/i})

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnSignUp).toBeInTheDocument();

  });

});