---
title: "GraphicsApi"
description: "Reference for GraphicsApi in Inno.Rendering."
uid: api.inno.rendering.runtime-script.28335d45ed4831a2
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsApi`

This reference describes `GraphicsApi` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IComparable<InnoEngine.Rendering.GraphicsApi>`, `System.IEquatable<InnoEngine.Rendering.GraphicsApi>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3d8e7eb5782a78af) | Method |
| [`CompareTo`](#api-9350b28f1e81beb3) | Method |
| [`Equals`](#api-9582d599761d76fe) | Method |
| [`Equals`](#api-ff3632387e48471e) | Method |
| [`GetHashCode`](#api-d2af8e159a2cabe3) | Method |
| [`op_Equality`](#api-ef9e41c660b13952) | Method |
| [`op_Inequality`](#api-836fcda8e0068439) | Method |
| [`ToString`](#api-d800bb0bc18a3333) | Method |
| [`TryParse`](#api-b54297143da6e61c) | Method |
| [`Direct3D11`](#api-7c58b46246db0d43) | Property |
| [`Direct3D12`](#api-7b2dc107a8ea4944) | Property |
| [`isValid`](#api-cf00a779c7551772) | Property |
| [`Metal`](#api-281bb8f24984d356) | Property |
| [`Noop`](#api-51a0b9dfdf757ff2) | Property |
| [`OpenGL`](#api-2013a694db3bc50e) | Property |
| [`OpenGLES`](#api-4ccca444a2179f88) | Property |
| [`value`](#api-80b89112d167a8dc) | Property |
| [`Vulkan`](#api-9a6393197b00e899) | Property |
| [`WebGPU`](#api-b0e047d691d44e8b) | Property |

## Type declaration

<a id="api-28335d45ed4831a2"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsApi fc87df479729aeb8e8864694b77186c510256ae40cd1dd9d1987585ef30ea5d7 -->

```csharp
public readonly struct InnoEngine.Rendering.GraphicsApi : System.IComparable<InnoEngine.Rendering.GraphicsApi>, System.IEquatable<InnoEngine.Rendering.GraphicsApi>
```

Identifies the graphics API family selected by the host without exposing a backend-native enum.
Pipelines use this value only for capability-aware choices and target artifact selection;
it does not require separate pipeline or shader source implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `#ctor`

<a id="api-3d8e7eb5782a78af"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.#ctor(System.String) 1565fb8692cc9f66730decde8e2c665703ae6e75fad57b27513e9f2ef416f75c -->

```csharp
public InnoEngine.Rendering.GraphicsApi.GraphicsApi(string value)
```

Creates an open, stable backend identity without registering a backend implementation.

**Parameter `value`:** A portable case-sensitive identifier used in target artifact paths.

**Throws `System.ArgumentException`:** The identifier is empty or contains nonportable characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L55).

## `CompareTo`

<a id="api-9350b28f1e81beb3"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.CompareTo(InnoEngine.Rendering.GraphicsApi) 4ded900bc4a8bd76389ade1d763e3bf7618d6348c441f5cc81c501fbddc9bf73 -->

```csharp
public int InnoEngine.Rendering.GraphicsApi.CompareTo(InnoEngine.Rendering.GraphicsApi other)
```

Compares two backend identities using stable ordinal ordering.

**Parameter `other`:** The other backend identity.

**Returns:** A negative, zero, or positive value according to ordinal identifier order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L106).

## `Equals`

<a id="api-9582d599761d76fe"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.Equals(InnoEngine.Rendering.GraphicsApi) 8b7d25970c0cbf1c14c1e34b16a11f290a27949949da0684837ec314d4762302 -->

```csharp
public bool InnoEngine.Rendering.GraphicsApi.Equals(InnoEngine.Rendering.GraphicsApi other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `Equals`

<a id="api-ff3632387e48471e"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.Equals(System.Object) f7f3e7cfa10b0f59fd982692767c2c4837009697fdb1f3cd6683dd924ece53df -->

```csharp
public override bool InnoEngine.Rendering.GraphicsApi.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `GetHashCode`

<a id="api-d2af8e159a2cabe3"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.GetHashCode c914b7ca650395e9d80819a0ec70ad5d47d40c3736b2a42878876aaa1c59e4fd -->

```csharp
public override int InnoEngine.Rendering.GraphicsApi.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `op_Equality`

<a id="api-ef9e41c660b13952"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.op_Equality(InnoEngine.Rendering.GraphicsApi,InnoEngine.Rendering.GraphicsApi) 5b59ea935a900155a27e173259a7ec1d0a0fa1ea82df7c8c06bf3a3ff26db66e -->

```csharp
public static bool InnoEngine.Rendering.GraphicsApi.operator ==(InnoEngine.Rendering.GraphicsApi left, InnoEngine.Rendering.GraphicsApi right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `op_Inequality`

<a id="api-836fcda8e0068439"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.op_Inequality(InnoEngine.Rendering.GraphicsApi,InnoEngine.Rendering.GraphicsApi) 77c6558dfec2567492adb1fe8078e57c555a8a8a2522f378f7ecbc910983f512 -->

```csharp
public static bool InnoEngine.Rendering.GraphicsApi.operator !=(InnoEngine.Rendering.GraphicsApi left, InnoEngine.Rendering.GraphicsApi right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L11).

## `ToString`

<a id="api-d800bb0bc18a3333"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.ToString bc3a1832a2a64d12f4fdf417e39adfcf806f465785759c48c3eec103bf5d76c4 -->

```csharp
public override string InnoEngine.Rendering.GraphicsApi.ToString()
```

Formats the exact stable backend identity.

**Returns:** The identity, or an empty string for an uninitialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L114).

## `TryParse`

<a id="api-b54297143da6e61c"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsApi.TryParse(System.String,InnoEngine.Rendering.GraphicsApi@) 1acf115e88fcdd3b415414eb42c7918b9bef2f76cea0ba0b7bd6146504560639 -->

```csharp
public static bool InnoEngine.Rendering.GraphicsApi.TryParse(string? value, out InnoEngine.Rendering.GraphicsApi api)
```

Parses an open backend identity without consulting a closed engine-side backend list.

**Parameter `value`:** The exact stable backend identity.

**Parameter `api`:** The parsed value, or default when parsing fails.

**Returns:** True when the identifier is portable and nonempty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L86).

## `Direct3D11`

<a id="api-7c58b46246db0d43"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.Direct3D11 e73d60fe2e6a8938f20954c6cfcd36a146ccb05d9e4227dc34d0116e5a34e0c1 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.Direct3D11 { get; }
```

Direct3D 11 renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L20).

## `Direct3D12`

<a id="api-7b2dc107a8ea4944"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.Direct3D12 172ce5a7490057d8ecafd531e115c1675e38ee6d7f94b7a2a738a8654ebfa5e5 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.Direct3D12 { get; }
```

Direct3D 12 renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L24).

## `isValid`

<a id="api-cf00a779c7551772"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.isValid 6e2e72344b3a55183e0f6fc2cca0d266829867c2ec2c826fdbcabb7bb557b3af -->

```csharp
public bool InnoEngine.Rendering.GraphicsApi.isValid { get; }
```

Gets whether this value contains an initialized backend identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L72).

## `Metal`

<a id="api-281bb8f24984d356"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.Metal 2e8dde77ae93fda2938c2e45cbc22108fa94a2714f9c1200c1db8317bfc5add2 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.Metal { get; }
```

Apple Metal renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L28).

## `Noop`

<a id="api-51a0b9dfdf757ff2"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.Noop edafcee37080b995d1eec4d0b6fb905936eb7d5392217058734fc53c8f2275ab -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.Noop { get; }
```

Headless validation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L16).

## `OpenGL`

<a id="api-2013a694db3bc50e"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.OpenGL e9dc629df1c2974fa0f06b1396b2ea3e2f3156f3d3cdd4d638a3d975e87fac64 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.OpenGL { get; }
```

Desktop OpenGL renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L36).

## `OpenGLES`

<a id="api-4ccca444a2179f88"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.OpenGLES 2b705ee2868f93d6251d11a608abc8fb48c5c2dd5536e747ade60e19ca13bdf4 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.OpenGLES { get; }
```

OpenGL ES renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L40).

## `value`

<a id="api-80b89112d167a8dc"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.value e53cc8b2e029895881f7e114b9d98f46702307a9744ba7cfc7884adbf5cf0b3d -->

```csharp
public string InnoEngine.Rendering.GraphicsApi.value { get; }
```

Gets the stable backend identity used by target artifacts and provider selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L67).

## `Vulkan`

<a id="api-9a6393197b00e899"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.Vulkan cf97ba2840c7becf05a86a811e5db5cd27320e34cbb999812bfdd48768ef61a1 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.Vulkan { get; }
```

Khronos Vulkan renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L32).

## `WebGPU`

<a id="api-b0e047d691d44e8b"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsApi.WebGPU 69bb113bab1dcd58c18219c99b066b13dd03cf45e8fb6d39105dac1d6ef77c48 -->

```csharp
public static InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsApi.WebGPU { get; }
```

WebGPU renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L44).
