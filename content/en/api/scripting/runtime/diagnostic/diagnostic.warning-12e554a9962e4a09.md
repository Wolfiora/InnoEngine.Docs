---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.12e554a9962e4a09aef2e8f7c307bb5f98f3a002a1d9325b2ad602a0fba18091
symbol: scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})
title: Diagnostic.Warning
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: editor-script
sourceFingerprint: befecace63ff43575b39c815aead8a924aa58a0da488ec5b0ef0b9264adbc6d2
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

An immutable warning diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
