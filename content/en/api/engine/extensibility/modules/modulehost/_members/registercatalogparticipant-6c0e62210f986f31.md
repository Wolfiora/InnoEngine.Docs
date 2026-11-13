---
uid: api.6c0e62210f986f311a120fa092d9cdb4f2fe00f15b795f8d4ba1a2bcf2212889
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.RegisterCatalogParticipant(Inno.Extensibility.Modules.IAssemblyCatalogParticipant)"
source: xml
reviewed: 1880c0d7fd83bda009e806dac82a147370363aeaf5faf8c6677cef01b74ce724
title: "RegisterCatalogParticipant"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Registers a transactional consumer of the assembly catalog and initializes it from the currently active generation.

**Parameter `participant`:** The participant that derives state from catalog snapshots.

**Returns:** A registration that removes the participant when disposed.
