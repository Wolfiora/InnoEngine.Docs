---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fe5536071e8391fef55b8360c5fa8494e62d696df94bb9f01435c8cae5831aad
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.ReadByte
title: OwnedReadStream.ReadByte
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: b7e531d5e453c9c3d7f8e0aa2c40cc84f45c30a9b46a9b45dea235c52815beaa
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.NotSupportedException`:** The stream does not support reading.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

## Returns

The unsigned byte cast to an `T:System.Int32`, or -1 if at the end of the stream.
