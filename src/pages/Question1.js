import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Nav from "../components/Nav";

const  Wrap = styled.div`
    width: 100%;
`;

const SubTitle = styled.h2`
    font: normal 30px/1.5 "inherit";
    text-align: center;
    color: #444;
    margin-top: 70px;
    margin-bottom: 100px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Search = styled.div`
    display: flex;
    width: 60vw;
    max-width: 800px;
    min-width: 400px;
    margin: 0 auto;
`;

const SearchBar = styled.input`
    width: calc(100% - 80px - 20px);
    height: 35px;
    margin-right: 20px;
    border-radius: 20px;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
    padding: 0px 20px;
    font-size: 12px;
    outline: none;

    ::placeholder {
        color: #999;
    }
`;

const SearchBtn = styled.button`
    width: 80px;
    border: none;
    border-radius: 10px;
    color: #333;
    font: bold 16px/1 "inherit";
    cursor: pointer;
`;

const Question1 = () => {
    useEffect(()=> {
        callData();
    }, []);

    return (
        <Wrap>
            <Nav />

            <SubTitle>
                <Bold>Artificial Intelligence</Bold> <br /> 
                PXL <Bold>Fashion</Bold> Viewer
            </SubTitle>

            <Search>
                <SearchBar type="text" placeholder="IMAGE URL or KEYWORD" />
                <SearchBtn>검색</SearchBtn>
            </Search>
        </Wrap>
    );

    async function callData() {
        await axios
        .get("https://static.pxl.ai/problem/data/products.json")
        .then((data)=> {
            console.log(data);
        });
    };
};

export default Question1;