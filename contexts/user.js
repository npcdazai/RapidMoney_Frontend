"use client"

import endpoints from "@/constants/endpoints";
import requests from "@/utils/api";
import { message } from "antd";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [promoSection, setPromoSection] = useState([])
    const [promoLoading, setPromoLoading] = useState(true);
    // console.log(loginStatus)

    // const login = async () => {

    //     try {
    //         setLoading(true);
    //         const api = requests();
    //         const response = await api.get(endpoints.me);
    //         console.log(response);

    //         if (response?.status) {
    //             setLoginStatus("logged_in");
    //             setUser(response.data || {});
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         message.error(error.message || 'An error occurred during login.');
    //     }

    // }
    // const login = async () => {
    //     try {
    //         setLoading(true);
    //         const api = requests();
    //         const response = await api.get(endpoints.me);

    //         if (response?.status) {
    //             setLoginStatus("logged_in");
    //             setUser(response.data || {});
    //         } else {
    //             setLoginStatus("logged_out"); // ✅ handle failed auth
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         setLoginStatus("logged_out"); // ✅ set status if API fails
    //         message.error(error.message || 'An error occurred during login.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    // const logout = async () => {
    //     try {
    //         setLoading(true);
    //         const api = requests();
    //         const response = await api.get(endpoints.customer_logout);
    //         console.log(response);

    //         if (response?.status) {
    //             setLoginStatus("logged_out");
    //             setUser({});
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         message.error(error.message || 'An error occurred during logout.');
    //     }
    // }

    // useEffect(() => {
    //     login();
    // }, []);
    // console.log(loginStatus);
    // console.log(user);

    const fetchPromoData = async () => {
        try {
            const api = requests();
            const response = await api.get(endpoints.get_cms_page + '/promo-section');
            // console.log(response.data);
            setPromoSection(response?.data?.pageData?.promoSection)
        } catch (error) {
            console.log(error)
        } finally {
             setPromoLoading(false);
        }

    }

    useEffect(() => {
        fetchPromoData()
    }, [])

    return (
        <UserContext.Provider value={{ promoSection, promoLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };