import React from "react";

type Props = {};

const policySteps = {
  title: "Terms and policy",

  subTitle1: "Rubrik 1",

  pOne1:
    "3.11 Provider/Rentor hereby appoints Contractor as its agent for the limited purpose of receiving payments from Transferees/Rentees. The Provider/Rentor agrees that the full payment of the Domain Name Price to Contractor, or monthly instalment or rental payment (in the case of a Lease to Own Agreement or Rental Agreement), constitutes final payment to Provider/Rentor extinguishing the Transferee's/Rentee's payment obligation to the Provider/Rentor as if the Transferee/Rentee had paid the Provider/Rentor directly, even if payment is not received by Provider/Rentor from Contractor. Contractor, not the Transferee/Rentee, is solely liable to the Provider/Rentor if Contractor fails to remit payments received from Transferee/Rentee to the Provider/Rentor.",

  pOne2:
    "3.12 In the case of a domain name purchase, Contractor shall retain the funds received in connection with a domain name purchase until successful transfer of the domain name to the Transferee. In connection with the Lease to Own Agreement or Rental Agreement, Contractor shall retain the first monthly instalment or rental payment until successful transfer of the domain name to Contractor. If you are a Transferee/Rentee, you acknowledge and agree that Contractor is not holding funds on your behalf. If you are a Provider/Rentor, you acknowledge and agree that you have requested that the settlement of funds to you be delayed as provided in this Clause 3.12. Nothing in this Clause 3.12 shall affect the fact that the Transferee's or Rentee's payment obligation for the domain name is fully satisfied upon receipt of funds by Contractor as set forth in Clause 3.11.",

  subTitle2: "Rubrik 2",

  pTwo1:
    "3.11 Provider/Rentor hereby appoints Contractor as its agent for the limited purpose of receiving payments from Transferees/Rentees. The Provider/Rentor agrees that the full payment of the Domain Name Price to Contractor, or monthly instalment or rental payment (in the case of a Lease to Own Agreement or Rental Agreement), constitutes final payment to Provider/Rentor extinguishing the Transferee's/Rentee's payment obligation to the Provider/Rentor as if the Transferee/Rentee had paid the Provider/Rentor directly, even if payment is not received by Provider/Rentor from Contractor. Contractor, not the Transferee/Rentee, is solely liable to the Provider/Rentor if Contractor fails to remit payments received from Transferee/Rentee to the Provider/Rentor.",

  pTwo2:
    "3.12 In the case of a domain name purchase, Contractor shall retain the funds received in connection with a domain name purchase until successful transfer of the domain name to the Transferee. In connection with the Lease to Own Agreement or Rental Agreement, Contractor shall retain the first monthly instalment or rental payment until successful transfer of the domain name to Contractor. If you are a Transferee/Rentee, you acknowledge and agree that Contractor is not holding funds on your behalf. If you are a Provider/Rentor, you acknowledge and agree that you have requested that the settlement of funds to you be delayed as provided in this Clause 3.12. Nothing in this Clause 3.12 shall affect the fact that the Transferee's or Rentee's payment obligation for the domain name is fully satisfied upon receipt of funds by Contractor as set forth in Clause 3.11.",
};

export default function Policy({}: Props) {
  return (
    <section className="flex flex-col items-center justify-start py-10 md:py-60 min-h-699 gap-10">
      <div className="mx-auto">
        <h1 className="section-title">{policySteps.title}</h1>
      </div>
      <div className="space-y-3">
        <h2 className="section-sub-title ">{policySteps.subTitle1}</h2>
        <p className="section-paragraph">{policySteps.pOne1}</p>
        <p className="section-paragraph">{policySteps.pOne2}</p>
      </div>

      <div className="space-y-3">
        <h2 className="section-sub-title">{policySteps.subTitle2}</h2>
        <p className="section-paragraph">{policySteps.pTwo1}</p>
        <p className="section-paragraph">{policySteps.pTwo2}</p>
      </div>
    </section>
  );
}
