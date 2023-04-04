import ContainerBlock from "../components/ContainerBlock";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Hero from "@components/Hero";


export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Nick Ahlers - Developer. IT Pro."
    >
      <Hero />
      <LatestCode repositories={repositories} />
      
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
