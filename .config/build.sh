set -x
set -e

git fetch
git reset --hard origin/main
npm i
npm run build
sudo mkdir -p /srv/www/blog
sudo cp -r ../dist/* /srv/www/blog/
