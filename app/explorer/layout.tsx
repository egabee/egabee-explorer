

export default async function ExplorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`dark:bg-woodsmoke bg-mainBg dark:text-gray-300 text-secText`}>
      {children}
    </div>
  );
}
