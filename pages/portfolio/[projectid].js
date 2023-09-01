import {useRouter } from 'next/router'; 

function PorfolioProjectPage(){


    //access concrete data from the url 
    const router = useRouter();

    console.log("pathname ", router.pathname);
    console.log( "router query ", router.query );

    //request to a server with the id from router.query.projectid

    return (
        <div>
            <h1>The Portfolio Project Page</h1>            
        </div>
    );

}
export default PorfolioProjectPage;