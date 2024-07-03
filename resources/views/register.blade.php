<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
    <title>Laravel</title>
    @vite(['resources/sass/app.scss', 'resources/js/register.js'])
  </head>
  <body class="antialiased d-flex min-vh-100 flex-column justify-content-between">
    <div id="container" style="max-width: 1360px;">
      <input type="hidden" id="user" value={{Auth::user()}}>
      <div id="header"></div>
      <div id="form_register" class="d-flex flex-column flex-lg-row justify-content-lg-center"></div>
    </div>

     <div id="footer" class="w-100"></div>
</body>
</html>