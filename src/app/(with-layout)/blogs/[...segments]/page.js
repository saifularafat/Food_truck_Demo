'use client'

import { useParams, useSearchParams } from "next/navigation";

const SinglePage = ({ params, searchParams }) => {
    const [blogId, id] = params?.segments || [];

    const params1 = useParams();
    const searchParams1 = useSearchParams();
    console.log("params clg",params1.segments,"searchParams clg", searchParams1.get('title'));

    return (
        <div>
            <h3>Dynamic Blog page in the {blogId || []} of {id}</h3>
           <br />
            {
                searchParams.title
            }
        </div>
    );
};

export default SinglePage;