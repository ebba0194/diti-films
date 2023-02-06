import { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";
import Header from '../components/Header';

export default function PageLayout({ children }) {
  const { page: pageID } = useParams();
  const [page, setPage] = useState(null);
  
  const query = `
    {
      pageBlogPost(id: "${pageID}") {
        vimeoId
      }
    }
  `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_API_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data)
      });
  }, [query]);

  console.log(page);
  
  if (!page) {
    return "Loading...";
  }
  
  return (
    <div className="bg-black text-light font-body flex flex-col min-h-[100vh]">
      <Header />
      <div className="container mx-auto flex-grow">
        id: { pageID }
        {children}
      </div>
    </div>
  );
}