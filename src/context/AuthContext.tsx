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
    registerUser: (name: string, email: string, password: string) => Promise<AuthResponse | undefined>;
    logoutUser: () => void;
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
    const [token, setToken] = useState<string | null>("");
    // On mount, check if user is stored in localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (token) {
            try {
                setToken(storedToken);
            } catch (error) {
                console.error('Failed to parse stored token:', error);
                localStorage.removeItem('token');
            }
        }
        setIsLoading(false);
    }, [token]);

    const loginUser = async (email:string,password:string) => {
        setIsLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email, password });
            console.log('Login response:', res.data);

            const {resToken,_id,name,email:resEmail} = res.data;
            setToken(resToken);

            console.log('user data:', res.data);
            const userData:IUser = {_id,name,email:resEmail};
            console.log('User:', userData);
            console.log('Token:', resToken);

            localStorage.setItem('token', resToken);

            setToken(token);

            return {success: true, message:"logged in successfully"};
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const registerUser = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        try {
            // Simulate API call
            const res = await axios.post("http://localhost:5000/api/register", { name, email, password });
            const{_id, name:resName, email:resEmail } = res.data;

            const userData:IUser = { _id,name:resName,email:resEmail};
            console.log('Registration response:', userData);
            setUser(userData);
            return { success: true, message: "Registered successfully" };

        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, loginUser, registerUser,logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}