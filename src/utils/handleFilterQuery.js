const handleFilterQuery = async (req) => {
    const {
        locationId,
        homeType,
        capacity,
        totalBedrooms,
        totalBathrooms,
        hasTv,
        hasKitchen,
        hasAirCon,
        hasHeating,
        hasInternet,
        roomType,
        minPrice,
        maxPrice,
        sortBy,
        orderBy,
    } = req.query;
    const filter = {
        ...(locationId && { locationId: parseInt(locationId) } ),
        ...(homeType && { homeType }),
        ...(totalBathrooms && { totalBathrooms }),
        ...(totalBedrooms && { totalBedrooms }),
        ...(hasTv && { hasTv: hasTv === "1" ? true : false }),
        ...(hasKitchen && { hasKitchen: hasKitchen === "1" ? true : false }),
        ...(hasAirCon && { hasAirCon: hasAirCon === "1" ? true : false }),
        ...(hasHeating && { hasHeating: hasHeating === "1" ? true : false }),
        ...(hasInternet && { hasInternet: hasInternet === "1" ? true : false }),
        ...(capacity && { capacity }),
        ...(roomType && { roomType }),
        ...(minPrice && { minPrice }),
        ...(maxPrice && { maxPrice }),
    };
    const sort = {
        ...(sortBy && { sortBy }),
        ...(orderBy && { orderBy })
    };
    return {
        filter,
        sort
    };

}

module.exports = handleFilterQuery;