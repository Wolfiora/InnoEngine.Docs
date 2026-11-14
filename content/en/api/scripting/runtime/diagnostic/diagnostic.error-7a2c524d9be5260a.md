---
uid: api.7a2c524d9be5260a775db7d82f5a903480b1b2a83a384b9a90cb06886c894845
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: eb0a9abc7dcbb0a4829b2a5e6c7f1271a2099421a9b26f18fbed56ef3975dbb0
title: "Diagnostic.Error"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates an error diagnostic value without publishing it.

## Parameters

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

## Returns

An immutable error diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
