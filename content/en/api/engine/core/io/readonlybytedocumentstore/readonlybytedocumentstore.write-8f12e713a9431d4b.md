---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8f12e713a9431d4bd3c01e756375d063059d6adb89ed90b6efdbb9fc30326355
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ReadOnlyByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})
title: ReadOnlyByteDocumentStore.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 61eff508e6c0e4215fbc36d0b5545cbd7045a5f212941dfbce444adc6d4f7c63
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
