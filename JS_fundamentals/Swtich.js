function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "unknown";
            break;
    }

    console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
}

calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("unknown");
