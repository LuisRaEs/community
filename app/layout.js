export const metadata = {
    title: "Sabueso-Community"
}

export default function RootLayout({children}){
    return (<html>
        <body>
            {children}
        </body>
    </html>)
}