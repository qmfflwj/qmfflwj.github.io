import Link from 'next/link';

import { ThemeSwitcher } from './theme-switcher';

async function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <Link
            className="text-[22px] size-8 rounded-base flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading"
            href={'/'}
          >
            T
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-end gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
