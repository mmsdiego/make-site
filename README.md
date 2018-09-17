# make-site
Creating a Simple File Structure for Websites

```
project name/
└── style/
│   ├── base/
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── _variables.scss
│   └── layouts/
│   │   ├── bootstrap-4-grid.scss
│   │   └── bootstrap-3-grid.scss
│   └── modules/
│   └── pages/
│   └── style.scss
└── img/
└── js/
└── index.html
└── package.json

```

# Installation

```
npm install -g make-site

```

# Usage

```
make-site -n <project-name>

cd <project-name>

npm install

npm start

```