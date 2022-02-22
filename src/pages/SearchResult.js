import styled from "styled-components";
import Post from "../components/Post";


const MainContainer = styled.main`
    margin: 4em 1em;
`;

const SearchResult = () => {
    const dummy = [
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
        }]

    return (
        <MainContainer>
            <Post />
        </MainContainer>
    );
};

export default SearchResult;
