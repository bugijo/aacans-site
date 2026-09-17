import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site";
import { Footer } from "@/components/site";
import { AccessibilityControls } from "@/components/accessibility";
export const metadata: Metadata = { metadataBase:new URL("https://aacans.org.br"), title:{default:"AACANS | Apoio que acolhe",template:"%s | AACANS"}, description:"A AACANS está sendo estruturada para acolher, orientar e apoiar pessoas com câncer e suas famílias em Sertãozinho-SP.", keywords:["AACANS","associação câncer Sertãozinho","apoio câncer Sertãozinho"], openGraph:{type:"website",locale:"pt_BR",siteName:"AACANS"}, robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){const jsonLd={"@context":"https://schema.org","@type":"NGO","name":"AACANS","alternateName":"Associação de Apoio às Pessoas com Câncer","description":"Associação em estruturação para acolhimento, informação e apoio a pessoas com câncer e suas famílias em Sertãozinho-SP.","areaServed":"Sertãozinho, SP"};return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><a className="skip" href="#conteudo">Ir para o conteúdo</a><Header/><main id="conteudo">{children}</main><Footer/><AccessibilityControls/></body></html>}
