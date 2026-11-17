---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bedc5b735e489a5bf1950ba96a5da584abf73c91e2fe77676911f832dd366b5f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnerStamp.#ctor(System.Int32,System.Int64)
title: ProcessOwnerStamp.Constructor
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 8eb571536d6769c9d3d3d9233426d43e03f0d3f3109fa6cb7360589045697b34
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
