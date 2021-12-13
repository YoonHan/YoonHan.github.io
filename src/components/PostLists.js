import * as React from 'react';
import Post from './Post';


const listWrapperStyles = {
  borderTop: '1px solid lightgrey',
  paddingTop: '20px',
}

const PostLists = ({ allMdxData }) => {

  return (
    <section style={listWrapperStyles}>
      { allMdxData.nodes.map((mdxData) => <Post mdxData={mdxData}></Post>)}
    </section>
  )
};

export default PostLists