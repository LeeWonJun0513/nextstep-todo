#!/bin/bash

echo "deploy development firebase"

function build_use() {
  npm run build
  firebase use default
}

if [ $# -eq 0 ]; then
  echo "deploy with functions"
  build_use
  firebase deploy 
elif [ "$1" == "of" ]; then
  echo "deploy only functions"
  firebase use default
  firebase deploy --only functions
elif [ "$1" == "ef" ]; then
  echo "deploy except functions"
  build_use
  firebase deploy --except functions
else
  echo "invliad command!"
  echo "use no argument, of(only functions), ef(except functions)"
fi
