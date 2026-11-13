---
uid: api.b80fa6bdfa655f093d976e6d3b5b627c8ab86707cfab663a9287825f79dfbcbe
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Rollback"
source: xml
reviewed: 786ca73062b90c4ecd5690f656c926e800277eb25265988a4cbd9142b920a0ed
title: "Rollback"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Restores the previous state and releases the candidate state.

## Remarks

Implementations should isolate individual cleanup failures so every candidate resource can be released.
