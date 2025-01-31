const reportGridData = () => {
    let gridReportData = memoizedData?.data?.files?.values || [];

    const fileTypeMap = {
        MemberDNC: (item) => ({
            ...item,
            percentage: stringValidation(item["percentage"]),
            statistics: stringValidation(item["statistics"]),
            value: item?.value?.toString().replace(/[^\d]/g, "") || "",
        }),
        Targeting: (item) => ({
            ...item,
            property: stringValidation(item["property"]),
            "property string": stringValidation(item["property string"]),
            message: stringValidation(item["statistics"]),
            count: item?.value?.toString().replace(/[^\d]/g, "") || "",
        }),
    };

    const fileType = memoizedData?.data?.fileType;
    return fileTypeMap[fileType] ? gridReportData.map(fileTypeMap[fileType]) : gridReportData;
};
