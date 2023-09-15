import Providers from "@/public/store/provider.js"

export const metadata = {
    title: "Sabueso-Community"
}

export default function RootLayout({children}){
    return (
    <html lang = "es">
        <Providers>
            <body>{children}</body>
        </Providers>
    </html>)
}