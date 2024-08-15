$DEFAULT_PASSWORD = "password"
$DB_NAME = "ts-webapi-template"
$DB_USER = "postgres"

# populate the .env file
New-Item -Path ".env" -Value @"
# app
# database
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DEFAULT_PASSWORD
DB_CONNECTION_STRING=pg://$DB_USER:$DEFAULT_PASSWORD@localhost/$DB_NAME
"@ -Force
