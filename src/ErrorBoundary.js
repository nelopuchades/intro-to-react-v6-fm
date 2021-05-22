import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    //log err to sentry, azure monitor, new relic, trackjs
    console.error("ErrorBoundary caught an error", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
