import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API's base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default headers
    'Authorization': `Bearer ${localStorage.getItem('token')}`, 
  },
});
export default apiClient