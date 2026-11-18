---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bedc5b735e489a5bf1950ba96a5da584abf73c91e2fe77676911f832dd366b5f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnerStamp.#ctor(System.Int32,System.Int64)
title: ProcessOwnerStamp.Constructor
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 303c8091222c2038da3eda5576a28c90f42a45a6398273082a123b8f673869ec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `processId`:** The positive operating-system identifier.

**Parameter `startedUtcTicks`:** The positive UTC start timestamp in DateTime ticks.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The identifier or timestamp is outside its valid range.
