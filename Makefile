zipfile = language-pack-en_US.zip

all: makezip

makezip:
	zip $(zipfile) *.properties

open:
	open https://vault.cca.edu/access/language.do

min:
	uglifyjs improved-login.js --screw-ie8 -m -c > improved-login.min.js
