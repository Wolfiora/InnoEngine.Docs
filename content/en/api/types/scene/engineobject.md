---
title: "EngineObject"
description: "Reference for EngineObject in Inno.Scene."
uid: api.inno.scene.4193365947cda839
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `EngineObject`

This reference describes `EngineObject` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Identity.IdentityObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4df7458318f0d215) | Method |
| [`Equals`](#api-5d4fc557765064d4) | Method |
| [`GetHashCode`](#api-6c3103c5e025835b) | Method |
| [`op_Equality`](#api-83002fede4f72e8e) | Method |
| [`op_Inequality`](#api-5b3278197e66d67f) | Method |
| [`isDestroyed`](#api-49ed06b6f2418293) | Property |

## Type declaration

<a id="api-4193365947cda839"></a>
<!-- api: T:Inno.Scene.EngineObject 63354ff3c7e07762fe74641fdd5e5548d316dc82728a8a4cc91a2d035785b1bf -->

```csharp
public abstract class Inno.Scene.EngineObject : Inno.Core.Identity.IdentityObject
```

Provides identity and destruction state shared by all managed scene objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L11).

## `#ctor`

<a id="api-4df7458318f0d215"></a>
<!-- api: M:Inno.Scene.EngineObject.#ctor 8c16c584b747107bdafaf109e48c3384964c758b7ee21fcc571f8570d407c8a7 -->

```csharp
protected Inno.Scene.EngineObject.EngineObject()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L11).

## `Equals`

<a id="api-5d4fc557765064d4"></a>
<!-- api: M:Inno.Scene.EngineObject.Equals(System.Object) 537f30a532b70dd68a86d217876874b96a8b8fef6833ee0c3b23cfe20c227b38 -->

```csharp
public override bool Inno.Scene.EngineObject.Equals(object? obj)
```

Compares this instance to another object using reference identity.

**Returns:** `true` when `obj` is this instance.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L71).

## `GetHashCode`

<a id="api-6c3103c5e025835b"></a>
<!-- api: M:Inno.Scene.EngineObject.GetHashCode 9bec232bd8e40096f3ccbbe28f1442f0f9eac3877077254572e2f314d440098e -->

```csharp
public override int Inno.Scene.EngineObject.GetHashCode()
```

Returns a stable runtime reference hash code.

**Returns:** The reference hash code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L79).

## `op_Equality`

<a id="api-83002fede4f72e8e"></a>
<!-- api: M:Inno.Scene.EngineObject.op_Equality(Inno.Scene.EngineObject,Inno.Scene.EngineObject) 6dd485b4cd4a0092008f6a257595c3bbcf6df16853d97595403e0f8d3c0346cc -->

```csharp
public static bool Inno.Scene.EngineObject.operator ==(Inno.Scene.EngineObject? left, Inno.Scene.EngineObject? right)
```

Compares engine objects using reference identity and destroyed-object null semantics.

**Parameter `left`:** Left operand.

**Parameter `right`:** Right operand.

**Returns:** `true` when both operands refer to the same live object or both behave as null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L32).

## `op_Inequality`

<a id="api-5b3278197e66d67f"></a>
<!-- api: M:Inno.Scene.EngineObject.op_Inequality(Inno.Scene.EngineObject,Inno.Scene.EngineObject) e6afdf84a25d172fe19e4fe3e20870548891b77f2548cfe453183a2a80986650 -->

```csharp
public static bool Inno.Scene.EngineObject.operator !=(Inno.Scene.EngineObject? left, Inno.Scene.EngineObject? right)
```

Compares engine objects using reference identity and destroyed-object null semantics.

**Parameter `left`:** Left operand.

**Parameter `right`:** Right operand.

**Returns:** `true` when the operands do not represent the same object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L57).

## `isDestroyed`

<a id="api-49ed06b6f2418293"></a>
<!-- api: P:Inno.Scene.EngineObject.isDestroyed 4baf7fc48b32db392b4e8b2ce2d0f8e53d3ad344a98daf7d41e9080eae392e43 -->

```csharp
public bool Inno.Scene.EngineObject.isDestroyed { get; }
```

Gets whether the engine has destroyed this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/EngineObject.cs#L18).
