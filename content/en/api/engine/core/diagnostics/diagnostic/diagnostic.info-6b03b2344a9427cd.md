---
uid: api.6b03b2344a9427cdc568567df27cecb8758c88eeef7706056b10dd8ca0b93bf0
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: b325ca48195d20c7ef9ac1d4dc7464c118272de299764cd73df5df19cfcf64ff
title: "Diagnostic.Info"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Creates an informational diagnostic value without publishing it.

## Parameters

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

## Returns

An immutable informational diagnostic that can be supplied to `M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
