import React from 'react';
import { Header as DesignHeader } from '@teambit/design.blocks.header';
import { Toggler } from '@teambit/community.ui.community-highlighter';
import { ThemeToggler } from '@teambit/design.themes.theme-toggler';
import { headerLinks } from './links';

export type HeaderProps = {};

export function Header() {
  return <DesignHeader menuLinks={headerLinks} plugins={[Toggler, ThemeToggler]} />;
}
