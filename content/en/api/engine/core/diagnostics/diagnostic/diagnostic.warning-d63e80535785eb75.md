---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d63e80535785eb7511b98b1757dccd0cd194672cdbf01c5bb87ae031ec6fc6bf
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})
title: Diagnostic.Warning
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 49684dd1b6e68521d2f55889f293d0e3d7eeb64eb865c22b761ae837d89c613e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

## Returns

An immutable warning diagnostic that can be supplied to `M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
