---
uid: api.c40c88170b4bffa0256cfc3915248922bf302f91b57c19730a536c0da6a39f6a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.CreateAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 15871654f904d187d82935323275a47fb606e7c2942c48cad57aa9e6e796abe8
title: "CreateAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Creates a fresh directory and ownership record under an explicitly supplied file boundary.

**Parameter `root`:** The absolute producer-controlled root; existing unrecorded directories are never adopted.

**Parameter `cancellationToken`:** Cancels before payload ownership is returned.

**Returns:** An owned directory lease; dispose only after its subprocesses and consumers finish.

**Exception `T:System.ArgumentException`:** The root is relative or is a filesystem root.

**Exception `T:System.IO.IOException`:** The boundary crosses a link or ownership cannot be recorded.

**Exception `T:System.OperationCanceledException`:** Creation was canceled.
