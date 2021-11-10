import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

const YourComponent = () => (
    <Image
        src="/images/asd.jpg" // Route of the image file
        height={288} // Desired size with correct aspect ratio
        width={288} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

            <YourComponent></YourComponent>

            {/* 若要客製化classname可這樣寫 */}
            <Link href="/">
                <a className="foo" rel="noopener noreferrer">
                    className
                </a>
            </Link>
        </Layout>
    );
}
