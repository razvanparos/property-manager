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
    return response.status
    
  } catch (err) {
    console.log(err);
  }
};

export const register=async(registerName:string, registerEmail:string, registerPassword:string)=>{
  try {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    });
    const data = await response.json();
    if(response.status===200){
      return response.status
    }else if(data[0]?.constraints){
      return Object.values(data[0].constraints)
    } else return [data.err]


  } catch (err:any) {
    console.log(err)
    return err
  }
}