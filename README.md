<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SyriaNumbers</title>

  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      margin: 0;
      background: #f4f6f9;
      color: #172033;
    }

    header {
      background: #111827;
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
      font-size: 28px;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }

    .hero {
      background: white;
      padding: 25px;
      border-radius: 18px;
      margin-bottom: 20px;
      text-align: center;
    }

    .hero h2 {
      margin-top: 0;
    }

    .countries {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .country {
      background: white;
      border: 0;
      padding: 20px;
      border-radius: 15px;
      cursor: pointer;
      font-size: 17px;
      box-shadow: 
