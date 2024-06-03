import propTypes from "prop-types";
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
};

export default ErrorBoundary;
