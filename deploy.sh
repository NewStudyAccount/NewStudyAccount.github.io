##!/usr/bin/env sh
#
## 确保脚本抛出遇到的错误
#set -e
#
#
#push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
#commit_info=`git describe --all --always --long`
#dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
#push_branch=gh-pages # 推送的分支
#
## 生成静态文件
#npm run build
#
## 进入生成的文件夹
#cd $dist_path
#
#git init
#git add -A
#git commit -m "deploy, $commit_info"
#git push -f $push_addr HEAD:$push_branch
#
#cd -
#rm -rf $dist_path


#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'vblog.qjjstudy.asia' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:NewStudyAccount/vblog.git

#  git@github.com:NewStudyAccount/vblog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://NewStudyAccount:${GITHUB_TOKEN}@github.com/NewStudyAccount/blog.git
  git config --global user.name "NewStudyAccount"
  git config --global user.email "mr.boss.qjj@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github
#
## deploy to coding
#echo 'www.NoteZ.com\nNoteZ.com' > CNAME  # 自定义域名
#if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#  codingUrl=git@git.dev.tencent.com:NoteZ/NoteZ.git
#else
#  codingUrl=https:// NoteZ:${CODING_TOKEN}@git.dev.tencent.com/NoteZ/NoteZ.git
#fi
#git add -A
#git commit -m "${msg}"
#git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist

