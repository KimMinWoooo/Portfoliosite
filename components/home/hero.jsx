import Animation from "./animation";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          매일 한걸음씩 나아가는 우코딩
          <br className="hidden lg:inline-block" />
          Frontend 개발자
        </h1>
        <p className="mb-8 leading-relaxed">
          재물을 스스로 만들지 않는 사람에게는 쓸 권리가 없듯이 행복도 스스로
          만들지 않는 사람에게는 누릴 권리가 없다.
        </p>
        <div className="flex justify-center">
          <Link href="/project" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}

export default Hero;
