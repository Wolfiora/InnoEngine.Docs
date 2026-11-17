---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6b03b2344a9427cdc568567df27cecb8758c88eeef7706056b10dd8ca0b93bf0
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})
title: Diagnostic.Info
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 172361b8eed97aae4cb22c3b46f89c05d2373085b9f0aa084bf149235b2c8496
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

An immutable informational diagnostic that can be supplied to `M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
