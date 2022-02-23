import styled from "styled-components";
import Post from "../components/Post";
import Nav from "../components/Nav";
import Items from "../components/Items";
import { useSelector } from 'react-redux';
import { useState } from "react";

const MainContainer = styled.div`
    margin: 0 3em;
    width:100%;
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
`;

const Container = styled.div`
    margin: 0 3em;
    width:100%;
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
`;

const Box = styled.div`
    margin-left: 22em;
    width:100%;
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
`;

const SearchResult = () => {
    const posts = useSelector((state) => state.posts);
    const item = posts[0]
    const post = posts[1].similarResults
    
    const [ isLoading, setIsLoading ] = useState(true);

    return (
        <>
            {isLoading && <p>로딩중!!!!</p>}
            <Nav />
            {posts[0].name ? (
                <MainContainer>
                    {posts.map((post) => (
                        <Post
                            key={post.product_code}
                            post={post}
                        />
                    ))}
                </MainContainer>
            ) : (
                <Container>
                    <Items item={item} />
                    <Box>
                        {post.map((post) => (
                            <Post
                                key={post.product_code}
                                post={post}
                                setLoading={setIsLoading}
                            />
                        ))}
                    </Box>
                </Container>
            )}
        </>
    );
};

export default SearchResult;

