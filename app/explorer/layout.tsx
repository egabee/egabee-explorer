import SiteHeader from "@/components/siteHeader";

export default async function ExplorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-woodsmoke text-gray-300`}>
      <SiteHeader hideSearch={false} />
      {children}
    </div>
  );
}
