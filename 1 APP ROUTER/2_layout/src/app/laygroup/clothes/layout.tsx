export default function ProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <h1> CLOTHES: </h1>
          {children}
        </>
    );
  }
  