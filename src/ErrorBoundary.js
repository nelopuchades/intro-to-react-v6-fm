import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    //log err to sentry, azure monitor, new relic, trackjs
    console.error("ErrorBoundary caught an error", err, info);
    setTimeout(() => this.setState({ redirect: true }), 3000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here</Link> to go back to the home page or wait
          five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
