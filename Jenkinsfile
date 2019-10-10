pipeline {
  agent any
  stages {
    stage('lint') {
      steps {
        sh 'tslint -c tslint.json -p tsconfig.json --fix'
      }
    }
  }
}