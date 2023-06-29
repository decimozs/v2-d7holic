import "./globals.css";
import { MouseNavigator } from "@/components/ui";
import { seo } from "@/config";

export const metadata = {
  ...seo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-p2 md:p-p4">
        {children}
        <MouseNavigator />
      </body>
    </html>
  );
}
