import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Nav from "../components/Nav";

const Wrap = styled.div`
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
    //image_url / product_code 검색 데이터
    const [ regionData, setRegionData ] = useState([]);
    //Keyword 검색 데이터
    const [ productData, setProductData ] = useState([]);
    //검색 결과 데이터
    const [ searchData, setSearchData ] = useState([]);
    const searchInput = useRef(null);

    //검색 함수
    const search = () => {
        const value = searchInput.current.value;
        const checkKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const isKorean = (checkKr.test(value)) ? true : false;

        if(value==="") {
            alert("검색어를 입력해주세요.");
            return; 
        }
        
        //키워드 검색 (검색어가 한글일 경우)
        if(isKorean) {
            const foundResults = productData.filter((item)=> item.name.split("_")[0] === value);
            setSearchData(foundResults);

        } 
        else {
            //image_url 검색
            if(value.includes("https")) {
                //검색어와 일치하는 아이템
                const matchedResult = regionData.filter((item)=> item.image_url === value);
                //검색어와 같은 카테고리의 아이템 목록
                const similarResults = regionData.filter((item)=> item.category_names[0] === matchedResult[0].category_names[0]);
                setSearchData([...matchedResult, {similarResults}]);
            } 
            //product_code 검색
            else if(!isNaN(value)) {
                //검색어와 일치하는 아이템
                const matchedResult = regionData.filter((item)=> item.product_code == value);
                //검색어와 같은 카테고리의 아이템 목록
                const similarResults = regionData.filter((item)=> item.category_names[0] === matchedResult[0].category_names[0]);
                setSearchData([...matchedResult, {similarResults}]);
            }
        }
    };

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
                <SearchBar type="text" placeholder="IMAGE URL or KEYWORD" ref={searchInput} />
                <SearchBtn
                    onClick={search}
                >검색</SearchBtn>
            </Search>
        </Wrap>
    );

    //데이터 호출
    function callData() {
        const product = "https://static.pxl.ai/problem/data/products.json";
        const region = "https://static.pxl.ai/problem/data/regions.json";

        const requestProduct = axios.get(product);
        const requestRegion = axios.get(region);

        axios
        .all([requestProduct, requestRegion])
        .then(axios.spread((...responses)=> {
            const productResults = [...responses][0].data;
            const regionResults = [...responses][1].data;
            
            setProductData(productResults);
            setRegionData(regionResults);
        }));
    };
};

export default Question1;
