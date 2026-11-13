---
uid: api.b1764d9bb0ece210c15e86ebe4a794d02920232f45dc53869f85db1332362e36
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.DiagnosticLocation.#ctor(System.String,System.Int32,System.Int32)"
source: xml
reviewed: e78670f7411d248171bdb1cfce16ee39a0491f8cb9fa2f9e07fb8578fcd3b147
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
