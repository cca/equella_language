zipfile = language-pack-en_US.zip

all: makezip

makezip:
	zip $(zipfile) *.properties
