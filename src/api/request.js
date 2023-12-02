
const URL = "https://talentochoco.000webhostapp.com/";
export const loginRequest = async (data) => {
  const res = await fetch(`${URL}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const loginData = await res.json();

  console.log(loginData);

  return loginData;
};

export const registerRequest = async (data) => {
  const res = await fetch(`${URL}/register.php`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const registerData = await res.json();

  console.log(registerData);

  return registerData;
};

export const logoutRequest = async (token) => {
  const res = await fetch(`${URL}/logout.php`, {
    method: "POST",
    body: JSON.stringify(token),
  });
  const registerData = await res.json();

  console.log(registerData);

  return registerData;
};