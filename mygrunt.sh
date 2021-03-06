#! /usr/bin/env bash

function setup_project() {
    npm install --save
    echo 'Enjoy coding!'
}

if [ -a package.json ];
then
    setup_project
else
    echo '正在初始化项目结构'
    curl -o 'package.json' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/package.json'
    curl -o  'Gruntfile.js' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/Gruntfile.js'
    curl -o  '.gitignore' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/.gitignore'
    curl -o  'index.slim' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/index.slim'
    setup_project
    mkdir -p 'src/css/'
    mkdir -p 'src/js/'
    mkdir -p 'src/images/'
    touch 'src/css/_common.scss'
    touch 'src/js/app.js'
    read -p '项目已初始化完毕是否需要删除本脚本 ？(y|n)' yn
    case $yn in
        [Yy]* ) rm 'mygrunt.sh'; break;
    esac
fi
