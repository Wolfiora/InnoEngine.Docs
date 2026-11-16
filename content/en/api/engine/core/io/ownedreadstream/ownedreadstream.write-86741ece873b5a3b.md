---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.86741ece873b5a3bc0b6b94e3c9350b496b4b674d41b0d27f86723e4f85f497f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.Write(System.Byte[],System.Int32,System.Int32)
title: OwnedReadStream.Write
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 20e95982698549e9f51e3ea2f682c786b2663a8987f70c1a5af8d286b95d69a0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `buffer`:** An array of bytes. This method copies `count` bytes from `buffer` to the current stream.

**Parameter `offset`:** The zero-based byte offset in `buffer` at which to begin copying bytes to the current stream.

**Parameter `count`:** The number of bytes to be written to the current stream.

## Exceptions

**Exception `T:System.ArgumentException`:** The sum of `offset` and `count` is greater than the buffer length.

**Exception `T:System.ArgumentNullException`:** `buffer` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Exception `T:System.IO.IOException`:** An I/O error occurred, such as the specified file cannot be found.

**Exception `T:System.NotSupportedException`:** The stream does not support writing.

**Exception `T:System.ObjectDisposedException`:** `M:System.IO.Stream.Write(System.Byte[],System.Int32,System.Int32)` was called after the stream was closed.
