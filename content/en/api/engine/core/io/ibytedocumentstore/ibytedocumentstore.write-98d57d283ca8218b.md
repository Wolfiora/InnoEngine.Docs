---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.98d57d283ca8218b21886bc1135fcfe1e3066f32d5ed0f0d1d92258f9c5a891f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.IByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})
title: IByteDocumentStore.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 2b3bddb316a3ac8572cbdc29f92e43fbd722f51bfdbcfc98a82c049fb342efd3
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
