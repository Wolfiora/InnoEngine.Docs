---
uid: api.4ee5b161881fad4f322bcadf82b0c30c3e910894904f70cbb7f30d2e9e718826
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Complete"
source: xml
reviewed: 76906decfc9420d1d84db6495c585b58704f95e7adc17410d1c5359890c8bc6e
title: "Complete"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Finalizes an activated state and releases the previous state without performing further publication work.

## Remarks

Ordinary cleanup failures must remain observable after all independent owners have been attempted. The coordinator faults further generation admission instead of ignoring the failure or pretending publication can roll back. Unfinished retirement must retain its owners and propagate the retirement barrier before releasing their dependencies.
