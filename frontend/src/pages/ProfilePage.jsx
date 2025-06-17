import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DonationForm from "./DonationForm";

const fakeUsersDB = {
  "68267328235f2a467014e185": { name: "David Popescu" },
  "123456789abcdef": { name: "Maria Ionescu" },
  // adaugă alți useri dacă vrei
};

export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulăm API-ul
    setTimeout(() => {
      if (fakeUsersDB[id]) {
        setUser(fakeUsersDB[id]);
      } else {
        setUser({ name: "Utilizator necunoscut" });
      }
    }, 500);
  }, [id]);

  if (!user) return <div>Se încarcă profilul...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6">
      <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">👤 {user.name}</h1>
        <DonationForm />
      </div>
    </div>
  );
}
