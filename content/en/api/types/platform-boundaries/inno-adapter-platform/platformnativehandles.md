---
title: "PlatformNativeHandles"
description: "Reference for PlatformNativeHandles in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.519d2d49ec00f982
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `PlatformNativeHandles`

This reference describes `PlatformNativeHandles` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Platform.PlatformNativeHandles>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9c541c5a35bae281) | Method |
| [`Deconstruct`](#api-99e7a42f7533f8b4) | Method |
| [`Equals`](#api-e695bdc7e57ba68d) | Method |
| [`Equals`](#api-16176c090243478d) | Method |
| [`GetHashCode`](#api-211ced5d98e3382f) | Method |
| [`op_Equality`](#api-3f20c985eacf836f) | Method |
| [`op_Inequality`](#api-cd67ee38fc583538) | Method |
| [`ToString`](#api-203ca6e730b2590f) | Method |
| [`displayHandle`](#api-6490945a915be201) | Property |
| [`handleKind`](#api-6e826b4400251e2a) | Property |
| [`windowHandle`](#api-d4c462e8b85dc3af) | Property |

## Type declaration

<a id="api-519d2d49ec00f982"></a>
<!-- api: T:Inno.Adapter.Platform.PlatformNativeHandles 54fd50bbc0fd22869a898e128942c2038676dcda3e856a84aa41e6c6a2c6fc47 -->

```csharp
public readonly record struct Inno.Adapter.Platform.PlatformNativeHandles : System.IEquatable<Inno.Adapter.Platform.PlatformNativeHandles>
```

Borrows surface handles from a live window for cooperating native adapters.

**Constraints:** Handles remain valid only while their window is alive. Consumers must not release them.
The handle identifier selects the ABI; this value is not a runtime or scripting contract.

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

**Returns:** A borrowed adapter-level surface description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `#ctor`

<a id="api-9c541c5a35bae281"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleId) 704de19327a80ea7089d1dc33dc73f0ace8dfe5decbb875d565c1b4321685320 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles.PlatformNativeHandles(nint windowHandle, nint displayHandle = 0, Inno.Adapter.Platform.PlatformNativeHandleId handleKind = default(Inno.Adapter.Platform.PlatformNativeHandleId))
```

Borrows surface handles from a live window for cooperating native adapters.

**Constraints:** Handles remain valid only while their window is alive. Consumers must not release them.
The handle identifier selects the ABI; this value is not a runtime or scripting contract.

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

**Returns:** A borrowed adapter-level surface description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `Deconstruct`

<a id="api-99e7a42f7533f8b4"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.Deconstruct(System.IntPtr@,System.IntPtr@,Inno.Adapter.Platform.PlatformNativeHandleId@) 8e3e2d32943bb546064a828f623a051e651ded364939afee5bb69aa7f96c45e7 -->

```csharp
public void Inno.Adapter.Platform.PlatformNativeHandles.Deconstruct(out nint windowHandle, out nint displayHandle, out Inno.Adapter.Platform.PlatformNativeHandleId handleKind)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `Equals`

<a id="api-e695bdc7e57ba68d"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.Equals(Inno.Adapter.Platform.PlatformNativeHandles) 0a3a5dbb7024612b8496bfb0431f1e2cf30d5dc8bd54f6dd6397f6cff5a14a1c -->

```csharp
public bool Inno.Adapter.Platform.PlatformNativeHandles.Equals(Inno.Adapter.Platform.PlatformNativeHandles other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `Equals`

<a id="api-16176c090243478d"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.Equals(System.Object) 49dee11261b6bb27c502ec723ed39f6cfa0814c97510f041ca4e825cdd4af7c4 -->

```csharp
public override bool Inno.Adapter.Platform.PlatformNativeHandles.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `GetHashCode`

<a id="api-211ced5d98e3382f"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.GetHashCode 6e9cc16776ca8dbc3e97d1389fab3fbfc282cbe70306dc6a857708cf278573ca -->

```csharp
public override int Inno.Adapter.Platform.PlatformNativeHandles.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `op_Equality`

<a id="api-3f20c985eacf836f"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.op_Equality(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Platform.PlatformNativeHandles) da1d47ad5b3b639d93d94b06ae7060bd7ec88b6ad72ae2ca3f1ceb2f17e44eb8 -->

```csharp
public static bool Inno.Adapter.Platform.PlatformNativeHandles.operator ==(Inno.Adapter.Platform.PlatformNativeHandles left, Inno.Adapter.Platform.PlatformNativeHandles right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `op_Inequality`

<a id="api-cd67ee38fc583538"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.op_Inequality(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Platform.PlatformNativeHandles) ee7e488e940e66ae480d2d0995f71e672573ff095b830d4af1781d2915937e0d -->

```csharp
public static bool Inno.Adapter.Platform.PlatformNativeHandles.operator !=(Inno.Adapter.Platform.PlatformNativeHandles left, Inno.Adapter.Platform.PlatformNativeHandles right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `ToString`

<a id="api-203ca6e730b2590f"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandles.ToString e87148d1c5ae795c749e0332485094070a17323749fedac9b4482b0781848f83 -->

```csharp
public override string Inno.Adapter.Platform.PlatformNativeHandles.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L24).

## `displayHandle`

<a id="api-6490945a915be201"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandles.displayHandle d0087184d06c289ac9aede14c107b256d6e7276aace610f375a79a48bc8eaead -->

```csharp
public nint Inno.Adapter.Platform.PlatformNativeHandles.displayHandle { get; init; }
```

Native display handle when required by the platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L26).

## `handleKind`

<a id="api-6e826b4400251e2a"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandles.handleKind bee843946308f0203feab1568014493edfa760d056dfd04f8d37e17640dc723d -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandleId Inno.Adapter.Platform.PlatformNativeHandles.handleKind { get; init; }
```

Platform handle kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L27).

## `windowHandle`

<a id="api-d4c462e8b85dc3af"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandles.windowHandle 83f9ab9943aaf15601d254e003edd7c940cc2cc8d8a54a14cebc19eb291fb88a -->

```csharp
public nint Inno.Adapter.Platform.PlatformNativeHandles.windowHandle { get; init; }
```

Native window handle, or a stable UTF-8 canvas selector for browser surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandles.cs#L25).
