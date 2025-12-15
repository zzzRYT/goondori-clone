import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
});

const authStorageKey = '@auth_state';

export function AuthProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storageAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonValue);
    } catch (error) {
      console.error('Error storing auth state:', error);
    }
  };

  const logIn = () => {
    setIsLoggedIn(true);
    storageAuthState({ isLoggedIn: true });
    router.replace('/(main)/(tabs)');
  };
  const logOut = () => {
    setIsLoggedIn(false);
    storageAuthState({ isLoggedIn: false });
    router.replace('/(auth)');
  };

  useEffect(() => {
    const getAuthFormStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(authStorageKey);
        if (value) {
          const parsedValue = JSON.parse(value);
          setIsLoggedIn(parsedValue.isLoggedIn);
        }
      } catch (error) {
        console.error('Error retrieving auth state:', error);
      }
      setIsReady(true);
    };
    getAuthFormStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ isReady, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
