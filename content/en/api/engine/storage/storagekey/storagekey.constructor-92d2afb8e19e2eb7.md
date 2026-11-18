---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.92d2afb8e19e2eb7ed8faddf56a4ffab240e853f4fee30cb19e3b2f81e38ee85
symbol: engine:Inno.Storage:M:Inno.Storage.StorageKey.#ctor(System.String)
title: StorageKey.Constructor
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
sourceFingerprint: bf00b2a080ba62f5b547cb0409fa5c1fe12876b04d8b6bb175c79d81376171d1
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
