---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4078121656de1fe9ab1c5971c67775a6c2491e23e7271c1b46eda73ff087a503
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.FileByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})
title: FileByteDocumentStore.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: a94a93008415c9eceb3afc1ad64a3bc530c3af02d9aff91d36588049e4fde90a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

## Exceptions

**Exception `T:System.NotSupportedException`:** The source is read-only.
