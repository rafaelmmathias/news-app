import { ThemeProvider } from 'styled-components';
import CSSReset from './CSSReset';
import theme from './theme';

function AppThemeProvider({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme} {...rest}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
