---
uid: api.7d0b51b7b6d9c745828a94190c704bd800e6c0c3916be871c854d731e004d613
symbol: "engine:Inno.Storage:M:Inno.Storage.Storage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: 8fbfc05be5e6f283ae767d721d370767bb01bb6201ad34ee896a0831a753a0a6
title: "WriteAsync"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after commit.
