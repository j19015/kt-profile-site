import { ReactNode } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};