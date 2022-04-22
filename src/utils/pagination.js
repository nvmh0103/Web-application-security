const pagination = (totalNumber, page, limit) => {
    // calculate total pages
    let totalPage = Math.ceil(totalNumber / limit);
    // determine has next page or not
    let hasNextPage = page < totalPage ? 1 : 0;
    let hasPreviousPage = page > 1 ? 1 : 0;
    return {
        paginationData: {
            currentPage: parseInt(page),
            hasNextPage,
            hasPreviousPage,
            totalPage
        }
    }
}
module.exports = pagination;