// import React, { useEffect, useState } from 'react';
// import jwtDecode from 'jwt-decode';
// import axios from 'axios';

// const LocalUser = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const getToken = localStorage.getItem('token');
//     if (getToken) {
//       try {
//         const decodedToken = jwtDecode(getToken);
//         const userId = decodedToken.user_id; // Adjust this based on your token structure

//         const fetchUserInfo = async () => {
//           try {
//             const response = await axios.get(`https://yourapi.com/users/${userId}`);
//             setUserInfo(response.data);
//           } catch (error) {
//             console.error('Error fetching user info:', error);
//           }
//         };

//         fetchUserInfo();
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     }
//   }, []);

//   return (
//     <div>
//       {userInfo ? (
//         <div>
//           <h1>User Info</h1>
//           <p>Name: {userInfo.name}</p>
//           <p>Email: {userInfo.email}</p>
//           {/* Render other user info as needed */}
//         </div>
//       ) : (
//         <p>Loading user info...</p>
//       )}
//     </div>
//   );
// };

// export default LocalUser;
