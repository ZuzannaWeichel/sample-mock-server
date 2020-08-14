# sample-mock-server

This server was intended to run on AWS EC2 instance. With docker image of mockserver on Ubuntu 18.04

## Seting up EC2 instance

- Log in to your AWS Console    
http://go.accenture.com/aws_login (you might need to be added for access)
- Find EC2 service
    - Create an instance with Ubuntu and default settings
    - Name your instance
    - Create your key.pem file
- To change permissions of the key file:  
```chmod 400 fileName.pem```
- To SSH into mock server on EC2 example:  
```ssh -i "the-beatles-key.pem" ubuntu@ec2-3-17-75-46.us-east-2.compute.amazonaws.com```

- To add Docker to EC2 Ubuntu instance   
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04

- To add MockServer Docker Image   
https://www.mock-server.com/mock_server/running_mock_server.html#docker_container    
NOTE: add sudo to each command to run it

- To run mock server with specific port:  
```sudo docker run -d --rm -p 1080:1080 mockserver/mockserver```

## QuickStart
NOTE: Once you have your EC2 instance you will need to update the endpoint in the project as well as the key (.pem file)!

Check if you have node installed  
```node -v```  
If not then download node from [nodejs.org](https://nodejs.org/en/download/) or via Homebrew with  
```brew install node```  
Get the project dependencies with  
```npm install```  
To update expectations  
```setup.sh```

## MockServer Documentation
Get started with mocking:  
https://www.mock-server.com/mock_server/getting_started.html

Creating expectations:  
https://mock-server.com/mock_server/creating_expectations.html

## Get the data
To get data out of mock server example:
GET → http://3.17.75.46:1080/ohio

