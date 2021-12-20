# express-subdomain example

regester subdomains with [express-subdomain](https://github.com/bmullan91/express-subdomain)

## Install

Install package with npm or yarn

```
npm i express-subdomain
```

```
yarn add express-subdomain
```

## How it works

Let's find out step by step

### import modules

```js
import subdomain from 'express-subdomain'
```

### set subdomain offset

```js
app.set('subdomain offset', 1)
```

`subdomain offset` is the number of dot-separated parts of the host to remove to access subdomain.

For instance, if you use localhost, set it to 1. And if you use example.co.kr, set it to 3.

### regester subdomain

You can now re-register your sub-domain. Of course, the number of subdomains is not limited.

```js
app.use(subdomain('api', api))
```
