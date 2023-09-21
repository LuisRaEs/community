import "@/public/bootstrap.min.css";
import Providers from "@/public/store/provider.js";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import "./all.min.css";

export const metadata = {
  title: "Sabueso-Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <MantineProvider defaultColorScheme="light">
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
