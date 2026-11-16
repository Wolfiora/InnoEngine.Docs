---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.98d57d283ca8218b21886bc1135fcfe1e3066f32d5ed0f0d1d92258f9c5a891f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.IByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})
title: IByteDocumentStore.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: e73bafdc5f98ae815c3604b9f4639fd677d0ce9b98d89960060758e9bac9f0d6
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
