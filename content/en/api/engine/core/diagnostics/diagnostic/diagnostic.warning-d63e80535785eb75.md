---
uid: api.d63e80535785eb7511b98b1757dccd0cd194672cdbf01c5bb87ae031ec6fc6bf
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Warning(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: 37689f7161e06051a5e28b6ad9bf43a6e761c6672d18d261049bc34a84da2131
title: "Diagnostic.Warning"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Creates a warning diagnostic value without publishing it.

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

**Returns:** An immutable warning diagnostic that can be supplied to `M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
