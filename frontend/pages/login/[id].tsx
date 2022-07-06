import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

//components
import SideBar from "../../components/Account/SideBar";
import AccountLayout from "../../components/Layout/AccountLayout";

import AccountTitle from "../../components/Account/AccountTitle";
import AccountSubTitle from "../../components/Account/AccountSubTitle";

import AccountInput from "../../components/ui-components/InputField/UserAccountInput";
import UserBusinessInput from "../../components/ui-components/InputField/UserBusinessInput";

import AccountDropDown from "../../components/ui-components/Dropdown/AccountDropDown";
import AccountTextArea from "../../components/ui-components/TextArea/AccountTextArea";

import OrderCard from "../../components/Account/OrderCard";
import OrderHistory from "../../components/Account/OrderHistory";

//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useLogout } from "../../hooks/useLogout";

type Props = {};

type IFormInput = {
  email: string;
  phone: string;
};

export default function Login({}: Props) {
  //Sidebarpages states
  const [orderView, setOrderView] = useState(false);
  const [infoView, setinfoView] = useState(false);
  const [historyView, setHistoryView] = useState(false);

  //Get the logout function
  const { logout, error } = useLogout();

  //use to sign out user
  const router = useRouter();

  //Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  //Mount "Your orders" page on pageload
  useEffect(() => {
    setOrderView(true);
  }, []);

  //Sidebar Toggle
  const handleClick = (e: any) => {
    console.log(e);
    if (e === "your orders") {
      setOrderView(true);
    } else setOrderView(false);

    if (e === "personal info") {
      setinfoView(true);
    } else setinfoView(false);

    if (e === "order history") {
      setHistoryView(true);
    } else setHistoryView(false);

    if (e === "sign out") {
      logout();
      router.push("/");
    }
  };

  const sideBarInfo = [
    {
      name: "your orders",
      icon: "/icons/envelopeIcon.svg",
      current: orderView,
    },
    {
      name: "personal info",
      icon: "/icons/personIcon.svg",
      current: infoView,
    },
    {
      name: "order history",
      icon: "/icons/orderIcon.svg",
      current: historyView,
    },
    {
      name: "sign out",
      icon: "/icons/signOutIcon.svg",
      current: false,
    },
  ];

  const handleUserFormButton: SubmitHandler<IFormInput> = (form_data: any) => {
    console.log("email:", form_data.email);
    console.log("password: ", form_data.password);
  };

  const handleBusinessFormButton: SubmitHandler<IFormInput> = (
    form_data: any
  ) => {
    console.log("email:", form_data.email);
    console.log("password: ", form_data.password);
  };

  const handlePaymentFormButton: SubmitHandler<IFormInput> = (
    form_data: any
  ) => {
    console.log("email:", form_data.email);
    console.log("password: ", form_data.password);
  };

  /* transition-all duration-75 ease-linear */

  return (
    <AccountLayout title={""} description={""} keywords={""}>
      <div className="w-full flex py-56 md:py-44 md:pl-60 md:pr-20 h-full">
        {/* ------- SideBar -------- */}
        <div className="fixed top-20 w-full py-3 md:py-0 md:w-auto md:top-0 md:left-0 md:min-w-16  md:rounded-r-3xl bg-section-blue ">
          <div className="flex px-8 w-full mt-4">
            <Image
              className="h-8 w-auto"
              src="/icons/whiteLogo.png"
              alt="venture-logo"
              width={75}
              height={45}
            />
          </div>
          <div className="flex items-center justify-between md:flex-start md:gap-10 md:mx-auto md:text-left md:mr-10">
            {sideBarInfo.map((item, idx) => (
              <div className="flex mx-auto md:mx-0 md:pl-4 " key={idx}>
                <SideBar item={item} handleClick={handleClick} />
              </div>
            ))}
          </div>
          {/* ------------------------ */}
        </div>

        {orderView && (
          <div className="w-full px-4 sm:px-12 lg:px-24">
            <AccountTitle
              title={"Your orders"}
              subTitle={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <OrderCard />
            <OrderCard />
          </div>
        )}

        {infoView && (
          <div className="w-full px-10 md:px-24 ">
            <AccountTitle
              title={"Emma Rosenlind"}
              subTitle={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <form
              onSubmit={handleSubmit(handleUserFormButton)}
              className="flex flex-col items-left justify-between w-full gap-3 pt-10"
            >
              <AccountInput
                register={register}
                emailLabel={"email"}
                phoneLabel={"phone number"}
              />
            </form>

            <hr className="bg-sign-in-input-bg h-2 w-full my-20"></hr>
            <section className="grid  lg:grid-cols-2 gap-20">
              <div className="grid-rows-1 ">
                <AccountSubTitle
                  subTitle={"Business/organisation"}
                  subParagraph={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing"
                  }
                />

                <form
                  onSubmit={handleSubmit(handleBusinessFormButton)}
                  className="flex flex-col items-left justify-between w-full gap-3 pt-10"
                >
                  <UserBusinessInput
                    companyLabel={"company name"}
                    register={register}
                  />
                  <AccountDropDown
                    title={"industry"}
                    register={register}
                    type={"industry"}
                  />
                  <AccountDropDown
                    title={"country"}
                    register={register}
                    type={"country"}
                  />
                </form>
              </div>
              <div className="grid-rows-1">
                <AccountSubTitle
                  subTitle={"payment method"}
                  subParagraph={
                    "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, "
                  }
                />
                <form
                  onSubmit={handleSubmit(handlePaymentFormButton)}
                  className="flex flex-col items-left justify-between w-full gap-3 pt-10"
                >
                  <AccountTextArea
                    register={register}
                    type={"payment_method"}
                  />
                </form>
              </div>
            </section>
          </div>
        )}

        {historyView && (
          <div className="w-full md:px-24 ">
            <AccountTitle
              title={"order history"}
              subTitle={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <OrderHistory />
          </div>
        )}
      </div>
    </AccountLayout>
  );
}
