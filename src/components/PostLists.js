import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const PostLists = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <div>
      { data.allFile.nodes.map((postObj) => <div>{postObj.name}</div>) }
    </div>
  )
};

export default PostLists