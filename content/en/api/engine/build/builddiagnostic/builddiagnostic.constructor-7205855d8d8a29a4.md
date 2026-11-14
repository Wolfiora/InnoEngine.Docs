---
uid: api.7205855d8d8a29a4ad9723294a1ac818de663a8c4887b0d0562a93db558a528f
symbol: "engine:Inno.Build:M:Inno.Build.BuildDiagnostic.#ctor(Inno.Build.BuildDiagnosticSeverity,System.String,System.String)"
source: xml
reviewed: 55ea7723d8bd55f45aacb35fa98bbb4158ebdae38ccb315f003096900ec82ad3
title: "BuildDiagnostic.Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates an immutable build diagnostic.

## Parameters

**Parameter `severity`:** The impact of the diagnostic on build success.

**Parameter `code`:** The stable diagnostic code.

**Parameter `message`:** The human-readable explanation.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when code or message is empty.
