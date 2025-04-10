import React, { useContext } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import StyledButton from './Components/StyledButton';
import StyledButton2 from './Components/Internal';
import StyledButton3 from './Components/External';
import LifecycleDemo from './Components/LifecycleDemo';
import Counter from './useState';
import Counter2 from './UseReducer';
import JokeFetcher from './Components/JokeFetcher';
import InputFocusForm from './Components/InputFocusForm';
import ThemeToggler from './Components/ThemeToggler';
import { ThemeProvider, ThemeContext } from './Components/ThemeContext'
import Parent from './Components/Parent';
import UserForm from './Components/UserForm';
import UserFormRef2 from './UserForm2';

// Move Main inside ThemeProvider where useContext can work safely
const ThemedApp = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <div style={themeStyles}>
      <Header />
      <p>This is a themed application using useContext.</p>
      <ThemeToggler />
    </div>
  );
};

function App() {
  return (
    <>
      <Header title="This is the title of the question 1" />
      <hr/>
      <Content />
      <hr/>
      <Footer />
      <hr/>
      <StyledButton /><br /><br />
      <hr/>
      <StyledButton2 /><br /><br />
      <hr/>
      <StyledButton3 /><br /><br />
      <hr/>
      <LifecycleDemo />
      <hr/>
      <Counter />
      <hr/>
      <Counter2 />
      <hr/>
      <JokeFetcher />
      <hr/>
      <InputFocusForm />
      <hr/>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
      <hr/>
      <Parent />
      <hr/>
      <UserForm />
      <hr/>
      <UserFormRef2/>
      <hr/>
    </>
  );
}

export default App;
