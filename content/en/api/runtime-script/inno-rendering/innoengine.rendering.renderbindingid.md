---
title: "RenderBindingId"
description: "Reference for RenderBindingId in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e90643b0fec5ca6d
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBindingId`

This reference describes `RenderBindingId` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderBindingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5c3afb41003213bb) | Method |
| [`Equals`](#api-7a949f3b98979de9) | Method |
| [`Equals`](#api-1b5b5a1fb6adb69f) | Method |
| [`GetHashCode`](#api-507448a8b635b9b1) | Method |
| [`op_Equality`](#api-2868e087f35e806d) | Method |
| [`op_Inequality`](#api-65f986db3de13bb1) | Method |
| [`ToString`](#api-1cc8e9e101b769d6) | Method |
| [`isValid`](#api-3b373096bbb01108) | Property |
| [`value`](#api-dd2920fb78f46a8a) | Property |

## Type declaration

<a id="api-e90643b0fec5ca6d"></a>
<!-- api: T:InnoEngine.Rendering.RenderBindingId 5da282199f3f6b4aaf59af88b4c67e1a9d664df471bc53066c16cbd5c8260b32 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderBindingId : System.IEquatable<InnoEngine.Rendering.RenderBindingId>
```

Identifies a shader binding by stable manifest name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `#ctor`

<a id="api-5c3afb41003213bb"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.#ctor(System.String) f7c1657a85155ed476a28214d57d81580a4db3918e202248d98cc256dfd71967 -->

```csharp
public InnoEngine.Rendering.RenderBindingId.RenderBindingId(string value)
```

Creates a stable shader binding identifier.

**Parameter `value`:** Stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L16).

## `Equals`

<a id="api-7a949f3b98979de9"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.Equals(InnoEngine.Rendering.RenderBindingId) 3aaa38d80cc88e7bb92d86a8275a66f70d01ab4d3f602d5cea1039136a7d19ff -->

```csharp
public bool InnoEngine.Rendering.RenderBindingId.Equals(InnoEngine.Rendering.RenderBindingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `Equals`

<a id="api-1b5b5a1fb6adb69f"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.Equals(System.Object) f9c54bca32a0a7e948d221cfd5b4f4c9ff6ea09ea8ce7683b7bd0b57ee835be0 -->

```csharp
public override bool InnoEngine.Rendering.RenderBindingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `GetHashCode`

<a id="api-507448a8b635b9b1"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.GetHashCode fd69b3fa57bbef895d643959f344e166fd7bf8728ff0ae22fbbe490969f8647b -->

```csharp
public override int InnoEngine.Rendering.RenderBindingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `op_Equality`

<a id="api-2868e087f35e806d"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.op_Equality(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderBindingId) 483539e870da5373396674e2d710060f4fc7ca6662a49626714dea1fc4d1abbd -->

```csharp
public static bool InnoEngine.Rendering.RenderBindingId.operator ==(InnoEngine.Rendering.RenderBindingId left, InnoEngine.Rendering.RenderBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `op_Inequality`

<a id="api-65f986db3de13bb1"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.op_Inequality(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderBindingId) c6534bc334663b6623ee82a5ef65fa07109b2f150e3456d7d2028f4915fccea3 -->

```csharp
public static bool InnoEngine.Rendering.RenderBindingId.operator !=(InnoEngine.Rendering.RenderBindingId left, InnoEngine.Rendering.RenderBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `ToString`

<a id="api-1cc8e9e101b769d6"></a>
<!-- api: M:InnoEngine.Rendering.RenderBindingId.ToString cb97c34e8c433b0af5afbf7b2104290e687bc7e23d8d6d600adcb9de3721d86f -->

```csharp
public override string InnoEngine.Rendering.RenderBindingId.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L8).

## `isValid`

<a id="api-3b373096bbb01108"></a>
<!-- api: P:InnoEngine.Rendering.RenderBindingId.isValid adddf4816ab020524a2452d45d83bbec618aa6d4a0a2413e54dbb062cd3fb1e8 -->

```csharp
public bool InnoEngine.Rendering.RenderBindingId.isValid { get; }
```

Gets whether the identifier contains a stable manifest name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L30).

## `value`

<a id="api-dd2920fb78f46a8a"></a>
<!-- api: P:InnoEngine.Rendering.RenderBindingId.value 632158e5aede26bde41f8aead4db232dd6f493b9c3bb23d2cf131c6ae3586c17 -->

```csharp
public string InnoEngine.Rendering.RenderBindingId.value { get; }
```

Gets the stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L25).
