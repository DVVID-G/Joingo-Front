import React, { useEffect } from 'react';
import useAuthStore from '../../stores/useAuthStore';
import UserDAO from '../../daos/UserDAO'; 


const Profile: React.FC = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      const newUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
 // Usar UID como ID del documento
        UserDAO.createUser(user.uid, newUser);
    }}, [user]);

  return (
    <div className="container-page">
      <div>
        <h1>Bienvenido</h1>
        <h2>{user?.displayName}</h2>
      </div>
    </div>
  );
};

export default Profile;

