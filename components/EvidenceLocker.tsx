
import { FC } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

// Define the type for a single merch item
interface MerchItem {
  id: number;
  name: string;
  imageUrl: string;
  etsyUrl: string;
  evidenceBagUrl: string;
}

// Mock data for top 3 merch items
const merchItems: MerchItem[] = [
  {
    id: 1,
    name: "Toe Tag Awards Classic Tee",
    imageUrl: "https://i.imgur.com/example-shirt.png", // Replace with actual image URL
    etsyUrl: "https://www.etsy.com/shop/ToeTagAwards",
    evidenceBagUrl: "https://i.imgur.com/example-bag.png", // Replace with actual evidence bag overlay
  },
  {
    id: 2,
    name: "TTA Sticker Pack",
    imageUrl: "https://i.imgur.com/example-stickers.png", // Replace with actual image URL
    etsyUrl: "https://www.etsy.com/shop/ToeTagAwards",
    evidenceBagUrl: "https://i.imgur.com/example-bag.png",
  },
  {
    id: 3,
    name: "Limited Edition Signed Poster",
    imageUrl: "https://i.imgur.com/example-poster.png", // Replace with actual image URL
    etsyUrl: "https://www.etsy.com/shop/ToeTagAwards",
    evidenceBagUrl: "https://i.imgur.com/example-bag.png",
  },
];

const EvidenceLocker: FC = () => {
  return (
    <section id="merch" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-10 text-center font-display uppercase tracking-wider">
            The Evidence Locker
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={200 * (index + 1)}>
              <a href={item.etsyUrl} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  <div className="relative">
                    {/* Product Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-auto rounded-md"
                    />
                    {/* Evidence Bag Overlay */}
                    <img
                      src={item.evidenceBagUrl}
                      alt="Evidence Bag"
                      className="absolute top-0 left-0 w-full h-full opacity-70 group-hover:opacity-50 transition-opacity duration-300 group-hover:animate-swing"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4 text-center">{item.name}</h3>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceLocker;
