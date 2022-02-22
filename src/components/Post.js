import styled from "styled-components";

const MainContainer = styled.div`
    width: 19vh;
    height: 33vh;
    border: 1px solid #EFEFEF;
    box-shadow: 5px 5px 7px 0px rgba(217, 217, 217, 1);
    margin: 1vh;
    transition: 0.3s;

    :hover{
        cursor: pointer;
        transform: translateY(-10px);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 25vh;
`;

const ProductName = styled.p`
    font-size: 0.9em;
    margin: 0.6em;
`;

const ProductPrice = styled.p`
    font-size: 1em;
    float: right;
    color: #8A39E1;
    margin-right: 0.5em;
    margin-top: 0em;
`;

const Post = ({ post }) => {
    const { image_url, name, price } = post

    const number = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <MainContainer>
            <ProductImage src={image_url} alt="제품 이미지" />
            <ProductName>{name}</ProductName>
            <ProductPrice>{`₩ ${number}`}</ProductPrice>
        </MainContainer>
    );
};

export default Post;