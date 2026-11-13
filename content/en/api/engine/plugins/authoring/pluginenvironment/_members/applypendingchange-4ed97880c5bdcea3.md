---
uid: api.4ed97880c5bdcea3d0e85bc76c9915f40bd4e68824f0896ac1ea0be4348ae5b5
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.ApplyPendingChange"
source: xml
reviewed: 3ab48f84b8d254363c37350a490b9653c50c8d17422fa6503927db388d7a9324
title: "ApplyPendingChange"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Commits a non-code availability change using the same generation gate and recovery phases as script reload.

**Exception `T:System.InvalidOperationException`:** The Host is not ready for a new generation.
