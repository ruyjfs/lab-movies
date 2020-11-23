import React, { useState } from 'react';

import AppLayoutToolbar from './Toolbar';
import AppLayoutDrawer from './Drawer';

export default function AppLayoutHeader({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppLayoutToolbar title={title} open={open} setOpen={setOpen} />
      <AppLayoutDrawer open={open} setOpen={setOpen} />
    </>
  );
}
