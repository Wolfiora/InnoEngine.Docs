---
title: "UiContextOptions"
description: "Reference for UiContextOptions in Inno.UI."
uid: api.inno.ui.runtime-script.20d2cb979e60317d
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiContextOptions`

This reference describes `UiContextOptions` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiContextOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bba60260bb10f22c) | Method |
| [`Equals`](#api-e4aeceaa6f43eb9a) | Method |
| [`Equals`](#api-64baebf4c5ce58d9) | Method |
| [`GetHashCode`](#api-411bb4abd2eabf6b) | Method |
| [`op_Equality`](#api-377e4f2702d2351c) | Method |
| [`op_Inequality`](#api-9e671db165d0918d) | Method |
| [`ToString`](#api-61685055385af8c0) | Method |
| [`density`](#api-fef0878b3004802a) | Property |
| [`height`](#api-935fa7f52767179e) | Property |
| [`name`](#api-ee9a798be39adf27) | Property |
| [`width`](#api-98b6ec7abf0669cc) | Property |

## Type declaration

<a id="api-20d2cb979e60317d"></a>
<!-- api: T:InnoEngine.UI.UiContextOptions b3273231f20849d76c453de913ef990ea3d786a4515265438f0224a6ea06cc8d -->

```csharp
public readonly struct InnoEngine.UI.UiContextOptions : System.IEquatable<InnoEngine.UI.UiContextOptions>
```

Defines one independent UI layout and interaction surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `#ctor`

<a id="api-bba60260bb10f22c"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.#ctor(System.String,System.Int32,System.Int32,System.Single) d3560dbd1509196789bd54470e44363c8f0edfffb47a4978f100b35595caa33b -->

```csharp
public InnoEngine.UI.UiContextOptions.UiContextOptions(string name, int width, int height, float density = 1)
```

Creates validated context options.

**Parameter `name`:** A non-empty diagnostic context name.

**Parameter `width`:** The positive initial width in pixels.

**Parameter `height`:** The positive initial height in pixels.

**Parameter `density`:** The positive density-independent pixel ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L29).

## `Equals`

<a id="api-e4aeceaa6f43eb9a"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.Equals(InnoEngine.UI.UiContextOptions) 5a3ca7babec02378602048d4059fc45f2e87a8c16891ae52b1f642b826bc2057 -->

```csharp
public bool InnoEngine.UI.UiContextOptions.Equals(InnoEngine.UI.UiContextOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `Equals`

<a id="api-64baebf4c5ce58d9"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.Equals(System.Object) 11f50e95eefed6bd124f05eb1baf34d19d1c3b00cac52cf422e17556badee1ec -->

```csharp
public override bool InnoEngine.UI.UiContextOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `GetHashCode`

<a id="api-411bb4abd2eabf6b"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.GetHashCode 7ac0633243c1da740607d5720b38e12c56147ea4aff33c869f87c9f109c9b4d9 -->

```csharp
public override int InnoEngine.UI.UiContextOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `op_Equality`

<a id="api-377e4f2702d2351c"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.op_Equality(InnoEngine.UI.UiContextOptions,InnoEngine.UI.UiContextOptions) f90e6e2b61a9f116b4d595371ce0a91b6e0a8d0ff119116cfe5e4142f5d708c9 -->

```csharp
public static bool InnoEngine.UI.UiContextOptions.operator ==(InnoEngine.UI.UiContextOptions left, InnoEngine.UI.UiContextOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `op_Inequality`

<a id="api-9e671db165d0918d"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.op_Inequality(InnoEngine.UI.UiContextOptions,InnoEngine.UI.UiContextOptions) 2e1602a0a09a5568a9455fb01f043483c03a62fddf3ac14835f8da8757e1fc18 -->

```csharp
public static bool InnoEngine.UI.UiContextOptions.operator !=(InnoEngine.UI.UiContextOptions left, InnoEngine.UI.UiContextOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `ToString`

<a id="api-61685055385af8c0"></a>
<!-- api: M:InnoEngine.UI.UiContextOptions.ToString 212ecf8b67876502d5d1efd0ba31d6b2f931e890d861cc095b6f3224592b98db -->

```csharp
public override string InnoEngine.UI.UiContextOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `density`

<a id="api-fef0878b3004802a"></a>
<!-- api: P:InnoEngine.UI.UiContextOptions.density 4e6b722c2f8bc0946d02b0945ff632b3496a314e01d92e639e98a829de7c25ac -->

```csharp
public float InnoEngine.UI.UiContextOptions.density { get; }
```

Gets the density-independent pixel ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L61).

## `height`

<a id="api-935fa7f52767179e"></a>
<!-- api: P:InnoEngine.UI.UiContextOptions.height f0c08a90fa069901e15bff324e73dc0a98fc9fb5a925c84cf46d7f3880780c8e -->

```csharp
public int InnoEngine.UI.UiContextOptions.height { get; }
```

Gets the initial height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L57).

## `name`

<a id="api-ee9a798be39adf27"></a>
<!-- api: P:InnoEngine.UI.UiContextOptions.name 4c69fa19a19b89f642f532c8608de9daf3c961b836bb56713c51002e1fc7b78b -->

```csharp
public string InnoEngine.UI.UiContextOptions.name { get; }
```

Gets the diagnostic context name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L49).

## `width`

<a id="api-98b6ec7abf0669cc"></a>
<!-- api: P:InnoEngine.UI.UiContextOptions.width c3c7b1484a6494317babf1b5aa01243ce10cb1f7c07f89f2559b48eae8449f38 -->

```csharp
public int InnoEngine.UI.UiContextOptions.width { get; }
```

Gets the initial width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L53).
