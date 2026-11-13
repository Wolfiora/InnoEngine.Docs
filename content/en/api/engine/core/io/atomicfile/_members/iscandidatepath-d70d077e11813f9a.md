---
uid: api.d70d077e11813f9ae17e1efb62b98efb9a3298d24325a8ef47e6c90320d98ab1
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.IsCandidatePath(System.String)"
source: xml
reviewed: caf23b8fe768121cfb7395f18cf7a874999bc0cd82a3a693c0915253e6104715
title: "IsCandidatePath"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Recognizes the reserved temporary file names created by atomic byte publication.

**Parameter `path`:** The file name or path to inspect without opening the file.

**Returns:** True for a nonempty destination name followed by the reserved marker and a complete hexadecimal operation identity.

## Remarks

Recognition excludes transient payloads from source discovery. It does not establish ownership or authorize deletion.

**Exception `T:System.ArgumentNullException`:** The path is null.
