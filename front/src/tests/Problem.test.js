// Import necessary testing utilities
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mock Axios for API requests
import Problems from './Problems'; // Import the component to be tested
import Problem_id from './Problem_id'; // Import the component to be tested

// Mock Axios requests for Problems component
jest.mock('axios');

describe('Problems Component', () => {
  test('renders correctly', () => {
    const props = {
      name: 'Test Problem',
      text: 'Test problem description',
      id1: 'test-id',
      hreflink: '/test'
    };

    const { getByText, getByPlaceholderText } = render(<Problems {...props} />);
    
    // Assert that the component renders with the provided props
    expect(getByText('Test Problem')).toBeInTheDocument();
    expect(getByText('Test problem description')).toBeInTheDocument();
    expect(getByPlaceholderText('add comment')).toBeInTheDocument();
  });

  test('handles form submission', async () => {
    const props = {
      name: 'Test Problem',
      text: 'Test problem description',
      id1: 'test-id',
      hreflink: '/test'
    };

    const { getByText, getByPlaceholderText } = render(<Problems {...props} />);
    
    // Mock Axios post request
    axios.post.mockResolvedValue({ data: { valid: true } });

    // Simulate user entering a comment
    fireEvent.change(getByPlaceholderText('add comment'), { target: { value: 'Test comment' } });

    // Simulate form submission
    fireEvent.click(getByText('share'));

    // Wait for the alert to appear
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Published successfully');
    });
  });
});

describe('Problem_id Component', () => {
  // Similar tests as above for rendering and behavior
});
