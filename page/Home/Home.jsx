import React, { useContext } from 'react';
import Banner from "../../component/Banner/Banner"
import Category from "../../component/Category/Category"
import AboutSection from "../../component/AboutSection/AboutSection"
import Products from "../../component/Products/Products"
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {

    const {a, b} = useContext(AuthContext)
    console.log(a, b)
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;