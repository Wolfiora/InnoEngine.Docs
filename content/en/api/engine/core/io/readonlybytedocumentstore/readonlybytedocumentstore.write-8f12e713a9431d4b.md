---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8f12e713a9431d4bd3c01e756375d063059d6adb89ed90b6efdbb9fc30326355
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ReadOnlyByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})
title: ReadOnlyByteDocumentStore.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 1a760ad6b6d27f773027c5c8209f30c3ec9e5d9e41ac80c60f4ff64fd9ff3026
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
