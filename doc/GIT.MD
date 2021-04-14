    # GIT提交到分支dev
    git add .
    git commit -m 'init(具体提交内容)'
    等价于
    git commit -am 'init(具体提交内容)'
    
    (ps:git add <change file>提交文件)    
    git push origin dev(分支名称)

    # GIT创建分支dev
    git checkout -b dev master

    # 切换到master分支
    git checkout master

    # 对dev分支进行合并
    git merge --no-ff dev

    # 删除feature-x分支
    git branch -D feature-x
    
    # git回退到某个历史版本(不建议使用，会清楚历史记录)
    git log
    git reset --hard 2bb92ef596b25c65a5c89278d0ce19bb88d3c37a
    
    # 拉取远程分支到本地
    git checkout -b <本地分支名> origin/<远程分支名>
    
    # 取消本地目录下关联的远程库
    git remote remove origin
    
    # 在本地目录下关联远程repository
    git init
    git remote add origin git@github.com:git_username/repository_name.git
    
####参考文献 http://www.ruanyifeng.com/blog/2012/07/git.html

####常用git tag命令

    #创建附注标签
    git tag -a v0.1 -m "0.1演示版本"
    
    #标签提交
    git push origin v0.1 # 将v0.1标签提交到git服务器
    git push origin –tags # 将本地所有标签一次性提交到git服务器
    
    #列出标签
    git tag -l
    
    #切换到标签
    git show v0.1
    
    #删除标签
    git tag -d v0.1 # 删除标签