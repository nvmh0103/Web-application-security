const pagination = (data, page, limit) => {
    let length = data.length;
    let recordIndexEnd = page * limit;
    let recordIndexStart = (page-1) * limit;
    if (recordIndexEnd > length){
        recordIndexEnd = length;
    }
    // calculate total pages
    let totalPage = Math.ceil(length / limit);
    let returnData = data.slice(recordIndexStart, recordIndexEnd);
    // determine has next page or not
    let hasNextPage = page < totalPage ? 1 : 0;
    let hasPreviousPage = page > 1 ? 1 : 0;
    return {
        returnData,
        paginationData: {
            currentPage: parseInt(page),
            hasNextPage,
            hasPreviousPage,
            totalPage
        }
    }
}
module.exports = pagination;