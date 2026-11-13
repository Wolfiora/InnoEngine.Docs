---
uid: api.7d0b51b7b6d9c745828a94190c704bd800e6c0c3916be871c854d731e004d613
symbol: "engine:Inno.Storage:M:Inno.Storage.Storage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: 4de18e70d685c98b2868fb672677b9a53729d05f05f262b070256d57e8681c97
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
