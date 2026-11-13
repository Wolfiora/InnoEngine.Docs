---
uid: api.6c0e62210f986f311a120fa092d9cdb4f2fe00f15b795f8d4ba1a2bcf2212889
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.RegisterCatalogParticipant(Inno.Extensibility.Modules.IAssemblyCatalogParticipant)"
source: xml
reviewed: 98f7d87bf1a1bf08fb6555c1e5a7ca179f1735995f97de23c49bb79c0a148e9f
title: "RegisterCatalogParticipant"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Registers a transactional consumer of the assembly catalog and initializes it from the currently active generation.

**Parameter `participant`:** The participant that derives state from catalog snapshots.

**Returns:** A registration that removes the participant when disposed.
