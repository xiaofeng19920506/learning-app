import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Chat from "./ui/page";
// import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
// import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
// import Header from "@/components/Header";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="absolute flex flex-col h-screen w-[60%] overflow-y-hidden">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="relative w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {/* <DeployButton /> */}
          <div></div>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="relative flex-1 flex w-full overflow-y-auto">
        <div className="relative flex-1 w-full flex flex-col gap-20 px-3">
          <main className="relative flex-1 w-full flex flex-col gap-6 overflow-y-auto">
            <Chat />
          </main>
        </div>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
