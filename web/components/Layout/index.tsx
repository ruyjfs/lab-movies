import AppLayoutHead from './Head';
import AppLayoutHeader from './Header';
import AppLayoutMain from './Main';
import AppLayoutFooter from './Footer';
import ThemesProviders from './themes/providers';

import {
  APP_TITLE,
  APP_TITLE_FULL,
  APP_DESCRIPTION,
} from '../../constants/app';

const MainLayout = ({
  children,
  title = '',
}: {
  children: any;
  title: string;
}) => {
  return (
    <>
      <AppLayoutHead
        title={APP_TITLE_FULL}
        subtitle={title}
        description={APP_DESCRIPTION}
      />
      <ThemesProviders themeName="dark">
        <AppLayoutHeader title={APP_TITLE} />
        <AppLayoutMain>{children}</AppLayoutMain>
        <AppLayoutFooter title={APP_TITLE_FULL} description={APP_DESCRIPTION} />
      </ThemesProviders>
    </>
  );
};

export default MainLayout;
