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
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
  </head>
  <body class="antialiased min-vh-100 d-flex justify-content-center align-items-center flex-column">
    <div id="container" style="max-width: 1360px;">
      <input type="hidden" id="user" value={{Auth::user()}}>
      <div id="header"></div>
      <div id="main_events"></div>
      <div id="next_events"></div>
      <div id="container_events"></div>
     
    </div>
     <div id="footer" class="w-100"></div>
</body>
</html>