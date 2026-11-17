---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.164577f243700aa5b1cf17060c362ae257a02b945622ff7be5b0bca52cbe0c61
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.StorageKey.#ctor(System.String)
title: StorageKey.Constructor
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
reviewed: a93692a66be55d7c5b60e2b23920086558b4c65d45d2093281096a588742a881
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.
