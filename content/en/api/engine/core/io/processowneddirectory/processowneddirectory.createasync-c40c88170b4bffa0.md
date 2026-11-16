---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c40c88170b4bffa0256cfc3915248922bf302f91b57c19730a536c0da6a39f6a
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.CreateAsync(System.String,System.Threading.CancellationToken)
title: ProcessOwnedDirectory.CreateAsync
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: ec2c750beaf67603abd4b53a40e189623eb3277b410ee4b3e4e54de24067d2dd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The absolute producer-controlled root; existing unrecorded directories are never adopted.

**Parameter `cancellationToken`:** Cancels before payload ownership is returned.

## Returns

An owned directory lease; dispose only after its subprocesses and consumers finish.

## Exceptions

**Exception `T:System.ArgumentException`:** The root is relative or is a filesystem root.

**Exception `T:System.IO.IOException`:** The boundary crosses a link or ownership cannot be recorded.

**Exception `T:System.OperationCanceledException`:** Creation was canceled.
