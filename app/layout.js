import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import "./globals.css";

export const metadata = {
  title: "Sowkya Interiors",
  description: "Hyderabad's premier interior design studios, we specialize in transforming spaces into luxurious, highly functional environments.",
  icons: {
    icon: './favicon.ico',
  },
  keywords: ['sowkya','sowkya interiors', 'interior design', 'interior design studio', 'hyderabad interior design', 'luxury interiors', 'functional spaces', 'home decor', 'office interiors', 'residential design', 'commercial design', 'modern interiors', 'traditional interiors', 'custom furniture', 'space planning', 'renovation services', 'interior styling', 'design consultancy', 'sustainable design', '3D rendering', 'project management'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sowkya Interiors Hyderabad's premier interior design studios, we specialize in transforming spaces into luxurious, highly functional environments." />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
