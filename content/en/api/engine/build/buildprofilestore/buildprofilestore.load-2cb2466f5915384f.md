---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2cb2466f5915384fbabfe8224110e978b9c8ca199026f1aae5c45d4516ef525c
symbol: engine:Inno.Build:M:Inno.Build.BuildProfileStore.Load
title: BuildProfileStore.Load
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 7fbe17bf3af727c92088633a2fd412ea7db1c003cff05fb0352958be399f6cf1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A newly owned build profile that callers may edit independently.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the project does not contain a build profile document.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the document is corrupt or contains an invalid profile.
