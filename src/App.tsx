import { Listing } from './components/Listing/Listing';
import etsyData from './data/etsy.json';
import type { Product } from './types/listing';

function App() {
  const items = etsyData as Product[];

  return (
    <div className="container">
      <div className="product-grid">
        <Listing items={items} />
      </div>
    </div>
  );
}

export default App;