---
uid: api.a75e85186edaaa4c8e76c863168b9d96cc5a12fd41c457abe26f420be5e62584
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneReloadService.#ctor(Inno.Scene.SceneWorld,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 069ec04d23ae0d201a1c306a728bf3e38136a31157dd67b5d15a3b147a709f3a
title: "Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a scene reload service bound to one serialization generation owner.

**Parameter `serialization`:** The serialization registry used to capture and restore scene state.

**Parameter `world`:** The isolated scene world whose active generation is captured.

**Parameter `assets`:** The asset reference generation used throughout capture, activation, and rollback.

**Exception `T:System.ArgumentNullException`:** Thrown when `world`, `serialization`, or `assets` is null.
