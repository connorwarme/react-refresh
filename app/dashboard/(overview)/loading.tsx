import DashboardSkeleton from "../../ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Loading() {
  return <DashboardSkeleton />;
}