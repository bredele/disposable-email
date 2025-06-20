# disposable-email

Easily determine whether an email’s domain comes from a disposable email provider. This module is useful for blocking throwaway sign-ups or for analytics purposes.

## Installation

```sh
$ npm install @bredele/disposable-email
```

## Usage

```ts
import isDisposable from "@bredele/disposable-email";

isDisposable("hello@gmail.com");
// => false

isDisposable("hello@temp-mail.com");
// => true
```

## Notes

We are using [disposable-email-domains/disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains) as the source for disposable domains. To update the list plese run:

```sh
$ git submodule update --remote
$ npm run update-domains
```
