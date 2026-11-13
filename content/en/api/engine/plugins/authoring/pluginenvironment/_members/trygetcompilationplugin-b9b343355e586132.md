---
uid: api.b9b343355e586132b34ebb3a4de578d4b1e7c7e4c313696f60730d356bb29502
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.TryGetCompilationPlugin(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@)"
source: xml
reviewed: 663b66a97f55fe88a7c0c7e927f1b4c2712972b40e90f71cbf815cab3d8f37db
title: "TryGetCompilationPlugin"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Resolves a Plugin owned by the active or pending script-compilation generation.

**Parameter `source`:** Plugin source mount ID.

**Parameter `plugin`:** Resolved Plugin candidate.

**Returns:** True when the compilation generation owns the source.
