import { usePageContext } from "vike-react/usePageContext";
import Error404Page from "../../components/errors/404Page";

export default function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return <Error404Page />;
  }
  return (
    <>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
