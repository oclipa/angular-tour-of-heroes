# angular-tour-of-heroes
Working through the Angular tutorial (https://angular.io/tutorial)

<h2>To install and run the code:</h2>
<ol>
  <li>Install <a href="https://nodejs.org/en/download/">Node.js and npm</a></li>
  <li>Fetch this repo</li>
  <li>Install packages defined in package.json: npm install</li>
  <li>Launch the application in a browser: npm start</li>
</ol>


<h2>To obtain initial seed code (for starting from scratch):</h2>
<ol>
  <li>git clone https://github.com/angular/quickstart.git angular-tour-of-heroes</li>
  <li>cd angular-tour-of-heroes</li>
  <li>
    Delete unnecessary files (OS/X):
    <ul>
      <li>xargs rm -rf &lt; non-essential-files.osx.txt</li>
      <li>rm src/app/*.spec*.ts</li>
      <li>rm non-essential-files.osx.txt</li>
    </ul>
  </li>
  <li>
    Delete unnecessary files (Windows):
    <ul>
      <li>for /f %i in (non-essential-files.txt) do del %i /F /S /Q</li>
      <li>rd .git /s /q</li>
      <li>rd e2e /s /q</li>
    </ul>
  </li>
</ol>
