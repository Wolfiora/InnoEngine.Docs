---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d63e80535785eb7511b98b1757dccd0cd194672cdbf01c5bb87ae031ec6fc6bf
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})
title: Diagnostic.Warning
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: a2188a6b507ed7dc17e6cac14d758091672c94ccbf7bbe441bd9ce3afa66bcd3
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
