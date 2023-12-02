
const URL = "http://localhost/api/login";
export const loginRequest = async (data) => {
  const res = await fetch(`${URL}/login.php`, {
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