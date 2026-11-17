---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7a2c524d9be5260a775db7d82f5a903480b1b2a83a384b9a90cb06886c894845
symbol: scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})
title: Diagnostic.Error
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: editor-script
reviewed: 78c12d6a28dc9db2afbc27ce8e0511ee1d8e1d1cbfa98ecd9a5aef28b8d9722b
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

An immutable error diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
