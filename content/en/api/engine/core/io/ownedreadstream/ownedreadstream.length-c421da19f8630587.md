---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c421da19f8630587fd369f2666a6448b780cddf5ed3b6d63ec00fb922134b432
symbol: engine:Inno.Core.IO:P:Inno.Core.IO.OwnedReadStream.Length
title: OwnedReadStream.Length
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 5d923a74e9c008ce4cd258942c26b0b205de3143149a33029db2ccaddd477400
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.NotSupportedException`:** A class derived from `Stream` does not support seeking and the length is unknown.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

## Returns

A long value representing the length of the stream in bytes.
