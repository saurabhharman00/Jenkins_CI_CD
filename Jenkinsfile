pipeline {
    agent any
    
    stages {
        
        stage("code"){
            steps{
                git url: "https://github.com/saurabhharman00/Jenkins_CI_CD.git", branch: "main"
                echo 'Bhaiya code clone hogaya'
            }
        }
        stage("build and test"){
            steps{
                sh "docker build -t node-app ."
                echo 'Code build done'
            }
        }
        stage("deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d --build"
                echo 'Deployment also done'
            }
        }
        stage("docker push" ){
            steps{
                echo "Running in $WORKSPACE"
                script {
                    docker.withRegistry('', 'dockerhub') {
                        def image = docker.build('saurabhpaul84/jenkins-pipeline: Jenkins-CI_CD-Feb-2023')
                        image.push()
                    }
                }
            }
        }
    }
}
