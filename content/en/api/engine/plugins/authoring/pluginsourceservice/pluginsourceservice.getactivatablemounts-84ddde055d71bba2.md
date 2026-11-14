---
uid: api.84ddde055d71bba231d0594d6cc6cc7a8806849c82eec6c54091accb3b9b6f46
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginSourceService.GetActivatableMounts(Inno.Plugins.Authoring.PluginScanResult)"
source: xml
reviewed: 056fd63c66c9d5356b923bf6d5381c1afd454adb868ba577d761beacbd4eb8e3
title: "PluginSourceService.GetActivatableMounts"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Gets read-only mounts that passed validation and dependency ordering.

## Parameters

**Parameter `result`:** Complete scan result.

## Returns

Dependency-ordered mount snapshot suitable for the common AssetPipeline.
