import {Provider} from 'react-redux';
import store from './api/store'
import {wrapper} from "./api/store";
import Menu from "../components/Menu";
import GlobalStyle from "../styles/globalStyle";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {AnimatePresence} from "framer-motion";
import Router, {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import "lightgallery.js/dist/css/lightgallery.css";
import 'swiper/css';

function MyApp({Component, pageProps}) {

    const router = useRouter()

    wrapper.getInitialAppProps(
        (store) =>
            async ({Component, ctx}) => {
                // Wait for all page actions to dispatch
                const pageProps = {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps({...ctx, store})
                        : {}),
                };

                // 2.1 Stop if on server
                if ((ctx.req) && Component.getInitialProps) {
                    // store.dispatch(END)
                    // used in hydration reducer
                    store.dispatch({type: SET_IS_SERVER})
                }

                // getServerSideProps is used
                const isServer = !ctx.req?.url?.startsWith("/_next");
                if (isServer && !Component.getInitialProps) {
                    // used in hydration reducer
                    store.dispatch({type: SET_IS_SERVER});
                }

                // 3. Return props
                return {
                    pageProps,
                };
            }
    );

    return (
        // <Provider store={store}>
        <>
            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>
            <DefaultSeo {...SEO}/>
            <GlobalStyle/>
            <Menu/>
            <AnimatePresence exitBeforeEnter>
                <Component key={router?.pathname} {...pageProps} />
            </AnimatePresence>
        </>

        // </Provider>
    )
}

export default wrapper.withRedux(MyApp)
