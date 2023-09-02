import { useRouter } from "next/router";

function SelectedClientProjectPage(){

    const router = useRouter();

    console.log( "The object of useRouter ", router.query );


    return (
        <div>
            <h1>The project page for a Specific Project for a Selected Client </h1>                
        </div>

    );

}
export default SelectedClientProjectPage;