export type Service = {
  slug: string;
  name: string;
};

export const services: readonly Service[] = [
  { slug: "monthly-bookkeeping", name: "Monthly bookkeeping" },
  { slug: "bookkeeping-cleanup-catch-up", name: "Bookkeeping cleanup and catch-up" },
  { slug: "account-reconciliation", name: "Account reconciliation" },
  { slug: "payroll-journal-entries", name: "Payroll journal entries" },
  { slug: "quickbooks-online-setup", name: "QuickBooks Online setup" },
  { slug: "quickbooks-training", name: "QuickBooks training" },
  { slug: "1099-filing", name: "1099 filing" },
  { slug: "bookkeeping-business-consulting", name: "Business consulting" },
];
