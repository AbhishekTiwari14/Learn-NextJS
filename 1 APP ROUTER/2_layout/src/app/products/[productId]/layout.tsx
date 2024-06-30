export default function ProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <h1>Products: </h1>
          {children}
        </>
    );
  }
  