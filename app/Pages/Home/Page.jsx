import React from 'react'

import Script from 'next/script'
import Header from '@/app/Components/Header/header';
import Herosectionpage from '@/app/Components/Herosection/page';
import Sectionone from '@/app/Components/Sectionone/page';
import Sectiontwo from '@/app/Components/Sectiontwo/page';
import Sectionthree from '@/app/Components/Sectionthree/page';
import Sectionfour from '@/app/Components/Sectionfour/page';
import Sectionfive from '@/app/Components/Sectionfive/Page';
import Footer from '@/app/Components/Footer/page';
import Sectionsix from '@/app/Components/Sectionsix/page';
import Sectionseven from '@/app/Components/Sectionseven/page';
import Sectioneight from '@/app/Components/Sectioneight/page';
import Sectionnine from '@/app/Components/Sectionnine/page';

const HomePage = () => {
    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
            <Header />
            <Herosectionpage />
            <Sectionone />
            <Sectiontwo />
            <Sectionthree />
            <Sectionfour />
            <Sectionfive />
            <Sectionsix />
            <Sectionseven />
            <Sectioneight />
            <Sectionnine/>
            <Footer />
        </>
    )
}

export default HomePage;