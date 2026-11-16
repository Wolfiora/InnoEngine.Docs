---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9fd3a5a32e8e69fd5f2f2528e9a61dfb6405ffceef4ff7cf2cddf917f0d9574f
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.ReadClaims(System.String,System.Threading.CancellationToken)
title: ProcessOwnedDirectory.ReadClaims
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: b39783a7a65a6eef3d80a6f3f784bfd936fde0a9de1e45cb63b75b0de23277c7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The producer-controlled absolute root.

**Parameter `cancellationToken`:** Cancels claim inspection.

## Returns

Existing directories with exact lease paths and conservative combined owner states.

## Exceptions

**Exception `T:System.IO.IOException`:** A claim cannot be read or its directory escapes the producer boundary.

**Exception `T:System.IO.InvalidDataException`:** A claim is malformed or its recorded identity does not match its location.
