const paging = function(result, page, perPage) {
    result.last_page = Math.ceil(result.total / perPage);
    result.per_page =  perPage;
    result.current_page =  page; 
    const offset = (page - 1) * perPage;   
    result.from = offset;
    result.to =  offset + result.results.length;
    return result;
};


module.exports = paging