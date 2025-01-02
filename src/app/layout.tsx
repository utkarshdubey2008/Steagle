
import './globals.css'; 
export const metadata = {
  title: 'ST Eagle Trader',
  description: 'Creative soul sharing positivity & inspiration!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
