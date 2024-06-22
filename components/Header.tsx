import { FC } from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  title: string;
  buttonText: string;
}

const Header: FC<HeaderProps> = ({ title, buttonText }) => {
  const { theme } = useTheme();

  return (
    <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.backgroundColor }}>
      <h1 style={{ color: theme.color }}>{title}</h1>
      <button style={{ backgroundColor: theme.buttonBackgroundColor, color: theme.buttonColor }}>{buttonText}</button>
    </header>
  );
};

export default Header;
