---
uid: api.96f38d2f5b3b99a84db70838d418baca06fb4e16193289f324ca1321b4715e62
symbol: "engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.TryGet(Inno.Assets.AssetSourceId,Inno.Plugins.Authoring.PluginCandidate@)"
source: xml
reviewed: ed038c855f33945a4b123cc76027a8b3bf6686d8229394f3e1653ee27af91fdb
title: "PluginEnvironment.TryGet"
kind: api
owners: [Inno.Plugins.Authoring]
apiSurface: source-clr
---

Tries to resolve the active Plugin that owns an asset source.

**Parameter `source`:** The isolated asset source identity.

**Parameter `plugin`:** Receives the active Plugin candidate when the source is owned by one.

**Returns:** `true` when an active Plugin owns the source.
