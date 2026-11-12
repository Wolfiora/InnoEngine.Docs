---
title: "GameLayerCatalog"
description: "Reference for GameLayerCatalog in Inno.Scene."
uid: api.inno.scene.runtime-script.1d7340e7e7d745cd
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameLayerCatalog`

This reference describes `GameLayerCatalog` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-2cc98d341342454a) | Field |
| [`#ctor`](#api-06d4c50824708c17) | Method |
| [`CanInteract`](#api-25e1bb15c776ab7d) | Method |
| [`Clone`](#api-6787264666c0330c) | Method |
| [`Define`](#api-97a0ff6371ad87a8) | Method |
| [`GetDefinitions`](#api-0a89053a659d3fd4) | Method |
| [`GetId`](#api-eb3d2b20dc0575e7) | Method |
| [`GetInteractionMask`](#api-a6d90c69af444818) | Method |
| [`GetLayer`](#api-4aea6ed67f9ce0af) | Method |
| [`GetLocalId`](#api-1c2ccd732f8a4980) | Method |
| [`GetMask`](#api-a1a79831c3b4edd4) | Method |
| [`GetName`](#api-d05f173297676d03) | Method |
| [`IsDefined`](#api-c37cda3934757444) | Method |
| [`Remove`](#api-37d4a6c25bc89983) | Method |
| [`SetInteraction`](#api-8c59266fba0dcbfc) | Method |
| [`TryGetLayer`](#api-a4cb6cddafd9d1f0) | Method |
| [`TryGetLayer`](#api-a6a50cd442b10241) | Method |
| [`TryGetLayer`](#api-43af4d447ca495d0) | Method |
| [`count`](#api-86e62bf66ca53bc4) | Property |
| [`settingId`](#api-0263836f6dc2bd0c) | Property |

## Type declaration

<a id="api-1d7340e7e7d745cd"></a>
<!-- api: T:InnoEngine.Scene.GameLayerCatalog 48935f3c7935d5bec14ac43efa98545d297dd5ef416df20aa874570e72beaffb -->

```csharp
public sealed class InnoEngine.Scene.GameLayerCatalog : InnoEngine.Serialization.ISerializable
```

Stores the named layer catalog and symmetric layer-interaction matrix used by a project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L18).

## `settingProtocolId`

<a id="api-2cc98d341342454a"></a>
<!-- api: F:InnoEngine.Scene.GameLayerCatalog.settingProtocolId 191685c4262b2cfc749c5ecba92a70df62a5d142f832c4abd88d914e61da8d48 -->

```csharp
public const string InnoEngine.Scene.GameLayerCatalog.settingProtocolId = "inno.scene.layers"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L23).

## `#ctor`

<a id="api-06d4c50824708c17"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.#ctor 1e33e8d8a9381b00c1e1120c558375ca8491d740908ac0525491a25a50c3abc4 -->

```csharp
public InnoEngine.Scene.GameLayerCatalog.GameLayerCatalog()
```

Creates a layer stack containing the immutable default layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L44).

## `CanInteract`

<a id="api-25e1bb15c776ab7d"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.CanInteract(InnoEngine.Scene.GameLayer,InnoEngine.Scene.GameLayer) 6739ab7748a844ff6defb827c8d4574092e3a7792c964b9884d0a29f3c4450bc -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.CanInteract(InnoEngine.Scene.GameLayer first, InnoEngine.Scene.GameLayer second)
```

Determines whether two layer slots may interact.

**Parameter `first`:** The first layer.

**Parameter `second`:** The second layer.

**Returns:** `true` when interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L386).

## `Clone`

<a id="api-6787264666c0330c"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.Clone 1ed11a9892e82c08663aff0cd39f24f35498ce9b0780b8dadd296fafb3828792 -->

```csharp
public InnoEngine.Scene.GameLayerCatalog InnoEngine.Scene.GameLayerCatalog.Clone()
```

Creates a detached copy of this stack.

**Returns:** An independent layer stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L432).

## `Define`

<a id="api-97a0ff6371ad87a8"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.Define(InnoEngine.Scene.GameLayer,System.String) 57d1d382502efc6d0908eebb65d8522f18699be3c96bf959ebf79ec920e872f8 -->

```csharp
public void InnoEngine.Scene.GameLayerCatalog.Define(InnoEngine.Scene.GameLayer layer, string name)
```

Defines or renames a project layer without accepting an authored ID.

**Parameter `layer`:** The compact runtime slot.

**Parameter `name`:** The unique display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L293).

## `GetDefinitions`

<a id="api-0a89053a659d3fd4"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetDefinitions 3e817ac58956d5ae315c9fd0deed6b06003632c41f85adbe1a403845effe6bbc -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameLayerDefinition> InnoEngine.Scene.GameLayerCatalog.GetDefinitions()
```

Gets an immutable snapshot of every named layer ordered by slot index.

**Returns:** The ordered layer-definition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L71).

## `GetId`

<a id="api-eb3d2b20dc0575e7"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetId(InnoEngine.Settings.ProjectId,InnoEngine.Scene.GameLayer) 43a7087310d52be2727f6c27f78e80a350953a234be48a09268b8f1c0aa4743a -->

```csharp
public InnoEngine.Scene.GameLayerId? InnoEngine.Scene.GameLayerCatalog.GetId(InnoEngine.Settings.ProjectId projectId, InnoEngine.Scene.GameLayer layer)
```

Gets the complete identity assigned to a layer slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The qualified identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L146).

## `GetInteractionMask`

<a id="api-a6d90c69af444818"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetInteractionMask(InnoEngine.Scene.GameLayer) 3b18822fa3786b2fe1b2665d81caaa4a12123c86c9fa805f44e10fe3dd23d6c1 -->

```csharp
public InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerCatalog.GetInteractionMask(InnoEngine.Scene.GameLayer layer)
```

Gets the interaction mask assigned to one layer.

**Parameter `layer`:** The source layer.

**Returns:** The configured interaction mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L368).

## `GetLayer`

<a id="api-4aea6ed67f9ce0af"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetLayer(System.String) 9d286a180233f48dfefd63dc8de83a2ef4a091f0ea4f4c4606a0ebdc89775454 -->

```csharp
public InnoEngine.Scene.GameLayer InnoEngine.Scene.GameLayerCatalog.GetLayer(string name)
```

Resolves an ordinal layer name to its compact slot.

**Parameter `name`:** The configured layer name.

**Returns:** The matching runtime layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L259).

## `GetLocalId`

<a id="api-1c2ccd732f8a4980"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetLocalId(InnoEngine.Scene.GameLayer) 34667ae587f5ef560e9bfffc6923d9fd7c8502afa280316772f621037c743aef -->

```csharp
public InnoEngine.Settings.ProjectLocalId? InnoEngine.Scene.GameLayerCatalog.GetLocalId(InnoEngine.Scene.GameLayer layer)
```

Gets the stable project-independent identity assigned to a layer slot.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The local identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L127).

## `GetMask`

<a id="api-a1a79831c3b4edd4"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetMask(System.Collections.Generic.IEnumerable{System.String}) 67aedf55ddfcf91b5bfbbd684fd4146954d9b0b6ff9662c6e8565ea3518ec6bf -->

```csharp
public InnoEngine.Scene.GameLayerMask InnoEngine.Scene.GameLayerCatalog.GetMask(System.Collections.Generic.IEnumerable<string> names)
```

Creates a mask from configured ordinal layer names.

**Parameter `names`:** The configured names to include.

**Returns:** A mask containing every resolved layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L275).

## `GetName`

<a id="api-d05f173297676d03"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.GetName(InnoEngine.Scene.GameLayer) 8dcb5eb18ffd83abd9801a19886cd2a98fddafce09be1749d851163b217d565d -->

```csharp
public string? InnoEngine.Scene.GameLayerCatalog.GetName(InnoEngine.Scene.GameLayer layer)
```

Gets the display name assigned to a layer slot.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The configured name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L112).

## `IsDefined`

<a id="api-c37cda3934757444"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.IsDefined(InnoEngine.Scene.GameLayer) 78ff96779553ca0404bfca7ae8e353942d201eedd89322bc4907e4b1781ec9dc -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.IsDefined(InnoEngine.Scene.GameLayer layer)
```

Determines whether a layer slot is defined.

**Parameter `layer`:** The layer slot to test.

**Returns:** `true` when the slot is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L97).

## `Remove`

<a id="api-37d4a6c25bc89983"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.Remove(InnoEngine.Scene.GameLayer) 2c5bb12c00bb14974b5d97670e5ce96d27547b83ed754e32ee2a93b53d97b4c6 -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.Remove(InnoEngine.Scene.GameLayer layer)
```

Removes a custom layer definition while retaining its numeric slot and interactions.

**Parameter `layer`:** The custom layer slot to undefine.

**Returns:** `true` when a definition was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L347).

## `SetInteraction`

<a id="api-8c59266fba0dcbfc"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.SetInteraction(InnoEngine.Scene.GameLayer,InnoEngine.Scene.GameLayer,System.Boolean) 8b8fb35970bfa0921ab3fa6cd37f78fa09d51b52a1663047ef8e7eef755ef270 -->

```csharp
public void InnoEngine.Scene.GameLayerCatalog.SetInteraction(InnoEngine.Scene.GameLayer first, InnoEngine.Scene.GameLayer second, bool canInteract)
```

Sets a symmetric interaction pair.

**Parameter `first`:** The first layer.

**Parameter `second`:** The second layer.

**Parameter `canInteract`:** Whether interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L406).

## `TryGetLayer`

<a id="api-a4cb6cddafd9d1f0"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectId,InnoEngine.Scene.GameLayerId,InnoEngine.Scene.GameLayer@) a5e2c071153741e1a585be44d6a721209a7d786736b808b528f563bb22b155bc -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectId projectId, InnoEngine.Scene.GameLayerId id, out InnoEngine.Scene.GameLayer layer)
```

Tries to resolve a qualified identity to its compact runtime slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity belongs to this project and is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L199).

## `TryGetLayer`

<a id="api-a6a50cd442b10241"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectLocalId,InnoEngine.Scene.GameLayer@) 662a1d186a918ce0730fc3e92b3dbbcc5d354957b742784dc99971d34d4558bf -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectLocalId localId, out InnoEngine.Scene.GameLayer layer)
```

Tries to resolve a local identity to its compact runtime slot.

**Parameter `localId`:** The stable project-local identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L166).

## `TryGetLayer`

<a id="api-43af4d447ca495d0"></a>
<!-- api: M:InnoEngine.Scene.GameLayerCatalog.TryGetLayer(System.String,InnoEngine.Scene.GameLayer@) 12863b5977a608444567618636aed42541cb4885354dcf18cc1d1930f7a5c75a -->

```csharp
public bool InnoEngine.Scene.GameLayerCatalog.TryGetLayer(string name, out InnoEngine.Scene.GameLayer layer)
```

Tries to resolve an ordinal layer name to its compact slot.

**Parameter `name`:** The layer name to find.

**Parameter `layer`:** The resolved layer.

**Returns:** `true` when a matching layer exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L233).

## `count`

<a id="api-86e62bf66ca53bc4"></a>
<!-- api: P:InnoEngine.Scene.GameLayerCatalog.count ae99d3b065dc4b010b8c24777a5b68fe8ab0a45b5bc418ceb0987f77bd9ee1e6 -->

```csharp
public int InnoEngine.Scene.GameLayerCatalog.count { get; }
```

Gets the number of currently named layer slots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L56).

## `settingId`

<a id="api-0263836f6dc2bd0c"></a>
<!-- api: P:InnoEngine.Scene.GameLayerCatalog.settingId d7295ecb9e3850a4f9266a0b4ace49d2a396dccd9d04627957f330475fe773d1 -->

```csharp
public static InnoEngine.Settings.ProjectSettingId InnoEngine.Scene.GameLayerCatalog.settingId { get; }
```

Gets the stable project setting protocol for the project-wide layer catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L39).
