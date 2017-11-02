# angular-tour-of-heroes
Working through the Angular tutorial (https://angular.io/tutorial)

<br/>
git clone https://github.com/angular/quickstart.git angular-tour-of-heroes<br/>
cd angular-tour-of-heroes<br/>
<br/>
Delete unnecessary files:
<br/>
OS/X:<br/>
xargs rm -rf < non-essential-files.osx.txt<br/>
rm src/app/*.spec*.ts<br/>
rm non-essential-files.osx.txt<br/>
<br/>
Windows:<br/>
for /f %i in (non-essential-files.txt) do del %i /F /S /Q<br/>
rd .git /s /q<br/>
rd e2e /s /q<br/>
<br/>
Install packges defined in package.json:<br/>
npm install<br/>
<br/>
Launch the application in a browser:<br/>
npm start<br/>
<br/>
