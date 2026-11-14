---
uid: api.0f9377f390890646b23aab26377b93e0489cf2d470350204423bd0d732a957e0
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMount.#ctor(Inno.Assets.AssetSourceId,System.String,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Assets.AssetSourceId})"
source: xml
reviewed: 73a55a27d9cb12ccaa9aceb163297fa4aa7b8993afbddcfafd331d0a53e755ef
title: "AssetSourceMount.Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates an asset source mount.

## Parameters

**Parameter `id`:** Stable source identity.

**Parameter `rootPath`:** Absolute or resolvable physical source root.

**Parameter `isReadOnly`:** Whether all source mutations must be rejected.

**Parameter `dependencies`:** Other read-only sources this source may reference.
