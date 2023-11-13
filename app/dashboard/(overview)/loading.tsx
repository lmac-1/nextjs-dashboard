import DashboardSkeleton from "@/app/ui/skeletons";

// Chapter 9: Streaming
/* 
This page is inside the (overview) route group. 
This means that this loading page will only apply to our dashboard overview page and NOT /dashboard/customers and /dashboard/invoices
*/
export default function Loading() {
  return <DashboardSkeleton />;
}
