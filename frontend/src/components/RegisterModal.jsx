const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nume, email, parola }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Înregistrare reușită! Poți să te autentifici acum.');
      // aici poți să faci redirect sau să schimbi modul, de ex:
      // setIsLogin(true);
    } else {
      alert('Eroare la înregistrare: ' + data.message);
    }
  } catch (error) {
    alert('A apărut o eroare.');
    console.error(error);
  }
};
