export const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    // Apply both tab filter and search filters
    const tabFiltered = products.filter(product => {
      if (activeTab === 'regular') return !product.isSpecial && !product.isWeeklyOffer;
      if (activeTab === 'special') return product.isSpecial;
      if (activeTab === 'weekly') return product.isWeeklyOffer;
      return true;
    });

    // Then apply the search filters
    let filtered = tabFiltered;

    if (updatedFilters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(updatedFilters.name.toLowerCase())
      );
    }
    if (updatedFilters.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(updatedFilters.category.toLowerCase())
      );
    }
    if (updatedFilters.minPrice) {
      filtered = filtered.filter((product) => product.price >= parseFloat(updatedFilters.minPrice));
    }
    if (updatedFilters.maxPrice) {
      filtered = filtered.filter((product) => product.price <= parseFloat(updatedFilters.maxPrice));
    }
    if (updatedFilters.inStock === 'true') {
      filtered = filtered.filter((product) => product.stock > 0);
    }
    
    setFilteredProducts(filtered);
  };