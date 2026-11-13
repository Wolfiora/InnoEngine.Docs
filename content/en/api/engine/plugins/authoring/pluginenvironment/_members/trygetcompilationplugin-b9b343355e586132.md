---
uid: api.b9b343355e586132b34ebb3a4de578d4b1e7c7e4c313696f60730d356bb29502
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.TryGetCompilationPlugin(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@)"
source: xml
reviewed: a634b4a1780905be8d79982ce2dcf29c6c15ce043548b267d27aca8fe844e1a0
title: "TryGetCompilationPlugin"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Resolves a Plugin owned by the active or pending script-compilation generation.

**Parameter `source`:** Plugin source mount ID.

**Parameter `plugin`:** Resolved Plugin candidate.

**Returns:** True when the compilation generation owns the source.
