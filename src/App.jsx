import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SeachInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/Mv9hjnEUHR4",
  name: "jjj",
  email: "123.com",
  phone: "090*-59",
  conpany: {
    name: "株式会社"
  },
  website: "https://www.google.com/?hl=ja"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>うんこ</SecondaryButton>
      <br />
      <SerchInput />
      <UserCard user={user} />
    </div>
  );
}
