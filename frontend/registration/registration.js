const adress = "https://ideal-xylophone-x5w7q556pv6vcprp9-8888.app.github.dev"

async function register() {
  console.log("rejestruj")
  try {
    const response = await fetch(adress + "/register", {
      method: "POST",
      body: JSON.stringify({
        login: "login",
        password: "password",
        email: "email",
        phone: "phone"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(!response.ok) {
      throw new Error(`Błąd zapytania: ${response.status} ${response.statusText}`)
    }
  } catch(error) {
    console.error("Błąd podczas wykonywania żądania:", error)
  }
}


