import React from 'react';
import Layout from '../modules/Layout';
import BlogView from '../modules/BlogView';

class Index extends React.Component {
  static async getInitialProps({ req, url, query }) {
    const resp = await fetch(`http://localhost:5000/post/${query.postId}`);
    const post = await resp.json();
    return { post };
  }
  render() {
    return (
      <div>
        <Layout>
          <BlogView post={this.props.post} />
        </Layout>
      </div>
    )
  }
}
    //<BlogPost content={post}/>
//
export default Index;
