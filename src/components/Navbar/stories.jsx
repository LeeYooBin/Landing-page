import Navbar from '.';

export default {
  title: 'Navbar',
  component: Navbar,
};

const links = ['about', 'missions', 'contact'];

export const Template = (args) => <Navbar {...args} links={links} />;
