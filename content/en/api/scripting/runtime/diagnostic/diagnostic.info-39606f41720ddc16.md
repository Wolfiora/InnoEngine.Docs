---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.39606f41720ddc16f36c92422d84142ad0a2fbd077efb8f533ded4a8c61cbe85
symbol: scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})
title: Diagnostic.Info
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: editor-script
reviewed: 6c9de6a0d0d45df1db85e49abdf5e82a17e6e2bb4fd287f854028168497bb0a1
apiScope: Runtime
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

An immutable informational diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
