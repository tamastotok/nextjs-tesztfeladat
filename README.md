## Branch main:

### Kliens oldali authentikáció:

- fetch api és redirect: pages/auth-check.jsx-ben useEffect-el és useRouter-el
- token ellenőrzése: pages/api/auth.js

A tokent a pages/auth-check.jsx-ben lehet módosítani.

#

## Branch secondary:

Szerver oldali authentikáció:

- redirect: pages/auth-check.jsx-ben getServerSideProps-al
- fetch api: lib/check-auth.js (nem vagyok benne biztos, hogy a fájl jó helyen van-e itt vagy a pages/api mappában lenne jobb)
- token ellenőrzése: pages/api/auth.js

A tokent és a fetch-hez tartozó url-t a lib/check-auth.js-ben lehet módosítani.
