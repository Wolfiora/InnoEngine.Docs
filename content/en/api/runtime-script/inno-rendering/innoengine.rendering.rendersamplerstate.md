---
title: "RenderSamplerState"
description: "Reference for RenderSamplerState in Inno.Rendering."
uid: api.inno.rendering.runtime-script.eaea85e323b558ab
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderSamplerState`

This reference describes `RenderSamplerState` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderSamplerState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1e64ada49a5f7a1a) | Method |
| [`Equals`](#api-94cfdfa48c704f26) | Method |
| [`Equals`](#api-b42ba81aa66505f1) | Method |
| [`GetHashCode`](#api-f37f38f3df2f8992) | Method |
| [`op_Equality`](#api-5434eaed6609c745) | Method |
| [`op_Inequality`](#api-bee573b85602070c) | Method |
| [`addressU`](#api-d1b10f93b9d1cea4) | Property |
| [`addressV`](#api-0ce7f7defb1a6c65) | Property |
| [`addressW`](#api-322b8c5d462d4c21) | Property |
| [`filter`](#api-8d9fe407f4cd34bb) | Property |
| [`linearClamp`](#api-4c625241e47f09ca) | Property |

## Type declaration

<a id="api-eaea85e323b558ab"></a>
<!-- api: T:InnoEngine.Rendering.RenderSamplerState 298322969a7a517e681b8738ef8eb7452bac40b4ef9f132f0b4b6f4027873c01 -->

```csharp
public struct InnoEngine.Rendering.RenderSamplerState : System.IEquatable<InnoEngine.Rendering.RenderSamplerState>
```

Describes one native-serializable backend-neutral sampler binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L52).

## `#ctor`

<a id="api-1e64ada49a5f7a1a"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.#ctor(InnoEngine.Rendering.RenderSamplerFilter,InnoEngine.Rendering.RenderSamplerAddressMode,InnoEngine.Rendering.RenderSamplerAddressMode,InnoEngine.Rendering.RenderSamplerAddressMode) 8178ea2a3769fb23ffbc6eec4e8caab389890997b81f81a3934d041480eba860 -->

```csharp
public InnoEngine.Rendering.RenderSamplerState.RenderSamplerState(InnoEngine.Rendering.RenderSamplerFilter filter, InnoEngine.Rendering.RenderSamplerAddressMode addressU, InnoEngine.Rendering.RenderSamplerAddressMode addressV, InnoEngine.Rendering.RenderSamplerAddressMode addressW)
```

Creates a sampler state.

**Parameter `filter`:** Minification, magnification, and mip filtering contract.

**Parameter `addressU`:** Horizontal address mode.

**Parameter `addressV`:** Vertical address mode.

**Parameter `addressW`:** Depth or cube address mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L78).

## `Equals`

<a id="api-94cfdfa48c704f26"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.Equals(InnoEngine.Rendering.RenderSamplerState) 4d428f5b0df4ba2f945a82ae5f05f6d569b2acc78529642df5e828803ba58144 -->

```csharp
public bool InnoEngine.Rendering.RenderSamplerState.Equals(InnoEngine.Rendering.RenderSamplerState other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L119).

## `Equals`

<a id="api-b42ba81aa66505f1"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.Equals(System.Object) 2332759726edc960e55646f63050d601d6c983023b1bf6947e2f1b1a50443a9b -->

```csharp
public override bool InnoEngine.Rendering.RenderSamplerState.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L134).

## `GetHashCode`

<a id="api-f37f38f3df2f8992"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.GetHashCode c78558cd39515ed78b0ac215f692259abf864f8a5cec487e2c2a8504f420f4fe -->

```csharp
public override int InnoEngine.Rendering.RenderSamplerState.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L142).

## `op_Equality`

<a id="api-5434eaed6609c745"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.op_Equality(InnoEngine.Rendering.RenderSamplerState,InnoEngine.Rendering.RenderSamplerState) a00318c7e83ce007f697a5c9f317b2433ac4638ce300f26bff191e88e08a5b3c -->

```csharp
public static bool InnoEngine.Rendering.RenderSamplerState.operator ==(InnoEngine.Rendering.RenderSamplerState left, InnoEngine.Rendering.RenderSamplerState right)
```

Determines whether two sampler descriptions are equal.

**Parameter `left`:** Left sampler description.

**Parameter `right`:** Right sampler description.

**Returns:** True when every filtering and addressing field is equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L156).

## `op_Inequality`

<a id="api-bee573b85602070c"></a>
<!-- api: M:InnoEngine.Rendering.RenderSamplerState.op_Inequality(InnoEngine.Rendering.RenderSamplerState,InnoEngine.Rendering.RenderSamplerState) 5b721276e8e75ffa7d965cb9ca67f14117477f17e74abe89e2c337d0c7c0b652 -->

```csharp
public static bool InnoEngine.Rendering.RenderSamplerState.operator !=(InnoEngine.Rendering.RenderSamplerState left, InnoEngine.Rendering.RenderSamplerState right)
```

Determines whether two sampler descriptions differ.

**Parameter `left`:** Left sampler description.

**Parameter `right`:** Right sampler description.

**Returns:** True when at least one filtering or addressing field differs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L173).

## `addressU`

<a id="api-d1b10f93b9d1cea4"></a>
<!-- api: P:InnoEngine.Rendering.RenderSamplerState.addressU 7e48b778476ad79fdb551c62feb13217d03351f1e62cf8da4b20efa8ada3a00b -->

```csharp
public InnoEngine.Rendering.RenderSamplerAddressMode InnoEngine.Rendering.RenderSamplerState.addressU { get; set; }
```

Gets horizontal addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L98).

## `addressV`

<a id="api-0ce7f7defb1a6c65"></a>
<!-- api: P:InnoEngine.Rendering.RenderSamplerState.addressV 3ec5714d5408391f1bbe2973493c8478ee000b3fd8c76c0f08500a51a8385ba8 -->

```csharp
public InnoEngine.Rendering.RenderSamplerAddressMode InnoEngine.Rendering.RenderSamplerState.addressV { get; set; }
```

Gets vertical addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L103).

## `addressW`

<a id="api-322b8c5d462d4c21"></a>
<!-- api: P:InnoEngine.Rendering.RenderSamplerState.addressW 2b3c0198e330df9ec855970cd5828222de0b94fc9ea3d2970ea543257df21e6d -->

```csharp
public InnoEngine.Rendering.RenderSamplerAddressMode InnoEngine.Rendering.RenderSamplerState.addressW { get; set; }
```

Gets depth or cube addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L108).

## `filter`

<a id="api-8d9fe407f4cd34bb"></a>
<!-- api: P:InnoEngine.Rendering.RenderSamplerState.filter 00aad809de7e4228dbde1491ff5e58c2e628a260362ab1dbe3a2057ec3534945 -->

```csharp
public InnoEngine.Rendering.RenderSamplerFilter InnoEngine.Rendering.RenderSamplerState.filter { get; set; }
```

Gets the filter contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L93).

## `linearClamp`

<a id="api-4c625241e47f09ca"></a>
<!-- api: P:InnoEngine.Rendering.RenderSamplerState.linearClamp a0b2d7e8ff713f4dead201f1a7db28daae3accf7dbd0255bfa685e1b0ac2f697 -->

```csharp
public static InnoEngine.Rendering.RenderSamplerState InnoEngine.Rendering.RenderSamplerState.linearClamp { get; }
```

Gets linear filtering with clamped addressing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L57).
