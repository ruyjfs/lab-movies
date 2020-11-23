import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function AppLayoutCopyright({ title }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
