---
uid: api.4078121656de1fe9ab1c5971c67775a6c2491e23e7271c1b46eda73ff087a503
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.FileByteDocumentStore.Write(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 1bfdfb32e727d1adfdc1e503692b6fe8d02e39c8569cad48b2073c77f58c5fb4
title: "FileByteDocumentStore.Write"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Replaces the document atomically after preparation succeeds.

## Parameters

**Parameter `data`:** The complete candidate bytes; the implementation cannot retain borrowed caller memory.

## Exceptions

**Exception `T:System.NotSupportedException`:** The source is read-only.
