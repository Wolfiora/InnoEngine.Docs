---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c2e326e04944ff50ec21470232be25819e0b804d6bcb45205242ce95cd9a9d6a
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})
title: Diagnostic.Error
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 05f5c8c3cbfdae81a305bbe1327be160f31484ea855d859f1a89febfbd49b549

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

## Returns

An immutable error diagnostic that can be supplied to `M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
