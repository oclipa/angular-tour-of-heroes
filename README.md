# angular-tour-of-heroes
Working through the Angular tutorial (https://angular.io/tutorial)


git clone https://github.com/angular/quickstart.git angular-tour-of-heroes
cd angular-tour-of-heroes

Delete unnecessary files:

OS/X:
xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt

Windows:
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q

Install packges defined in package.json:
npm install

Launch the application in a browser:
npm start

