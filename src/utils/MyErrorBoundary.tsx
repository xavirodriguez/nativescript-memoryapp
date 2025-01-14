import * as React from 'react';
class MyErrorBoundary extends React.Component<
  { children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Registra error, envía a un servicio o muestra alerta
    console.error('ErrorBoundary atrapó un error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <label text="Algo salió mal. Intenta más tarde." />;
    }
    return this.props.children;
  }
}
export default MyErrorBoundary;
