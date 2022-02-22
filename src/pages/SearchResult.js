import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Post from "../components/Post";
import Nav from "../components/Nav";
import axios from 'axios';

const MainContainer = styled.div`
    margin: 0 3em;
    width:100%;
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
`;

const SearchResult = () => {
    const [productResults, setProductResults] = useState([]);
    const [regionResults, setRegionResults] = useState([]);
    // const [filteredData, setFilteredData] = useState(keywordData);

    useEffect(() => {
        axios('https://static.pxl.ai/problem/data/products.json')
            .then(response => {
                console.log(response.data)
                setProductResults(response.data);
                // setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    const post = [
        {
            product_code: 1,
            name: "조끼_070",
            image_url: "https://static.pxl.ai/problem/images/VT-070.jpg",
            price: 45065,
            category_names: [
                "c1.tops",
                "c2.outwears",
                "c3.vests"
            ]
        },
        {
            product_code: 2,
            name: "원피스_019",
            image_url: "https://static.pxl.ai/problem/images/OP-019.jpg",
            price: 34592,
            category_names: [
                "c1.onepiece",
                "c2.dresses",
                ""
            ]
        },
        {
            product_code: 3,
            name: "자켓_093",
            image_url: "https://static.pxl.ai/problem/images/JK-093.jpg",
            price: 20544,
            category_names: [
                "c1.tops",
                "c2.outwears",
                "c3.jackets"
            ]
        },
        {
            product_code: 4,
            name: "자켓_087",
            image_url: "https://static.pxl.ai/problem/images/JK-087.jpg",
            price: 23371,
            category_names: [
                "c1.tops",
                "c2.outwears",
                "c3.jackets"
            ]
        },
        {
            product_code: 5,
            name: "조끼_064",
            image_url: "https://static.pxl.ai/problem/images/VT-064.jpg",
            price: 33901,
            category_names: [
                "c1.tops",
                "c2.outwears",
                "c3.vests"
            ]
        },
        {
            product_code: 6,
            name: "원피스_025",
            image_url: "https://static.pxl.ai/problem/images/OP-025.jpg",
            price: 18965,
            category_names: [
                "c1.onepiece",
                "c2.dresses",
                ""
            ]
        },
        {
            product_code: 7,
            name: "조끼_064",
            image_url: "https://static.pxl.ai/problem/images/VT-064.jpg",
            price: 33901,
            category_names: [
                "c1.tops",
                "c2.outwears",
                "c3.vests"
            ]
        },
        {
            product_code: 8,
            name: "원피스_025",
            image_url: "https://static.pxl.ai/problem/images/OP-025.jpg",
            price: 18965,
            category_names: [
                "c1.onepiece",
                "c2.dresses",
                ""
            ]
        },
        {
            product_code: 9,
            name: "원피스_025",
            image_url: "https://static.pxl.ai/problem/images/OP-025.jpg",
            price: 18965,
            category_names: [
                "c1.onepiece",
                "c2.dresses",
                ""
            ]
        },
    ]


    return (
        <>
            <Nav />
            <MainContainer>
                {post.map((post) => (
                    <Post
                        key={post.product_code}
                        post={post}
                    />
                ))}
            </MainContainer>
        </>
    );
};

export default SearchResult;

