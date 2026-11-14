---
uid: api.12e554a9962e4a09aef2e8f7c307bb5f98f3a002a1d9325b2ad602a0fba18091
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: ac9c88f8e6b760cf2fd75ae085996e47ff66c8f1ba1fc64767011a0a3a899db4
title: "Diagnostic.Warning"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a warning diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable warning diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
