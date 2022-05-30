@echo off

echo.
echo Creating output folder...

if not exist "output\%PROJECT_NAME%" md output\%PROJECT_NAME%

if not exist "output\resources\python_requirements" md output\resources\python_requirements
if not exist "output\resources\backup_scripts" md output\resources\backup_scripts

echo.
echo Copying Apache httpd.conf file
xcopy %PROJECT_NAME%\build\web-server\apache\httpd.conf output\resources\apache\ /E

exit /B 1
