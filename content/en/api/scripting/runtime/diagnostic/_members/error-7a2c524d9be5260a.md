---
uid: api.7a2c524d9be5260a775db7d82f5a903480b1b2a83a384b9a90cb06886c894845
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Error(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: 833c3897cff6e250e6d93b3cc8a2933e30d3e3680e1e8f330f1c32ece76b21ca
title: "Error"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates an error diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable error diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
