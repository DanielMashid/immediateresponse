CREATE DATABASE IF NOT EXISTS immediateresponse;

DROP USER IF EXISTS 'immediateresponse_db_root'@'%';
-- password MD5('immediateresponse_db_root')
CREATE USER 'immediateresponse_db_root'@'%' IDENTIFIED WITH mysql_native_password BY 'd99579913a98ba9e20edb016c12ed10b';
GRANT ALL ON immediateresponse.* TO 'immediateresponse_db_root'@'%';
FLUSH PRIVILEGES;
