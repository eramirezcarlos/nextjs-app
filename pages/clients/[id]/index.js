import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log("object is ", router.query);

  function loadProjectHandler() {
    //load data ..
    //router push is equal to Link component
    // router.push('max/project_a');
    router.push({
      pathname: "[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "project_a",
      },
    });
  }

  return (
    <div>
      <h1>The projects of a Given Client </h1>
      <button onClick={loadProjectHandler}>Load Project A </button>
    </div>
  );
}
export default ClientProjectPage;
