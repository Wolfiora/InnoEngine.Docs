---
uid: api.96f38d2f5b3b99a84db70838d418baca06fb4e16193289f324ca1321b4715e62
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.TryGet(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@)"
source: xml
reviewed: 536872191a6f5685e564a356bf4d5b709e771b43654565a54d7ed0cec82e0f68
title: "TryGet"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Tries to resolve the active Plugin that owns an asset source.

**Parameter `source`:** The isolated asset source identity.

**Parameter `plugin`:** Receives the active Plugin candidate when the source is owned by one.

**Returns:** `true` when an active Plugin owns the source.
