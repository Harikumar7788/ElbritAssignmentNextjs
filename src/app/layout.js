import Header from "../Components/Header";
import "./globals.css";
// Root layout component
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="antialiased">
        <Header/>
        {children}
      </body>
    </html>
  );
}
