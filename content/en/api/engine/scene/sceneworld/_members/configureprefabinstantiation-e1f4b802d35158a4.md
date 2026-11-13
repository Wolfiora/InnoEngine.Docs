---
uid: api.e1f4b802d35158a4d632ce1ede70668e91fef9932cfc5d9b46bc8f788392854e
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.ConfigurePrefabInstantiation(Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: bbd7ee9aecb4c039d2b66fd82d6b2cbb9122f4b169fc749c48b729e1bf75ba7d
title: "ConfigurePrefabInstantiation"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Binds the session-owned serialization and asset generations used by scene prefab instances.

**Parameter `serialization`:** The active serialization registry for this session.

**Parameter `assets`:** The asset resolver that owns prefab dependencies.

**Exception `T:System.InvalidOperationException`:** The binding was already configured.
