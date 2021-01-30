import React from 'react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

export default function Hamada(){
    return <Layout title={`hamada`}  >
    <Sidebar />
    <Page title="hamada">
      <h1 >hamada</h1>
    </Page>
  </Layout>
}