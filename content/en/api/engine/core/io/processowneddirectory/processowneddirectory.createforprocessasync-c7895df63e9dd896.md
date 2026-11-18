---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c7895df63e9dd89664490c54445f2adab86726ecc76308c81c470126941f609c
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.CreateForProcessAsync(System.String,System.String,System.Threading.CancellationToken)
title: ProcessOwnedDirectory.CreateForProcessAsync
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 556c40b5e4fcaa7b1e5de17c7ce5bc5c60c10c618f65f96390852dca0c7c41b8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The absolute producer root; existing directories are never adopted.

**Parameter `identity`:** A current operation's explicit 32-digit hexadecimal directory identity shared by its process participants.

**Parameter `cancellationToken`:** Cancels before the process claim is transferred.

## Returns

The new directory, preserved until every recorded process exits and the producer retires it. No managed lease object is retained by the caller.

## Exceptions

**Exception `T:System.IO.IOException`:** Ownership cannot be established within the boundary.

**Exception `T:System.ArgumentException`:** The producer root or current operation identity is invalid.

**Exception `T:System.IO.InvalidDataException`:** An existing operation claim is malformed, inactive, or cannot authorize this process.
