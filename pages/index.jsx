import {useEffect} from "react";
import {useSelector} from "react-redux";
import Post from "../components/home/Post";
import {ApiServices} from "./api/network/ApiServices";
import {fetchHome} from "./api/redux/home";
import {wrapper} from "./api/store";
import {NextSeo} from "next-seo";
import About from "../components/home/About";
import Counter from "../components/home/Counter";
import Whyus from "../components/home/Whyus";
import Leaders from "../components/home/Leaders";
import BlogSlider from "../components/home/BlogSlider";
import Corporate from "../components/home/Corporate";
import InnerBanner from "../components/InnerBanner";
import Solution from "../components/Solution";


const Home = () => {
    const getPost = useSelector((state) => state.homeReducer);

    useEffect(() => {
        // let param = {
        //     [ApiParamKey.type]: 'type',
        //     [ApiParamKey.location]: 'location'
        // }
        // let headers = {
        //     auth: '2JSU0A013FASDFI'
        // }
        // dispatch(fetchPosts([api_services, param, headers]))
    }, []);

    return (
        <>
            <NextSeo
                title={`Impit Limited`}
                description={'store in Dhaka'}
            />
            <InnerBanner/>
            <Corporate/>

            <About/>
            <Solution/>
            <Counter/>
            <Whyus/>
            <Leaders/>
            <BlogSlider/>
        </>
    );
};


Home.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.PHOTOS;
    await store.dispatch(fetchHome([api_services]));
});

export default Home;
