

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type UserRole = 'employee' | 'employer';

// interface UserContextProps {
//   role: UserRole;
//   setRole: (role: UserRole) => void;
// }

// const UserContext = createContext<UserContextProps | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [role, setRole] = useState<UserRole>('employee'); // Default to employee

//   return (
//     <UserContext.Provider value={{ role, setRole }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = (): UserContextProps => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };
