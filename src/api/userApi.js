// Mock API - simulates a real API call with mocked data
export const fetchUsersApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        ],
      });
    }, 1000); // Simulate network delay
  });
};
