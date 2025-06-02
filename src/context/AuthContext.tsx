import React from 'react';
import { createContext,useContext,useState,useEffect } from 'react';
import type { IUser } from '../types/IUser';
import axios from 'axios';

interface AuthResponse{
    success: boolean;
    message: string;
}
interface AuthContextType{
    user: IUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    loginUser: (email: string, password: string) => Promise<AuthResponse | undefined>;
    // registerUser: (name: string, email: string, password: string) => Promise<void>;
    // logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);
    // On mount, check if user is stored in localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                setToken(token);
            } catch (error) {
                console.error('Failed to parse stored token:', error);
                localStorage.removeItem('token');
            }
        }
        setIsLoading(false);
    }, []);

    const loginUser = async (email:string,password:string) => {
        setIsLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email, password });
            console.log('Login response:', res.data);

            const {token,_id,name,email:resEmail} = res.data;
            setToken(token);

            const userData:IUser = {_id,name,email:resEmail};
            setUser(userData);
            console.log('User data:', user);
            console.log('Token:', token);

            localStorage.setItem('token', token);

            setToken(token);

            return {success: true, message:"logged in successfully"};
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // const registerUser = async (name: string, email: string, password: string) => {
    //     setIsLoading(true);
    //     try {
    //         // Simulate API call
    //         await new Promise(resolve => setTimeout(resolve, 500));
    //         const userData: IUser = { id: '2', email, name, role: 'user' };
    //         setUser(userData);
    //         localStorage.setItem('user', JSON.stringify(userData));
    //     } catch (error) {
    //         console.error('Registration failed:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem('user');
    // };

    return (
        <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
}