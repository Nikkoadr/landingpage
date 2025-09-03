import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    return (
        <div className="p-8">
        <h1 className="text-3xl">
            Welcome {session?.user?.name || session?.user?.email}
        </h1>
        </div>
    );
}
