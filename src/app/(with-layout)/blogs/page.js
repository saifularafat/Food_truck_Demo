
"use client"
import Link from "next/link";
// import { useRouter } from "next/navigation";

const blogsContent = [
    {
        id: 11,
        title: 'Year Blog',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi aliquid exercitationem laudantium soluta sapiente magnam sunt pariatur veritatis veniam! ",
        years: '01/4/2023'
    },
    {
        id: 33,
        title: 'Web Text Blog',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi aliquid exercitationem laudantium soluta sapiente magnam sunt pariatur veritatis veniam! ",
        years: '17/06/2023'
    },
    {
        id: 44,
        title: 'Text Content Blog',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi aliquid exercitationem laudantium soluta sapiente magnam sunt pariatur veritatis veniam! ",
        years: '22/08/2023'
    },
]


const BlogsPage = () => {
    // const router = useRouter();
    return (
        <div>
            <h2>Blog Page</h2>
            {
                blogsContent.map(({ id, title, desc, years }) => <li key={id} className="list-none text-lg text-sky-600 underline">
                    <Link href={{
                        pathname: `/blogs/${years}/${id}`,
                        query: {
                            title: `blogs ${id}`
                        }
                    }}>
                        {title}
                    </Link>
                    {/* <button 
                    className="border-2 border-blue-400 py-2 px-4 my-2" 
                    onClick={() => router.push(`/blogs/${years}/${id}?title=${title}${id}`)}>
                        {title}
                    </button> */}
                </li>)
            }
        </div>
    );
};

export default BlogsPage;