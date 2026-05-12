# Foldwise update uploads

This folder is the public Sparkle update location for Foldwise.

Expected files:

- `appcast.xml`: Sparkle appcast generated and signed during release.
- Release archives such as `Foldwise-1.0.zip` or `Foldwise-1.0.dmg`.

The app currently checks:

```text
https://raw.githubusercontent.com/frafra077/Foldwise/main/upload/appcast.xml
```
