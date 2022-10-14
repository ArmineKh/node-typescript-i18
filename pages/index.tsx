import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Home from '../views/Home';

type LanguageAlternative = {
  href: string;
  hrefLang: string;
};

type PageProps = {
  languageAlternates: LanguageAlternative[];
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = '', locales = [] } = context;

  const translations = await serverSideTranslations(locale, ['common', 'home']);

  const languageAlternates: LanguageAlternative[] = locales.map((item) => ({
    href: `${process.env.VERCEL_URL}/${item}`,
    hrefLang: `${item}`,
  }));

  return {
    props: {
      ...translations,
      languageAlternates,
    },
  };
};

const HomePage: NextPage<PageProps> = ({
  languageAlternates,
  ...props
}) => (
  <>
    <NextSeo
      title="Home Page"
      languageAlternates={languageAlternates}
    />
    <Home {...props} />
  </>
);

export default HomePage;
