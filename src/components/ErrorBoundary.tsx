import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  handleReset = () => {
    (this as any).setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    const currentState = (this as any).state as State;
    const currentProps = (this as any).props as Props;

    if (currentState && currentState.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              !
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Load Issue</h2>
            <p className="text-sm text-gray-600 mb-6">
              We encountered a temporary network or resource issue while loading this page.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return currentProps ? currentProps.children : null;
  }
}
