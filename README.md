# Google Translator React Component

This repository provides a React component that integrates Google Translate into your React application. The `GoogleTranslate` component allows users to translate the webpage content into different languages using the Google Translate service.

## Features

- Easy integration of Google Translate into React applications.
- Supports multiple languages.
- Automatically displays the Google Translate widget on the page.

## Installation

To use the `GoogleTranslate` component in your React project, follow these steps:

1. Ensure you have a React project set up. If you don't have one, create a new React project using Create React App:

   ```bash
   npx create-react-app my-app
   cd my-app
Download or clone this repository and copy the GoogleTranslate component file to your project, or simply create the component file directly in your project.

Import and use the GoogleTranslate component in your application.

Usage
Create the GoogleTranslate component

Create a file named GoogleTranslate.js and add the following code:

javascript
Copy code

```bash
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    const id = document.getElementById("google_translate_element");
    if (id) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      googleTranslateElementInit();
    }
  }, []);

  const translateScript = document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']");
  useEffect(() => {
    if (translateScript !== null) {
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, [translateScript]);

  return (
    <div className='google_translate_main'>
      <div id="google_translate_element"></div>
    </div>
  );
}
export default GoogleTranslate;
```
Use the GoogleTranslate component in your application

Import and use the GoogleTranslate component in your main application file, typically App.js. Wrap the component with an error boundary to handle any potential errors gracefully:

javascript
Copy code

```bash
import React from 'react';
import GoogleTranslate from './GoogleTranslate';
import ErrorBoundary from './ErrorBoundary'; // Assume you have an ErrorBoundary component

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <GoogleTranslate />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```
Error Boundary Component

Ensure you have an ErrorBoundary component to catch any errors. If you don't have one, create a simple error boundary component like this:

javascript
Copy code

```bash
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```
