import MaterialUI from './MaterialUI';
import StyledComponents from './StyledComponents';

export default function ThemesProviders({ themeName, children }) {
  return (
    <StyledComponents themeName={themeName}>
      <MaterialUI themeName={themeName}>{children}</MaterialUI>
    </StyledComponents>
  );
}
