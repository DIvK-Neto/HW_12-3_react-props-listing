import './Listing.css';
import type { Product } from '../../types/listing';

interface ListingProps {
  items: Product[];
}

export const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const getCurrencySymbol = (code: string): string => {
    switch (code) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      default:
        return code + ' ';
    }
  };

  const getStockLevelClass = (quantity: number): string => {
    if (quantity <= 10) return 'stock-badge stock-low';
    if (quantity <= 20) return 'stock-badge stock-medium';
    return 'stock-badge stock-high';
  };

  const truncateTitle = (title: string, maxLength: number = 50): string => {
    if (title.length <= maxLength) return title;
    return title.slice(0, maxLength).trim() + '…';
  };


  const validItems = items.filter(
    (item) => item.state !== 'removed' && item.MainImage?.url_570xN
  );

  return (
    <>
      {validItems.map((item) => (
        <div className="product-card" key={item.listing_id}>
          <img
            src={item.MainImage.url_570xN}
            alt={item.title}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-title">{truncateTitle(item.title)}</h3>
            <div className="price-container">
              <div className="product-price">
                {getCurrencySymbol(item.currency_code)}
                {item.price}
              </div>
              <div className={getStockLevelClass(item.quantity)}>
                {item.quantity} left
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};