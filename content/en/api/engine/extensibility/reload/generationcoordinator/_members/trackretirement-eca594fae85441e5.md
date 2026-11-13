---
uid: api.eca594fae85441e550a0c740681bb08fa74fd14227a43168ec07bccdcf37cfba
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe)"
source: xml
reviewed: 785808baee0b7ea0da88e00b7c946fe09350f85b6c30727b33d79f935c985bd5
title: "TrackRetirement"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Registers every retired or discarded context without dropping already pending monitors.

**Parameter `probe`:** A stable engine-owned weak monitor that must not retain the collectible context.
