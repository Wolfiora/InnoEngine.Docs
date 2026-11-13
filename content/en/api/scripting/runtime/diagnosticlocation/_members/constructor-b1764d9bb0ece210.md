---
uid: api.b1764d9bb0ece210c15e86ebe4a794d02920232f45dc53869f85db1332362e36
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32)"
source: xml
reviewed: d7dabc51e75b6babdac80b77d965097f7431dc59881960f498ab752938913eda
title: "Constructor"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a source location.

**Parameter `sourcePath`:** The source path associated with the diagnostic.

**Parameter `line`:** The one-based line number, or zero when it is unavailable.

**Parameter `column`:** The one-based column number, or zero when it is unavailable.

**Exception `T:System.ArgumentException`:** Thrown when `sourcePath` is empty or contains only whitespace.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `line` or `column` is negative.
