Cài đặt axios: npm i --save axios

Sanitize: khi dọc html từ server trả về để tránh bị ssr. -> Dùm pagekage: DOMPurify.
-> loại bỏ ssr script.

====== Cách lấy SSH và cài đặt Git =============
1.ssh-keygen -t rsa -b 4096 -C "hpn010193@gmail.com"
2.cd .ssh/
3.ls -al
4.cat id_rsa.pub
5.eval $(ssh-agent -s)
6.ssh-add ~/.ssh/id_rsa
7. Copy: clip < ~/.ssh/id_rsa.pub
8. Add vào Git.
9. Kiểm tra : ssh -T git@github.com -> yes -> successfull