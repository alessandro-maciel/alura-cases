import Link from "../src/components/Link";

export async function getStaticProps() {
    const URL_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

    const faq = await fetch(URL_API)
        .then((response) => response.json());

    return {
        props: {
            faq
        }
    } 
}

export default function FaqPage({faq}){
    return (
        <div>
            <h1>Alura Cases - Página de FAQ</h1>
            <Link href='/'>
                Ir para a página Home
            </Link>
            {faq.map(({question, answer}) => (
                <article key={question}>
                    <li>{question}</li>
                </article>
            ))}
        </div>
    );
}