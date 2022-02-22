import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Post from "../components/Post";
import Nav from "../components/Nav";
import Items from "../components/Items";
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
    margin: 0 3em;
    width:100%;
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
`;

const SearchResult = () => {
    const posts = useSelector((state) => state.posts);
    const item = posts[0]
    const post = posts[1].similarResults
    console.log(post)

    return (
        <>
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
                <MainContainer>
                    <Items item={item} />
                    {post.map((post) => (
                        <Post
                            key={post.product_code}
                            post={post}
                        />
                    ))}
                </MainContainer>
            )}
        </>
    );
};

export default SearchResult;

