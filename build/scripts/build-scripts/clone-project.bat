@echo off

echo.
echo Cloning GIT repositories...
git clone --quiet --single-branch --branch 24-update-build-system git@gitlab.com:DorNakash/immediateresponse.git
echo.
echo Cleaning up development code from server...
pushd %PROJECT_NAME%
rd ".git" /S /Q
popd

exit /B 1
