import clsx from "clsx";
import React from "react";
import './App.css';
import { themes } from "./common/components/theme/ThemeContext";
import { ThemeToggler } from "./common/components/theme/ThemeToggler";
import useTheme from "./common/components/theme/useTheme";
import { PickPointsPage } from './pages/PickPoints/PickPointsPage';

function App() {
  
  const {theme, setTheme} = useTheme()
  
  return (
    <div className="App">
      <ThemeToggler theme={theme} setTheme={setTheme} />
      <div className={clsx('container', { 'viTheme': theme === themes.vi })}>
        <PickPointsPage theme={theme} />
      </div>
    </div>
  );
}

export default App;
