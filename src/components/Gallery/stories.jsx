import Gallery from '.';

export default {
  title: 'Gallery',
  component: Gallery,
};

const imageList = [
  {
    image:
      'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    alt: 'image',
  },
  {
    image:
      'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    alt: 'image',
  },
  {
    image:
      'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    alt: 'image',
  },
  {
    image:
      'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    alt: 'image',
  },
];

export const Template = (args) => <Gallery imageList={imageList} {...args} />;
