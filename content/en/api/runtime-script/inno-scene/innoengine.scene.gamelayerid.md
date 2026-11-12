---
title: "GameLayerId"
description: "Reference for GameLayerId in Inno.Scene."
uid: api.inno.scene.runtime-script.07d96f69b9e113ba
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameLayerId`

This reference describes `GameLayerId` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Scene.GameLayerId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c8537f4dc5e17628) | Method |
| [`#ctor`](#api-1c98eaeec506f098) | Method |
| [`Equals`](#api-4bdbab2442aa09d5) | Method |
| [`Equals`](#api-53bce18273a629d6) | Method |
| [`GetHashCode`](#api-69a2a391b1a33f74) | Method |
| [`op_Equality`](#api-888b014375489dc8) | Method |
| [`op_Inequality`](#api-74847a3db9f24649) | Method |
| [`ToString`](#api-1a8be6e6312e9f1f) | Method |
| [`isValid`](#api-e14bc38989963932) | Property |
| [`value`](#api-81110824cb4b15e1) | Property |

## Type declaration

<a id="api-07d96f69b9e113ba"></a>
<!-- api: T:InnoEngine.Scene.GameLayerId 7e9d2910e3315c1414070034fdb1c8d2b9fc41033d1b1fb4c51935c4f0eb86b6 -->

```csharp
public readonly struct InnoEngine.Scene.GameLayerId : System.IEquatable<InnoEngine.Scene.GameLayerId>
```

Identifies one project-scoped game layer independently from its compact runtime slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `#ctor`

<a id="api-c8537f4dc5e17628"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.#ctor(InnoEngine.Settings.ProjectId,InnoEngine.Settings.ProjectLocalId) be3540fa34d0ac67b61c8f588345f651c9671b7bf580a1975c3abef20bdd6c24 -->

```csharp
public InnoEngine.Scene.GameLayerId.GameLayerId(InnoEngine.Settings.ProjectId projectId, InnoEngine.Settings.ProjectLocalId name)
```

Creates a project-scoped layer identity from its project and local parts.

**Parameter `projectId`:** The current project identity.

**Parameter `name`:** The stable project-local layer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L34).

## `#ctor`

<a id="api-1c98eaeec506f098"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.#ctor(InnoEngine.Settings.ProjectScopedId) bba7e43abe36f91287ad79d92e760a94edacffec19fc97b3dd8a0d121d957653 -->

```csharp
public InnoEngine.Scene.GameLayerId.GameLayerId(InnoEngine.Settings.ProjectScopedId value)
```

Creates a project-scoped layer identity.

**Parameter `value`:** The canonical qualified identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L18).

## `Equals`

<a id="api-4bdbab2442aa09d5"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.Equals(InnoEngine.Scene.GameLayerId) 7d90c7a6ae78190b3b8c203a7330eaf2cd6523b3429c5eb6e1c847b7c8f89b63 -->

```csharp
public bool InnoEngine.Scene.GameLayerId.Equals(InnoEngine.Scene.GameLayerId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `Equals`

<a id="api-53bce18273a629d6"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.Equals(System.Object) 2028e2d9d2b107dcfd09fb43758c531d6b834dcf767a0d5bdf4aab105cb26f68 -->

```csharp
public override bool InnoEngine.Scene.GameLayerId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `GetHashCode`

<a id="api-69a2a391b1a33f74"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.GetHashCode aca5a4844a3a81f03f58d3dff63da08bbf6435d02640f97da9adc44472464fcc -->

```csharp
public override int InnoEngine.Scene.GameLayerId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `op_Equality`

<a id="api-888b014375489dc8"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.op_Equality(InnoEngine.Scene.GameLayerId,InnoEngine.Scene.GameLayerId) 65d04c6fd7c1fbdcefaa9400162ace765764c9369875db05e4ba10f28a5e18ba -->

```csharp
public static bool InnoEngine.Scene.GameLayerId.operator ==(InnoEngine.Scene.GameLayerId left, InnoEngine.Scene.GameLayerId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `op_Inequality`

<a id="api-74847a3db9f24649"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.op_Inequality(InnoEngine.Scene.GameLayerId,InnoEngine.Scene.GameLayerId) aa834e906674b76d061d5378f502b5ad840302b04196b18cffdcc3c59a06eefa -->

```csharp
public static bool InnoEngine.Scene.GameLayerId.operator !=(InnoEngine.Scene.GameLayerId left, InnoEngine.Scene.GameLayerId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `ToString`

<a id="api-1a8be6e6312e9f1f"></a>
<!-- api: M:InnoEngine.Scene.GameLayerId.ToString aa6ba239b875fabd4f5b52dfd9a468463b0aa72a711b5c6f760af879e752628f -->

```csharp
public override string InnoEngine.Scene.GameLayerId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The qualified identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L76).

## `isValid`

<a id="api-e14bc38989963932"></a>
<!-- api: P:InnoEngine.Scene.GameLayerId.isValid c5cc5170bad8eeba431f359985591bd6e73635a461cebafc6b10eacb17481731 -->

```csharp
public bool InnoEngine.Scene.GameLayerId.isValid { get; }
```

Gets whether this value contains a usable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L68).

## `value`

<a id="api-81110824cb4b15e1"></a>
<!-- api: P:InnoEngine.Scene.GameLayerId.value a57e0056a6f0ae2b93f4fd09d1cc43ca9c32643a47ce52f8e49564826393cc03 -->

```csharp
public string InnoEngine.Scene.GameLayerId.value { get; }
```

Gets the canonical `projectId.name` identity string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L63).
