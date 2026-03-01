# beakcrypt

## 0.0.3

### Patch Changes

- 8781d0b: Add production URL defaults to CLI so beakcrypt login works out of the box without any environment variable configuration. Previously BEAKCRYPT_CONVEX_URL and BEAKCRYPT_CONVEX_SITE_URL had no defaults and the CLI would error on first run. Also corrects siteUrl default from app.beakcrypt.com to beakcrypt.com.

## 0.0.2

### Patch Changes

- 6a1c48c: Set up publishing pipeline with tsup, package exports, and changesets
