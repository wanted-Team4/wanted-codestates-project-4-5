import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Post from "../components/Post";
import Nav from "../components/Nav";
import axios from 'axios';
import { setPost } from "../actions/coordinate";
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

    return (
        <>
            <Nav />
            <MainContainer>
                {posts.map((post) => (
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

