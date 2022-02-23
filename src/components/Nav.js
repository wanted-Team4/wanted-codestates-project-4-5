import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
`;

const Logo = styled.img`
    width: 70px;
`;

const Nav = ()=> {
    return (
        <Container>
            <h1>
                <Link to="/question1">
                    <Logo src={process.env.PUBLIC_URL + "/image/logo_pxl_b.png"} alt="로고 이미지" />
                </Link>
            </h1>
        </Container>
    )
}

export default Nav;