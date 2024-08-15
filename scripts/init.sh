#!/bin/sh

DEFAULT_PASSWORD="password"
DB_NAME="ts-webapi-template"
DB_USER=postgres

# populate the .env file
cat <<EOF > .env
# database
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DEFAULT_PASSWORD
DB_CONNECTION_STRING=postgresql://$DB_USER:$DEFAULT_PASSWORD@localhost/$DB_NAME
EOF
