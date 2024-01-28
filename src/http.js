class HttpClient {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  async get() {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }
  }

  async add(data) {
    try {
      console.log(data);
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i add metoden: ${error}`);
    }
  }
}

async function fetchCourses() {
  try {
    const response = await fetch('http://localhost:3000/courses ');

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchStudents() {
  try {
    const response = await fetch('http://localhost:3000/customer ');

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

export { fetchCourses, HttpClient, fetchStudents };
