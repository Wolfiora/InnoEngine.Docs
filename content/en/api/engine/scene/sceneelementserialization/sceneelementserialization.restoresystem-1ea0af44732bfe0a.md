---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1ea0af44732bfe0a28cd51a9a90506a46d07b462f8f99236cf0cd4081334b903
symbol: engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.RestoreSystem(Inno.Scene.GameScene,Inno.Extensibility.Types.TypeRef,System.Guid,System.Int32,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneElementSerialization.RestoreSystem
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: aa19b3b257e69399e71e53c961ef84a2ab5fb9489eba12ad41c7ce96c99caa9d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The live loaded scene that will own the system.

**Parameter `type`:** The reload-safe identity of the current system implementation.

**Parameter `persistentID`:** The system instance identity to preserve.

**Parameter `systemIndex`:** The requested display and serialization index.

**Parameter `stateData`:** Complete neutral element bytes produced by CaptureState, including missing-state metadata.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored properties.

## Returns

The recreated system, or a preserved missing placeholder when its logical type is unavailable.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the payload is invalid or the stable type resolves to an incompatible system.

**Exception `T:System.InvalidOperationException`:** Thrown when the identity or system multiplicity conflicts, property restoration is incomplete, or a failed restoration cannot remove its partially created system.
