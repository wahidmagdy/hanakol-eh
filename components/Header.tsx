import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styled from 'styled-components';
import tw from 'tailwind-styled-components';

type Props = {
    title?: string
}

const StyledHeader = tw.header`
  p-6
  bg-gradient-to-b
  from-yellow-300
  to-yellow-400
  flex
  justify-center
`;
const StyledTitle = tw.h1`
  text-3xl
  text-bold
  mx-6
`;
const StyledArabicTitle = styled.h1`
  font-family: 'amiri' !important;
  font-weight: 700 !important;
`;
const StyledArabicTitleTW = tw(StyledArabicTitle)`
  text-3xl
  text-bold
  mx-6
`;

const Header = ({title} : Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StyledHeader>
      <StyledTitle>Hanakol eh</StyledTitle>
      <StyledArabicTitleTW>هناكل إيه</StyledArabicTitleTW>      
    </StyledHeader>
  </>
)

export default Header
