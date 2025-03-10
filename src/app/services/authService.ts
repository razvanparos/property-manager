export const login = async (loginEmail: string, loginPassword: string) => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    });
    const data = await response.json();
    console.log(response);
    if (response.status === 200) {
    } else alert("Wrong credentials");
  } catch (err) {
    alert("User not found");
    console.log(err);
  }
};
