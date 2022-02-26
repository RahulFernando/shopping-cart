import 'antd/dist/antd.css';
import AppRoutes from './routes';
import AuthProvider from './context/auth.provider';

// styles
import './assets/styles/common/style.css';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
