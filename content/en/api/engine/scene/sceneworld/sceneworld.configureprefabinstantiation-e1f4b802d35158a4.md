---
uid: api.e1f4b802d35158a4d632ce1ede70668e91fef9932cfc5d9b46bc8f788392854e
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.ConfigurePrefabInstantiation(Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 08cd4c18b23d8ead1c69bb3d55954846eadd83edc7e0538b0fba26291ca21f01
title: "SceneWorld.ConfigurePrefabInstantiation"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Binds the session-owned serialization and asset generations used by scene prefab instances.

**Parameter `serialization`:** The active serialization registry for this session.

**Parameter `assets`:** The asset resolver that owns prefab dependencies.

**Exception `T:System.InvalidOperationException`:** The binding was already configured.
