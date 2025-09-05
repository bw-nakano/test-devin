"use client";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="rounded border border-red-300 bg-red-50 p-4">
                        <h2 className="mb-2 font-semibold text-lg text-red-800">
                            Something went wrong
                        </h2>
                        <p className="text-red-600">
                            An error occurred while rendering this component.
                        </p>
                        <button
                            type="button"
                            onClick={() => this.setState({ hasError: false })}
                            className="mt-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                            Try again
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
