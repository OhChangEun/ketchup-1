import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

const Wrapper = styled.div`
  position: relative;
`;
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 40vh;
  margin-top: 5vh;
  border-radius: 10%;
`;

const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 80%;
  padding: 2vw;

  .name {
    text-align: center;
    font-weight: bold;
    font-size: 6vw;
  }

  .location {
    text-align: center;
  }
`;

const ResInfo = () => {
  const { id } = useParams();
  const Location = useLocation();

  const params = new URLSearchParams(Location.search);

  const name = params.get("name");
  const img = params.get("img");
  const star = params.get("star");
  const location = params.get("location");

  return (
    <Wrapper>
      <Image img src={img} alt={name} />
      <Container>
        <p className="name">{name}</p>
        <p className="star">{star}</p>
        <p className="location">
          <FaLocationDot />
          {location}
        </p>
      </Container>
    </Wrapper>
  );
};

export default ResInfo;
