import { RocketIcon, FileTextIcon, PawPrintIcon, SmartphoneIcon, BackpackIcon, GlassesIcon } from 'lucide-react';

const categories = [
  { name: 'Gadgets', count: 12, icon: <SmartphoneIcon size={28} /> },
  { name: 'Documents', count: 8, icon: <FileTextIcon size={28} /> },
  { name: 'Pets', count: 5, icon: <PawPrintIcon size={28} /> },
  { name: 'Bags', count: 9, icon: <BackpackIcon size={28} /> },
  { name: 'Accessories', count: 15, icon: <GlassesIcon size={28} /> },
  { name: 'Others', count: 3, icon: <RocketIcon size={28} /> },
];

const PopularItems = () => {
  return (
     <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group shadow-2xl rounded-xl p-6 flex items-center gap-4 hover:bg-green-700 transition"
            >
              <div className="bg-green-50 text-green-600 rounded-lg p-3 group-hover:bg-white group-hover:text-green-700 transition">
                {cat.icon}
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white transition">
                  {cat.name}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-white transition">
                  ({cat.count} items)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
