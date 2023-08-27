import FAQScreen from "../src/screens/FaqScreen";

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

export default FAQScreen;