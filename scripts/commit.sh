# Please respect package contribution norms and
# use this standard commit script

MSG="$(curl -X GET 'http://whatthecommit.com/index.txt')"

git commit -m "$MSG"
