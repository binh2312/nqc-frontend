// Mock data for Sales Management page
function createSalesData(
  id: number,
  date: string,
  sales: string,
  contracts: number,
  skips: number,
  cancellations: number,
  churn_rate: string
) {
  return { id, date, sales, contracts, skips, cancellations, churn_rate };
}

export const salesManagementData = [
  createSalesData(1, "2022年度", "30,200,000円", 21, 10, 10, "20%"),
  createSalesData(2, "2022年6月", "6,500,000円", 2, 2, 2, "20%"),
  createSalesData(3, "2022年5月", "4,200,000円", 21, 10, 10, "20%"),
  createSalesData(4, "2022年4月", "6,500,000円", 21, 10, 10, "20%"),
];