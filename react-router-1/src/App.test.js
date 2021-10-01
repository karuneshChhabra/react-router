import { render, screen } from '@testing-library/react';
import App from './App';
import Routers from './Routers';


test('renders Home link', () => {
  render(<Routers />);
  
   const linkElement = screen.getByText(/Home Page/i);
   expect(linkElement).toBeInTheDocument();

  
});

test('renders App Page and check Contact Link',()=>{
  render(<Routers />);
 

  const linkElementForApp = screen.queryByText(/Contact/i);
  expect(linkElementForApp).toBeNull();

})
