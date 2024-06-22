import { createContext, useState, useContext, FC, ReactNode } from 'react';

interface Theme {
  backgroundColor: string;
  color: string;
  buttonBackgroundColor: string;
  buttonColor: string;
}

interface ThemeContextProps {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: '#000',
    color: '#fff',
    buttonBackgroundColor: '#1e90ff',
    buttonColor: '#fff'
  });

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
