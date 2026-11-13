---
uid: api.84ddde055d71bba231d0594d6cc6cc7a8806849c82eec6c54091accb3b9b6f46
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginSourceService.GetActivatableMounts(Inno.Plugins.Authoring.PluginScanResult)"
source: xml
reviewed: 0c37611d52aad150095d55854218f2685b368045844adede810597e6f19bfaba
title: "GetActivatableMounts"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Gets read-only mounts that passed validation and dependency ordering.

**Parameter `result`:** Complete scan result.

**Returns:** Dependency-ordered mount snapshot suitable for the common AssetPipeline.
