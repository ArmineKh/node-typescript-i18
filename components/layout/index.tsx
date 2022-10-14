import PropTypes, { InferProps } from 'prop-types';
import Menu from './Menu';
import LocaleSwitcher from './LocalSwitcher';

function Layout({ children }: InferProps<typeof Layout.PropTypes>) {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-row justify-between bg-black p-4 text-white">
        <Menu />
        <LocaleSwitcher />
      </nav>
      <main className="flex-1 p-4 ">{children}</main>
      <footer className="bg-black p-4 text-white">footer</footer>
    </div>
  );
}
// eslint-disable-next-line react/no-typos
Layout.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
