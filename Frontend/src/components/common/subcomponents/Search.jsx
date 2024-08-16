import React, { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

  const searchRef = useRef(null); // Ref for the search box and dropdown

  const fetchResults = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setResults([]);
        setSearchCompleted(false);
        setDropdownVisible(false);
        return;
      }

      setLoading(true);
      setError('');
      setSearchCompleted(false);
      try {
        const response = await axios.post('http://localhost:5000/api/search', { query });
        console.log('Search Response:', response.data);
        setResults(response.data);
        setDropdownVisible(true); // Show dropdown when there are results
      } catch (error) {
        setError('Error fetching search results. Please try again.');
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
        setSearchCompleted(true);
      }
    }, 300),
    []
  );

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    fetchResults(newQuery);
  };

  const handleResultClick = () => {
    setDropdownVisible(false); // Hide dropdown when a result is clicked
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setDropdownVisible(false); // Hide dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError('');
    } else if (searchCompleted && results.length === 0) {
      toast.error('No results found');
    }
  }, [error, searchCompleted, results]);

  return (
    <div className='relative flex flex-col w-full' ref={searchRef}>
      <div className='flex w-full sm:w-[10vw] md:w-[10vw] lg:w-[20vw] border border-pink-400 rounded-lg'>
        <input
          className='border rounded-l-lg p-1 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500'
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          aria-label="Search"
        />
        <button 
          className='p-1 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 transition flex-shrink-0'
          onClick={() => fetchResults(query)}
          disabled={loading}
          aria-label="Search Button"
        >
          {loading ? 'Loading...' : <FaSearch />}
        </button>
      </div>
      {dropdownVisible && (
        <div className='relative'>
          <ul className='absolute top-full left-0 md:w-[45vw] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50'>
            {results.length > 0 ? (
              results.map((result) => (
                <Link 
                  key={result._id} 
                  to={`/Productslist/${result.category}`}
                  className='text-black-500 hover:underline'
                  onClick={handleResultClick}
                >
                  <li className='p-4 border-b flex items-center gap-4 border-gray-200 hover:bg-pink-100 cursor-pointer'>
                    <FaSearch />
                    <h3 className='font-semibold text-lg'>{result.title || 'No title'}</h3>
                  </li>
                </Link>
              ))
            ) : (
              <li className='p-4 border-b border-gray-200'>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
