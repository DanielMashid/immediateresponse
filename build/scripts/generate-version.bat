@echo off

if [%1]==[] goto usage

call set-release-folder.bat %1
call set-env.bat

SET ENV_FILE=.env.%1

pushd %RELEASE_DIR%\%RELEASE_FOLDER_NAME%

cmd /c %BUILD_SCRIPTS_DIR%\clone-project.bat
cmd /c %BUILD_SCRIPTS_DIR%\generate-directory-structure.bat %1
cmd /c %BUILD_SCRIPTS_DIR%\generate-virtual-env.bat
cmd /c %BUILD_SCRIPTS_DIR%\generate-client.bat
cmd /c %BUILD_SCRIPTS_DIR%\generate-server.bat
cmd /c %BUILD_SCRIPTS_DIR%\cleanup.bat

popd
goto :eof

:usage
@echo Usage: %0 ^<Environment Name^> (e.g. generate-version.bat %PROJECT_NAME%)

exit /B 1
