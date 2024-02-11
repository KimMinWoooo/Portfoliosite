import ProjectItem from "@/components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config/index";

function Projects({ projects }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
        {projects.results.map((aProject) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </div>
  );
}

export default Projects;


// getServerSideProps를 쓴다면 요청 마다 호출하고
// getStaticProps를 쓴다면 빌드 타임에 호출한다. -> 요청이 들어올때마다 페이지가 만들어지길 기다려야한다.
// 항상 바뀌는 데이터가 없거나 인증같이 요청 객체에 접속할 필요가 없다면 getStaticProps 가 더 낫다.
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],

      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.이름.title[0].plain_text
  );

//   console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
    revalidate: 60 // 60초마다 서버에서 페이지를 다시 생성
  };
}
