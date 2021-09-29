import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";
import './index.css';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const Index = () => (
  
  <Page>
    
    <Heading>Shopify app with Node and React 🎉</Heading>
    <Layout>

      <EmptyState // Empty state component

        heading="Discount your products temporarily"

        action={{

          content: 'Select products',

          onAction: () => this.setState({ open: true }),

        }}

        image={img}

      >

        <p>Select products to change their price temporarily.</p>
        <button onClick={() => {
    clickbtn();
  }}>aaa</button>

      </EmptyState>

    </Layout>
    <Layout>
      <p id="aaa" class="aa">!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
    </Layout>
    <script src="test.js"></script>
  </Page>
  
);

export default Index;
