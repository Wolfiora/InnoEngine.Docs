---
uid: api.7205855d8d8a29a4ad9723294a1ac818de663a8c4887b0d0562a93db558a528f
symbol: "engine:Inno.Build:M:Inno.Build.BuildDiagnostic.#ctor(Inno.Build.BuildDiagnosticSeverity,System.String,System.String)"
source: xml
reviewed: 3546dfd38d915e3d7e6164faf6585c8b0d392f9ef630d074af0389457b4aedde
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an immutable build diagnostic.

**Parameter `severity`:** The impact of the diagnostic on build success.

**Parameter `code`:** The stable diagnostic code.

**Parameter `message`:** The human-readable explanation.

**Exception `T:System.ArgumentException`:** Thrown when code or message is empty.
