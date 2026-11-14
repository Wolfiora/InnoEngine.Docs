---
uid: api.c89038a20a38d37bf2a489409b7bb964bef88404a49306f469f2588379cdf247
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject)"
source: xml
reviewed: 0ce8e823b20a50de4e5b2733d43a0bd0787fbdae74142fa2f828592814c03370
title: "EditorAssets.Save"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates or replaces a writable project asset source and imports the committed result.

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

**Returns:** `true` when the source was committed and imported successfully.

**Exception `T:System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.
