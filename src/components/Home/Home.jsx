import Posts from "../Common/Posts/Posts";
import Follow from "./UserToFollow/Follow";
import Discover from "../Demo/Discover";

const Home = () => {
  return (
    <section className="size flex gap-[5rem] relative">
      <div className="flex-[2] py-10 mb-[4rem]">
        <Posts />
      </div>
      <div className="hidden md:inline-block md:w-[21rem] p-8 border-l border-gray-300">
        <h3>Who to follow?</h3>
        <Follow />
        <Discover />
      </div>
    </section>
  );
};

export default Home;
