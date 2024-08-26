import { Typography } from "@components";
import { routing } from "@configs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Homepage() {
    const session = (await getServerSession()) || {};

    if (Object.keys(session).length !== 0) {
        redirect(routing.homepage.HOMEPAGE);
    }
    else {
        redirect(routing.auth.SIGN_IN);
    }

    return (
        <div>
            <Typography type='title' decorations={['code', 'underline']} disabled>Hello from Title </Typography>
        </div>
    );
}
