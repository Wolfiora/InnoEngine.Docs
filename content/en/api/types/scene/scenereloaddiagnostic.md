---
title: "SceneReloadDiagnostic"
description: "Reference for SceneReloadDiagnostic in Inno.Scene."
uid: api.inno.scene.56f92d2d774c00a5
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneReloadDiagnostic`

This reference describes `SceneReloadDiagnostic` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`code`](#api-5dcfd320c28822fa) | Property |
| [`currentPropertyType`](#api-13e8822d3c3fb645) | Property |
| [`message`](#api-8516903cf2d955d2) | Property |
| [`objectPersistentId`](#api-731998518ae2eee7) | Property |
| [`previousPropertyType`](#api-90d40f7a0a28b984) | Property |
| [`propertyName`](#api-638f765104519da3) | Property |
| [`scenePersistentId`](#api-4dd5d961d42909c2) | Property |
| [`severity`](#api-511cbba7b315c7c7) | Property |

## Type declaration

<a id="api-56f92d2d774c00a5"></a>
<!-- api: T:Inno.Scene.SceneReloadDiagnostic 8f65c6e87513a7263786cd10cd960d4dee756c3ce23bd2b15facd3c190988438 -->

```csharp
public sealed class Inno.Scene.SceneReloadDiagnostic
```

Describes a non-fatal issue encountered while migrating scene state to a new assembly generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L9).

## `code`

<a id="api-5dcfd320c28822fa"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.code d66461186e1b86baab199062f61d3061252c6c1bd5de83bec27c654322a25256 -->

```csharp
public string Inno.Scene.SceneReloadDiagnostic.code { get; }
```

Gets the stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L34).

## `currentPropertyType`

<a id="api-13e8822d3c3fb645"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.currentPropertyType c6513d9eaeb8b58e0b5de06656459b6ef9e50e1628d48ac6e09dd590a9e15dc6 -->

```csharp
public string Inno.Scene.SceneReloadDiagnostic.currentPropertyType { get; }
```

Gets the current declared property type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L69).

## `message`

<a id="api-8516903cf2d955d2"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.message b78847281a69288b84f0fc48e1ff397e6e38c1098c194de00d0a680669dc6b69 -->

```csharp
public string Inno.Scene.SceneReloadDiagnostic.message { get; }
```

Gets the human-readable diagnostic message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L44).

## `objectPersistentId`

<a id="api-731998518ae2eee7"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.objectPersistentId 92d88195fe007f37960609b3438bbc4f6b51730736da93738405d25cbffb8537 -->

```csharp
public System.Guid Inno.Scene.SceneReloadDiagnostic.objectPersistentId { get; }
```

Gets the persistent identity of the affected component or system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L54).

## `previousPropertyType`

<a id="api-90d40f7a0a28b984"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.previousPropertyType 8b23e19cfdb4266b1a1b555868ae4d844e04dacf4be5f4a567f78f1b64bccf10 -->

```csharp
public string Inno.Scene.SceneReloadDiagnostic.previousPropertyType { get; }
```

Gets the previous declared property type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L64).

## `propertyName`

<a id="api-638f765104519da3"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.propertyName ddf0b187da9f913acdabd833c68255c46618d4325050c12ecd0fbfb77b1b499a -->

```csharp
public string Inno.Scene.SceneReloadDiagnostic.propertyName { get; }
```

Gets the incompatible serialized property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L59).

## `scenePersistentId`

<a id="api-4dd5d961d42909c2"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.scenePersistentId c83c95530c1ca9df151713ecd0fa3571ca1668003952dc3b066d5217cd8f26e2 -->

```csharp
public System.Guid Inno.Scene.SceneReloadDiagnostic.scenePersistentId { get; }
```

Gets the persistent identity of the affected scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L49).

## `severity`

<a id="api-511cbba7b315c7c7"></a>
<!-- api: P:Inno.Scene.SceneReloadDiagnostic.severity d2e7ab8d45ebc93d3d9bb2787b31a6f47c2d63a2875cd8e39b5d31172a4103a4 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Scene.SceneReloadDiagnostic.severity { get; }
```

Gets the diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/SceneReloadDiagnostic.cs#L39).
