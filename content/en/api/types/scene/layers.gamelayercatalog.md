---
title: "Layers.GameLayerCatalog"
description: "Reference for Layers.GameLayerCatalog in Inno.Scene."
uid: api.inno.scene.3acd990876f01d6c
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Layers.GameLayerCatalog`

This reference describes `Layers.GameLayerCatalog` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-c1807a3e5bfc57a0) | Field |
| [`#ctor`](#api-a5352d60291fbb81) | Method |
| [`CanInteract`](#api-651e64917367eaf0) | Method |
| [`Clone`](#api-2f007a978859c10d) | Method |
| [`Define`](#api-e1da6b152d4ffe6f) | Method |
| [`GetDefinitions`](#api-382ff5eb308c143a) | Method |
| [`GetId`](#api-728e12988c3d5ece) | Method |
| [`GetInteractionMask`](#api-b812095ed0967771) | Method |
| [`GetLayer`](#api-6b6f479d3058bbfc) | Method |
| [`GetLocalId`](#api-aa69274f5719ade4) | Method |
| [`GetMask`](#api-316ff29a6e6a7533) | Method |
| [`GetName`](#api-9e08dd07a4fd473d) | Method |
| [`IsDefined`](#api-ec45fdeed16f67e9) | Method |
| [`Remove`](#api-db88313dbfb6b7fd) | Method |
| [`SetInteraction`](#api-f46a2d652833fc94) | Method |
| [`TryGetLayer`](#api-13dd1ebebb80d8b4) | Method |
| [`TryGetLayer`](#api-1938a8f683b8744c) | Method |
| [`TryGetLayer`](#api-45cbea1382ecc7fe) | Method |
| [`count`](#api-77846ad4fa987b57) | Property |
| [`settingId`](#api-24f63b28876fe808) | Property |

## Type declaration

<a id="api-3acd990876f01d6c"></a>
<!-- api: T:Inno.Scene.Layers.GameLayerCatalog d9f50878062ca9d756cb102c9eaf84d8191494ef181fba64442ddb0fa1245c96 -->

```csharp
public sealed class Inno.Scene.Layers.GameLayerCatalog : Inno.Core.Serialization.ISerializable
```

Stores the named layer catalog and symmetric layer-interaction matrix used by a project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L18).

## `settingProtocolId`

<a id="api-c1807a3e5bfc57a0"></a>
<!-- api: F:Inno.Scene.Layers.GameLayerCatalog.settingProtocolId 3993d0d3ef0e6bc7ad76ccaa93b20d95f3c570795134f7a39cf90581aba82ee5 -->

```csharp
public const string Inno.Scene.Layers.GameLayerCatalog.settingProtocolId = "inno.scene.layers"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L23).

## `#ctor`

<a id="api-a5352d60291fbb81"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.#ctor b6d8031382fc549b049201faccb0cb5120f289da49f2d4405ff9d7d9e39b015d -->

```csharp
public Inno.Scene.Layers.GameLayerCatalog.GameLayerCatalog()
```

Creates a layer stack containing the immutable default layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L44).

## `CanInteract`

<a id="api-651e64917367eaf0"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.CanInteract(Inno.Scene.Layers.GameLayer,Inno.Scene.Layers.GameLayer) 62c916cdfc818206fc591c6ae9fdde9af5db1b00bf636c30d6cf3a68b7eb0330 -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.CanInteract(Inno.Scene.Layers.GameLayer first, Inno.Scene.Layers.GameLayer second)
```

Determines whether two layer slots may interact.

**Parameter `first`:** The first layer.

**Parameter `second`:** The second layer.

**Returns:** `true` when interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L386).

## `Clone`

<a id="api-2f007a978859c10d"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.Clone b79b6a5f6450585c957b9e1106270b6055ce72c8ba5c1958ab92ff34ee74890e -->

```csharp
public Inno.Scene.Layers.GameLayerCatalog Inno.Scene.Layers.GameLayerCatalog.Clone()
```

Creates a detached copy of this stack.

**Returns:** An independent layer stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L432).

## `Define`

<a id="api-e1da6b152d4ffe6f"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.Define(Inno.Scene.Layers.GameLayer,System.String) 784515ffd571bf1295168395fa383a3a00c6da154d6cfed759d8479ee145fc95 -->

```csharp
public void Inno.Scene.Layers.GameLayerCatalog.Define(Inno.Scene.Layers.GameLayer layer, string name)
```

Defines or renames a project layer without accepting an authored ID.

**Parameter `layer`:** The compact runtime slot.

**Parameter `name`:** The unique display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L293).

## `GetDefinitions`

<a id="api-382ff5eb308c143a"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetDefinitions 80c8c7a371af20682e2defd9ec9d6cd5a541ff105056b5163385265fa8c71799 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.Layers.GameLayerDefinition> Inno.Scene.Layers.GameLayerCatalog.GetDefinitions()
```

Gets an immutable snapshot of every named layer ordered by slot index.

**Returns:** The ordered layer-definition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L71).

## `GetId`

<a id="api-728e12988c3d5ece"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetId(Inno.Core.Settings.ProjectId,Inno.Scene.Layers.GameLayer) 2e6311ca31fd3613eb1535c106a23ea0e00077ee63398432a8d582e0d9c729ab -->

```csharp
public Inno.Scene.Layers.GameLayerId? Inno.Scene.Layers.GameLayerCatalog.GetId(Inno.Core.Settings.ProjectId projectId, Inno.Scene.Layers.GameLayer layer)
```

Gets the complete identity assigned to a layer slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The qualified identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L146).

## `GetInteractionMask`

<a id="api-b812095ed0967771"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetInteractionMask(Inno.Scene.Layers.GameLayer) c76d0afd6d92abc2fb3bf282c29cd4b5f56bd60719e7c7e48bc477dab573dcf0 -->

```csharp
public Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerCatalog.GetInteractionMask(Inno.Scene.Layers.GameLayer layer)
```

Gets the interaction mask assigned to one layer.

**Parameter `layer`:** The source layer.

**Returns:** The configured interaction mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L368).

## `GetLayer`

<a id="api-6b6f479d3058bbfc"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetLayer(System.String) 181e36a7ad0f2fd9f37de15eef49b6dc1ab2b8a026cefc29837254e19c6e5ee3 -->

```csharp
public Inno.Scene.Layers.GameLayer Inno.Scene.Layers.GameLayerCatalog.GetLayer(string name)
```

Resolves an ordinal layer name to its compact slot.

**Parameter `name`:** The configured layer name.

**Returns:** The matching runtime layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L259).

## `GetLocalId`

<a id="api-aa69274f5719ade4"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetLocalId(Inno.Scene.Layers.GameLayer) 44a37f65e7882570dcfb6fa3f2b7f419df88792543f637ca1d8764311c440297 -->

```csharp
public Inno.Core.Settings.ProjectLocalId? Inno.Scene.Layers.GameLayerCatalog.GetLocalId(Inno.Scene.Layers.GameLayer layer)
```

Gets the stable project-independent identity assigned to a layer slot.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The local identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L127).

## `GetMask`

<a id="api-316ff29a6e6a7533"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetMask(System.Collections.Generic.IEnumerable{System.String}) 3882265196720ba70910219448651dd1e6aac56324774fcd161ac0ffb40ad410 -->

```csharp
public Inno.Scene.Layers.GameLayerMask Inno.Scene.Layers.GameLayerCatalog.GetMask(System.Collections.Generic.IEnumerable<string> names)
```

Creates a mask from configured ordinal layer names.

**Parameter `names`:** The configured names to include.

**Returns:** A mask containing every resolved layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L275).

## `GetName`

<a id="api-9e08dd07a4fd473d"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.GetName(Inno.Scene.Layers.GameLayer) e21af3b61556368bffc20f1e04029b41763ba5679d0b926660a3b9eb1f5859a1 -->

```csharp
public string? Inno.Scene.Layers.GameLayerCatalog.GetName(Inno.Scene.Layers.GameLayer layer)
```

Gets the display name assigned to a layer slot.

**Parameter `layer`:** The layer slot to resolve.

**Returns:** The configured name, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L112).

## `IsDefined`

<a id="api-ec45fdeed16f67e9"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.IsDefined(Inno.Scene.Layers.GameLayer) af8ed5a09eeb8b868337c19b421743d95bd26705050009652c108a3310fdd5c5 -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.IsDefined(Inno.Scene.Layers.GameLayer layer)
```

Determines whether a layer slot is defined.

**Parameter `layer`:** The layer slot to test.

**Returns:** `true` when the slot is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L97).

## `Remove`

<a id="api-db88313dbfb6b7fd"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.Remove(Inno.Scene.Layers.GameLayer) 791c93ed0fb37510831311d4975729cb998cbf3d6c3b312f7ffbbf7c8e3db57a -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.Remove(Inno.Scene.Layers.GameLayer layer)
```

Removes a custom layer definition while retaining its numeric slot and interactions.

**Parameter `layer`:** The custom layer slot to undefine.

**Returns:** `true` when a definition was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L347).

## `SetInteraction`

<a id="api-f46a2d652833fc94"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.SetInteraction(Inno.Scene.Layers.GameLayer,Inno.Scene.Layers.GameLayer,System.Boolean) cc29d71121d85d730075a4dfec6f749d3d78208c858b50c05b37fef5d240561b -->

```csharp
public void Inno.Scene.Layers.GameLayerCatalog.SetInteraction(Inno.Scene.Layers.GameLayer first, Inno.Scene.Layers.GameLayer second, bool canInteract)
```

Sets a symmetric interaction pair.

**Parameter `first`:** The first layer.

**Parameter `second`:** The second layer.

**Parameter `canInteract`:** Whether interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L406).

## `TryGetLayer`

<a id="api-13dd1ebebb80d8b4"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectId,Inno.Scene.Layers.GameLayerId,Inno.Scene.Layers.GameLayer@) 60b7dbdac59178443403d3b19f5a85cf184ede2da4895fc7e50c00a117148756 -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectId projectId, Inno.Scene.Layers.GameLayerId id, out Inno.Scene.Layers.GameLayer layer)
```

Tries to resolve a qualified identity to its compact runtime slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity belongs to this project and is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L199).

## `TryGetLayer`

<a id="api-1938a8f683b8744c"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectLocalId,Inno.Scene.Layers.GameLayer@) a367998d49c9931516ea2dd5018c7ff2df18e8b04166665e35ee24d36420de3d -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectLocalId localId, out Inno.Scene.Layers.GameLayer layer)
```

Tries to resolve a local identity to its compact runtime slot.

**Parameter `localId`:** The stable project-local identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity is defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L166).

## `TryGetLayer`

<a id="api-45cbea1382ecc7fe"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(System.String,Inno.Scene.Layers.GameLayer@) 17af7ff0b3bf4c1f8ea34cbfd18b0ee953e7c36495fd56e67a5244cb45c26dbb -->

```csharp
public bool Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(string name, out Inno.Scene.Layers.GameLayer layer)
```

Tries to resolve an ordinal layer name to its compact slot.

**Parameter `name`:** The layer name to find.

**Parameter `layer`:** The resolved layer.

**Returns:** `true` when a matching layer exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L233).

## `count`

<a id="api-77846ad4fa987b57"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerCatalog.count 9cc9ad649f211b3de0d2035a72ab454ae4ad98334bff05ff99fe224e7610fd12 -->

```csharp
public int Inno.Scene.Layers.GameLayerCatalog.count { get; }
```

Gets the number of currently named layer slots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L56).

## `settingId`

<a id="api-24f63b28876fe808"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerCatalog.settingId 17ad9110be73344e708026fa439bde7dc175b675ab125632a2156822e934a083 -->

```csharp
public static Inno.Core.Settings.ProjectSettingId Inno.Scene.Layers.GameLayerCatalog.settingId { get; }
```

Gets the stable project setting protocol for the project-wide layer catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerCatalog.cs#L39).
