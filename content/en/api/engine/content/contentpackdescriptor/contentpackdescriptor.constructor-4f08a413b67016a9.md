---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4f08a413b67016a9fc4e8234a0513a08496a9d0aff5afbb40c7938faefea0d94
symbol: engine:Inno.Content:M:Inno.Content.ContentPackDescriptor.#ctor(System.String,System.String)
title: ContentPackDescriptor.Constructor
kind: api
owners:
- Inno.Content
apiSurface: source-clr
sourceFingerprint: 777594788d7e20a979c7cff954950cdd55ffd732c919efdef3cf3aa0a419cc32
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `contentHash`:** The SHA-256 of the complete pack bytes.

**Parameter `fileName`:** The name `content-{uppercase SHA-256}.pack` relative to the source.

## Exceptions

**Exception `T:System.ArgumentException`:** The hash or file name does not identify one current-format pack.
