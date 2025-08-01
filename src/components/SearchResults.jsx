import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('q')?.toLowerCase(); // lowercase for matching
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    // Define mappings
    const routeMap = {
      ethnic: '/ethnic',
      westerndress: '/westerndress',
      menswear: '/menswear',
      footwear: '/footwear',
      home: '/home',
      beauty: '/beauty',
      accessories: '/accessories',
    };

    // Redirect if match found
    if (routeMap[query]) {
      navigate(routeMap[query]);
    }
  }, [query, navigate]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-[#E71665]">Search Results</h2>
      {query ? (
        <p className="text-gray-700">
          You searched for: <span className="font-semibold">{query}</span> <br />
          Redirecting...
        </p>
      ) : (
        <p>No search term provided.</p>
      )}
    </div>
  );
};

export default SearchResults;
