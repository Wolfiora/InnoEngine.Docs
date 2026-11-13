---
uid: api.a75e85186edaaa4c8e76c863168b9d96cc5a12fd41c457abe26f420be5e62584
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: a5945c38eae37105ef73f3e95d222643f07484d914b1b59709d77967f59ed159
title: "SceneReloadService.Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a scene reload service bound to one serialization generation owner.

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

**Exception `T:System.ArgumentNullException`:** Thrown when `world`, `serialization`, or `assets` is null.
