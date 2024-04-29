export default async function ExplorerLayout({ children }: { children: React.ReactNode }) {
  return <div className={`mainBgColor bg-mainBg dark:text-textGray text-secText`}>{children}</div>
}
