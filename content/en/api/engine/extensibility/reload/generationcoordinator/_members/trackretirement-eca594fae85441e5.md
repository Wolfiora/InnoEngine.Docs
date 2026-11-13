---
uid: api.eca594fae85441e550a0c740681bb08fa74fd14227a43168ec07bccdcf37cfba
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe)"
source: xml
reviewed: c4649dd8c410c45d4322ac90bd1a389a7338ade4677de9419c0c3e4622a778ac
title: "TrackRetirement"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Registers every retired or discarded context without dropping already pending monitors.

**Parameter `probe`:** A stable engine-owned weak monitor that must not retain the collectible context.
