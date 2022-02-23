import styled from "styled-components";
import Post from "../components/Post";
import Nav from "../components/Nav";
import Items from "../components/Items";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../components/Loading";

const MainContainer = styled.div`
  margin: 0 3em;
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin: 0 3em;
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  @media screen and (max-width: 40rem) {
    margin: 0 3em;
  }
  @media screen and (max-width: 30rem) {
    margin: 0 1.4em;
  }
`;

const Box = styled.div`
  margin-left: 22em;
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  @media screen and (max-width: 40rem) {
    margin-left: 2em;
    margin-top: 45em;
  }
  @media screen and (max-width: 30rem) {
    margin-left: 3.5em;
    margin-top: 45em;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 100px;
`;

const MoreBtn = styled.button`
  margin: 0 auto;
  background: #8a39e1;
  padding: 10px 15px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font: bold 14px/1 "inherit";
  letter-spacing: 1px;
  cursor: pointer;
`;

const SearchResult = () => {
  const posts = useSelector((state) => state.posts);
  const item = posts[0];
  const post = posts[1].similarResults;

  //로딩
  const [isLoading, setIsLoading] = useState(true);
  //검색어 타입이 키워드인지 코드/url인지 구분
  const isKeyword = posts[1].hasOwnProperty("similarResults") ? false : true;
  //검색 목록 개수
  const totalLen = isKeyword ? posts.length : post.length;

  //보여지는 포스트 개수
  const [postIndex, setPostIndex] = useState(30);
  //보여지는 포스트 목록 배열
  const showPosts = isKeyword
    ? posts.filter((item, index) => index < postIndex)
    : post.filter((item, index) => index < postIndex);

  return (
    <>
      {isLoading && <Loading />}
      <Nav />
      {posts[0].name ? (
        <MainContainer>
          {showPosts.map((post, index) => (
            <Post
              key={post.product_code}
              post={post}
              setLoading={setIsLoading}
            />
          ))}
        </MainContainer>
      ) : (
        <Container>
          <Items item={item} />
          <Box>
            {showPosts.map((post, index) => (
              <Post
                key={post.product_code}
                post={post}
                setLoading={setIsLoading}
              />
            ))}
          </Box>
        </Container>
      )}

      {totalLen >= postIndex && (
        <BtnContainer>
          <MoreBtn onClick={() => setPostIndex(postIndex + 30)}>MORE</MoreBtn>
        </BtnContainer>
      )}
    </>
  );
};

export default SearchResult;
