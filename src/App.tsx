import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;