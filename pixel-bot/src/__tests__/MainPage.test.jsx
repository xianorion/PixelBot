// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {http} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

import MainPage from '../components/MainPage';
import axios from 'axios';
jest.mock('axios'); 

// declare which API requests to mock
const server = setupServer(
    // capture "GET /greeting" requests
    http.get('http://localhost:8080/getUsersByEmail', (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json([{"id":1,"username":"mackattack","age":27,"email":"mackk@gmail.com"}]))
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())
  
  // ...
  
  test('handles server error', async () => {
    // server.use(
    //   // override the initial "GET /greeting" request handler
    //   // to return a 500 Server Error
    //   http.get('/getUsersByEmail', (req, res, ctx) => {
    //     return res(ctx.status(500))
    //   }),
    // )
    axios.get.mockResolvedValue({data:{data:'[{"id":1,"username":"mackattack","age":27,"email":"mackk@gmail.com"}]'}});
    render(<MainPage/>)

    const emailInput = screen.getByPlaceholderText("Email");
    console.log("email input IS: ", emailInput);;
    userEvent.type(emailInput,"mackk@gmail.com");
    expect(emailInput.value).toBe('mackk@gmail.com');
    const submitButton = screen.getByDisplayValue("login");
    fireEvent.submit(emailInput);
    await screen.findAllByText('Welcome mackattack!!!')
    // ...
  })

// test('loads and displays welcome message for user', async () => {
//     let val = null;
//     let setValue = (value) =>{
//         val = value;
//     }
//     // Arrange
//     render(<MainPage/>);
//     // Act
//     // Assert
//   })