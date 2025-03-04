export const applyTabFilter = (tab, productList = products) => {
    let filtered;
    
    if (tab === 'regular') {
      filtered = productList.filter(product => !product.isSpecial && !product.isWeeklyOffer);
    } else if (tab === 'special') {
      filtered = productList.filter(product => product.isSpecial);
    } else if (tab === 'weekly') {
      filtered = productList.filter(product => product.isWeeklyOffer);
    }
    
    // Also apply any current filters
    filtered = applyCurrentFilters(filtered);
    setFilteredProducts(filtered);
  };