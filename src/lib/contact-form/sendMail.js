async function sendFormspree(formData) {
  try {
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    var jsonData = JSON.stringify(object);
    const url = "https://formspree.io/f/xxx";
    const res = await fetch(url, {
      method: 'POST',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json',
      },
      data: jsonData,
    });

    return res.status === 200 ? true : false;
  } catch (error) {
    console.log(`error formspree: ${error}`);
    return false;
  }
}

export { sendFormspree };
