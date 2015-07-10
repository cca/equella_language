zipfile = language-pack-en_US.zip

all: makezip

makezip:
	zip $(zipfile) *.properties

open:
	open https://vault.cca.edu/access/language.do
