import styled from "styled-components";
import { SerchInput } from "../molecules/SeachInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    name: `jjj${val}`,
    email: "123.com",
    phone: "090*-59",
    conpany: {
      name: "株式会社"
    },
    website: "https://www.google.com/?hl=ja"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザーページ</h2>
      <SerchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  width: 100%;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
