---
uid: api.b80fa6bdfa655f093d976e6d3b5b627c8ab86707cfab663a9287825f79dfbcbe
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Rollback"
source: xml
reviewed: 138f4f166f90a45b9ef9373b3be4070bb0709c303ed6a5b504f75107e89b1d76
title: "Rollback"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Restores the previous state and releases the candidate state.

## Remarks

Implementations should isolate individual cleanup failures so every candidate resource can be released.
