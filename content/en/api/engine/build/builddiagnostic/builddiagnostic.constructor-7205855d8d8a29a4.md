---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7205855d8d8a29a4ad9723294a1ac818de663a8c4887b0d0562a93db558a528f
symbol: engine:Inno.Build:M:Inno.Build.BuildDiagnostic.#ctor(Inno.Build.BuildDiagnosticSeverity,System.String,System.String)
title: BuildDiagnostic.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 59fa3d9b6ac39b28461c32b29e301da1921e1ce72a0e6410eef9689e8ad0f4c8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `severity`:** The impact of the diagnostic on build success.

**Parameter `code`:** The stable diagnostic code.

**Parameter `message`:** The human-readable explanation.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when code or message is empty.
