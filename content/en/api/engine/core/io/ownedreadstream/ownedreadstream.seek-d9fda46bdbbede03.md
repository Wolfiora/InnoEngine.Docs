---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d9fda46bdbbede0390ee50fec60d47f530ff955987e65d3386584a427bdc11bb
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.Seek(System.Int64,System.IO.SeekOrigin)
title: OwnedReadStream.Seek
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 601edc13ad02ce574ac6c2f26fcaa7bb7ceda32b7e373b7bb1d928309a311926
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `offset`:** A byte offset relative to the `origin` parameter.

**Parameter `origin`:** A value of type `T:System.IO.SeekOrigin` indicating the reference point used to obtain the new position.

## Exceptions

**Exception `T:System.IO.IOException`:** An I/O error occurs.

**Exception `T:System.NotSupportedException`:** The stream does not support seeking, such as if the stream is constructed from a pipe or console output.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

## Returns

The new position within the current stream.
