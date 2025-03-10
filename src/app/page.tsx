import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

export default function Home() {
  return (
    <main className="px-[7%] py-[3%]">
      <p className="text-3xl">Manage your properties</p>
      <LoginModal/>
      <RegisterModal/>
    </main>
  );
}
