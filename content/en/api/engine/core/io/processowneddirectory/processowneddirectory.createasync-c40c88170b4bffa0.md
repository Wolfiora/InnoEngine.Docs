---
uid: api.c40c88170b4bffa0256cfc3915248922bf302f91b57c19730a536c0da6a39f6a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.CreateAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 245a479ba68abd92c56731071543cfda5333d0abdec0cf8ee6cf55e2e778de0b
title: "ProcessOwnedDirectory.CreateAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Creates a fresh directory and ownership record under an explicitly supplied file boundary.

## Parameters

**Parameter `root`:** The absolute producer-controlled root; existing unrecorded directories are never adopted.

**Parameter `cancellationToken`:** Cancels before payload ownership is returned.

## Returns

An owned directory lease; dispose only after its subprocesses and consumers finish.

## Exceptions

**Exception `T:System.ArgumentException`:** The root is relative or is a filesystem root.

**Exception `T:System.IO.IOException`:** The boundary crosses a link or ownership cannot be recorded.

**Exception `T:System.OperationCanceledException`:** Creation was canceled.
