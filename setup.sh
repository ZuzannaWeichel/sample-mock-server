#!/bin/bash

ssh -T -i "the-beatles-key.pem" ubuntu@ec2-3-17-75-46.us-east-2.compute.amazonaws.com << EOF
    
    if sudo docker stop mockserver
    then 
        echo "----->>> Stopped the running container"
    fi
    if sudo docker run -d --name mockserver --rm -p 1080:1080 mockserver/mockserver
    then
        echo "----->>> Started new container"
    fi
    sleep 5
EOF

node populate-mock-server.js


