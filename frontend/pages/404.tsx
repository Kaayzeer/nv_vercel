import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import LinkButton from "../components/ui-components/Button/LinkButton";
import Banner from "../components/Banner/Banner";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found" keywords="" description="">
      <Banner page={"404"} title={"404"} subTitle={"oops page not found!"} />
    </Layout>
  );
}

{
  /* <div className="w-full">
<div className="customContainer">
  <div className="flex-start md:w-1/2 mx-auto">
    <FaExclamationTriangle className="h-14 w-14 mx-auto" />
    <h1 className="section-title mx-auto">404</h1>
    <h3 className="section-sub-title mx-auto">oops page not found!</h3>
    <LinkButton
      linkHref={"/home"}
      color={"text-white"}
      buttonText={"back to home"}
      type={"formBtn"}
    />
  </div>
</div>
</div> */
}
