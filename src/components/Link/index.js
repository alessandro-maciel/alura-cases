import NexLink from "next/link";

export default function Link({children, href}){
    return (
        <NexLink href={href}>
            {children}
        </NexLink>
    );
}