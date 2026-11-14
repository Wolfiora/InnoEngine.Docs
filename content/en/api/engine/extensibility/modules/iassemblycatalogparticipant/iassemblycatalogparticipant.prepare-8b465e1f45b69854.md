---
uid: api.8b465e1f45b6985427e476e9e90b6861d1cee5c1aef3fd1ed8fd1d819c12e5b6
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IAssemblyCatalogParticipant.Prepare(Inno.Extensibility.Modules.AssemblyCatalogSnapshot)"
source: xml
reviewed: 7e748363f14614147e8ccfb9d7c15052ec1c2c362d3f00d30620d12ed452dcfa
title: "IAssemblyCatalogParticipant.Prepare"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Validates a candidate catalog and prepares state without publishing it.

**Parameter `catalog`:** The complete candidate assembly catalog.

**Returns:** A transaction controlling publication, completion, and rollback.
