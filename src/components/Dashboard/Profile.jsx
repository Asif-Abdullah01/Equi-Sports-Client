import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>
            <div className="bg-white shadow p-6 rounded-xl max-w-md">
                {user?.photoURL && (
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mb-4 mx-auto object-cover"
                    />
                )}
                <div className="text-center">
                    <p className="mb-2"><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
                    <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
