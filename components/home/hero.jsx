import Animation from "@/components/home/animation";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
          <Link href="/project">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
