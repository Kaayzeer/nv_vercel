export const QueryPages = (variable: any) => {
  const queryPage =
    variable.query.slug?.toString() === "find"
      ? "find"
      : variable.query.slug?.toString() === "sell"
      ? "sell"
      : variable.query.slug?.toString() === "buy"
      ? "buy"
      : "find";

  const title =
    variable.query.slug?.toString() === "find"
      ? "pick and choose"
      : variable.query.slug?.toString() === "sell"
      ? "monetize it"
      : variable.query.slug?.toString() === "buy"
      ? "go get it"
      : "";

  const subTitle =
    variable.query.slug?.toString() === "find"
      ? "Start your journey with an expertly curated selection of suitable brand name domains."
      : variable.query.slug?.toString() === "buy"
      ? "When the perfect domain is taken - rise to the challenge and reap the rewards."
      : variable.query.slug?.toString() === "sell"
      ? "Don’t sleep on valuable domain assets. Let us help you sell them and turn them into useful capital.  "
      : "";

  const sectionTitle =
    variable.query.slug?.toString() === "find"
      ? "name it"
      : variable.query.slug?.toString() === "sell"
      ? "sell your domain"
      : variable.query.slug?.toString() === "buy"
      ? "Buy pilot "
      : "";

  const sectionSubTitle =
    variable.query.slug?.toString() === "find"
      ? "Settling for a name is tricky. We help you find and select options and to map out a plan, so that you can concentrate on business. Negotiation, acquisition or transaction not included, but an optional next step."
      : variable.query.slug?.toString() === "sell"
      ? "The aftermarket is a strange place. We help you track down owners and find out if they are interested in selling. Negotiation, acquisition or transaction not included, but an optional next step."
      : variable.query.slug?.toString() === "buy"
      ? "Can I sell it? We help you determine if and how your domain name can be sold. Negotiation or transaction not included, but an optional next step."
      : "";

  return { queryPage, title, subTitle, sectionTitle, sectionSubTitle };
};
