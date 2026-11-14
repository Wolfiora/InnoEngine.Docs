---
uid: api.05d94da052f2bffd28577eb00876e3a53683e936ecdbf2bca5dd15156a672a98
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ResolveReference(System.Guid,System.Guid,System.String,System.Type)"
source: xml
reviewed: 457acf87c0e2acc571e929921897e8cd04e18d553491738bca58c92c6bfe302a
title: "AssetLoader.ResolveReference"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Resolves a serialized reference or creates a persistent missing placeholder.

**Parameter `persistentId`:** The referenced persistent identity.

**Parameter `stableTypeId`:** The referenced stable asset type identity.

**Parameter `lastKnownPath`:** The last known source-relative path.

**Parameter `expectedType`:** The declared destination type.

**Returns:** A compatible canonical asset or missing placeholder.
