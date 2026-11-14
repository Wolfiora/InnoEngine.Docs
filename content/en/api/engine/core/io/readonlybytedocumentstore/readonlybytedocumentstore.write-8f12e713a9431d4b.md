---
uid: api.8f12e713a9431d4bd3c01e756375d063059d6adb89ed90b6efdbb9fc30326355
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ReadOnlyByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 56931179479c3acc62b82b40a05a5498c95b883e079f01aceacf541178ff74e4
title: "ReadOnlyByteDocumentStore.Write"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Replaces the document atomically after preparation succeeds.

## Parameters

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

## Exceptions

**Exception `T:System.NotSupportedException`:** The source is read-only.
