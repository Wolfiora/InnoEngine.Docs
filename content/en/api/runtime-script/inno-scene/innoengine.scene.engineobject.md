---
title: "EngineObject"
description: "Reference for EngineObject in Inno.Scene."
uid: api.inno.scene.runtime-script.0776bb402942caed
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `EngineObject`

This reference describes `EngineObject` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Core.IdentityObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9c2a10590760c181) | Method |
| [`Equals`](#api-ebdc67ddaac88897) | Method |
| [`GetHashCode`](#api-232c1c6bedadeaff) | Method |
| [`op_Equality`](#api-287a899a5109db95) | Method |
| [`op_Inequality`](#api-9caf8d1cd48819ff) | Method |
| [`isDestroyed`](#api-09cc2b83ee91e2a8) | Property |

## Type declaration

<a id="api-0776bb402942caed"></a>
<!-- api: T:InnoEngine.Scene.EngineObject c18a80a030e2b8dd379746a61e25f8eceb39b76e980a091a70375fc47729bfd6 -->

```csharp
public abstract class InnoEngine.Scene.EngineObject : InnoEngine.Core.IdentityObject
```

Provides identity and destruction state shared by all managed scene objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L11).

## `#ctor`

<a id="api-9c2a10590760c181"></a>
<!-- api: M:InnoEngine.Scene.EngineObject.#ctor 7a1f87d7676616a6077ef36ac9565eec7e9fec2849085ba1d767d777660524f1 -->

```csharp
protected InnoEngine.Scene.EngineObject.EngineObject()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L11).

## `Equals`

<a id="api-ebdc67ddaac88897"></a>
<!-- api: M:InnoEngine.Scene.EngineObject.Equals(System.Object) 3f00c985675ae00be355bf736faf84dacff1bc2d9b3aa2629a0e0edfc5900943 -->

```csharp
public override bool InnoEngine.Scene.EngineObject.Equals(object? obj)
```

Compares this instance to another object using reference identity.

**Returns:** `true` when `obj` is this instance.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L71).

## `GetHashCode`

<a id="api-232c1c6bedadeaff"></a>
<!-- api: M:InnoEngine.Scene.EngineObject.GetHashCode 62ae6f7e57bc3323eb6831acf668a8aa361cdae5bae775f9a0be3da12af5cf00 -->

```csharp
public override int InnoEngine.Scene.EngineObject.GetHashCode()
```

Returns a stable runtime reference hash code.

**Returns:** The reference hash code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L79).

## `op_Equality`

<a id="api-287a899a5109db95"></a>
<!-- api: M:InnoEngine.Scene.EngineObject.op_Equality(InnoEngine.Scene.EngineObject,InnoEngine.Scene.EngineObject) f6ce67e5787602380995306d8124572cc326b385613f1c9b844140c91c2d2af7 -->

```csharp
public static bool InnoEngine.Scene.EngineObject.operator ==(InnoEngine.Scene.EngineObject? left, InnoEngine.Scene.EngineObject? right)
```

Compares engine objects using reference identity and destroyed-object null semantics.

**Parameter `left`:** Left operand.

**Parameter `right`:** Right operand.

**Returns:** `true` when both operands refer to the same live object or both behave as null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L32).

## `op_Inequality`

<a id="api-9caf8d1cd48819ff"></a>
<!-- api: M:InnoEngine.Scene.EngineObject.op_Inequality(InnoEngine.Scene.EngineObject,InnoEngine.Scene.EngineObject) 42f28782cdd03b1f2c838e2295f6481a0c55edf9981bee6b437a185a1a681224 -->

```csharp
public static bool InnoEngine.Scene.EngineObject.operator !=(InnoEngine.Scene.EngineObject? left, InnoEngine.Scene.EngineObject? right)
```

Compares engine objects using reference identity and destroyed-object null semantics.

**Parameter `left`:** Left operand.

**Parameter `right`:** Right operand.

**Returns:** `true` when the operands do not represent the same object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L57).

## `isDestroyed`

<a id="api-09cc2b83ee91e2a8"></a>
<!-- api: P:InnoEngine.Scene.EngineObject.isDestroyed 270d7f976bef79176179f2096b2ca5cd583eea2f01f61448b842e19280683439 -->

```csharp
public bool InnoEngine.Scene.EngineObject.isDestroyed { get; }
```

Gets whether the engine has destroyed this object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/EngineObject.cs#L18).
