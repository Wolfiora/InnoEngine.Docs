---
uid: api.39606f41720ddc16f36c92422d84142ad0a2fbd077efb8f533ded4a8c61cbe85
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.Info(System.String,System.String,System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: 24daf72e6c4d1b0cbc9310094b73a13f655a038111cbdf52f6d605cf77629fd0
title: "Diagnostic.Info"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates an informational diagnostic value without publishing it.

## Parameters

**Parameter `code`:** The stable producer-defined code, or an empty string when no code is available.

**Parameter `message`:** The human-readable diagnostic message.

**Parameter `location`:** The related source location, or `null` when unavailable.

## Returns

An immutable informational diagnostic that can be supplied to `M:InnoEngine.Diagnostics.Diagnostics.Set(System.String,InnoEngine.Diagnostics.Diagnostic)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `message` is `null`.
