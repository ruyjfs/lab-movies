import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';

export default function AppLayoutFooter({ title, description }) {
  return (
    <footer>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
      <Copyright title={title} />
    </footer>
  );
}
