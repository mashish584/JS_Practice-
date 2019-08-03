export default ({ property = "all", timing = 0.3, ease = "ease-in" }) => `
   transition : ${property} ${timing}s ${ease};
`;
