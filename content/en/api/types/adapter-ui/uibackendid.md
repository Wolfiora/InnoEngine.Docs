---
title: "UiBackendId"
description: "Reference for UiBackendId in Inno.Adapter.UI."
uid: api.inno.adapter.ui.7127f6a85ca110de
kind: api
owners:
  - Inno.Adapter.UI
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui#provider-and-catalog-contract
---
# `UiBackendId`

This reference describes `UiBackendId` in `Inno.Adapter.UI`. Read the [shared contract](../../projects/inno-adapter-ui.md#provider-and-catalog-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.UI.UiBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a72f8a4ae8640093) | Method |
| [`Equals`](#api-5de2251e106acad7) | Method |
| [`Equals`](#api-ccad7402f105fc27) | Method |
| [`GetHashCode`](#api-ce8e7257bf6cf58f) | Method |
| [`op_Equality`](#api-ec3b35df55f8cd23) | Method |
| [`op_Inequality`](#api-c602ee901cb5fdf0) | Method |
| [`ToString`](#api-bfda0188ec834796) | Method |
| [`isValid`](#api-bcf25dfb2272f201) | Property |
| [`rmlUi`](#api-e39eb8f08a26eb25) | Property |
| [`value`](#api-95c3b2c80431ada6) | Property |

## Type declaration

<a id="api-7127f6a85ca110de"></a>
<!-- api: T:Inno.Adapter.UI.UiBackendId d482c18d3a31c94b74ce76a662c30db42a491066b7ec5b7d30eaf4b30f76632f -->

```csharp
public readonly record struct Inno.Adapter.UI.UiBackendId : System.IEquatable<Inno.Adapter.UI.UiBackendId>
```

Identifies a UI implementation independently from its document language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `#ctor`

<a id="api-a72f8a4ae8640093"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.#ctor(System.String) 107d5865cd95ee3f4f10ea75a6bb6c57bdeb35545bae79042aa4628e4be262a6 -->

```csharp
public Inno.Adapter.UI.UiBackendId.UiBackendId(string value)
```

Creates an ordinal, case-sensitive backend identifier.

**Parameter `value`:** Stable nonempty implementation identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L16).

## `Equals`

<a id="api-5de2251e106acad7"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.Equals(Inno.Adapter.UI.UiBackendId) 78832f73e7256d7f3beb4f5c24709a8d3514250565cf789de740eb50570145ed -->

```csharp
public bool Inno.Adapter.UI.UiBackendId.Equals(Inno.Adapter.UI.UiBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `Equals`

<a id="api-ccad7402f105fc27"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.Equals(System.Object) 3c61fa3563bda6e57a600209e286f5f3fa6707b580f84a687f4f6a68a85a68c4 -->

```csharp
public override bool Inno.Adapter.UI.UiBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `GetHashCode`

<a id="api-ce8e7257bf6cf58f"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.GetHashCode e2f253cd4289c407b94c0c3c3dfd381a005ced5259f7fe78b4d84d0e4c1a1211 -->

```csharp
public override int Inno.Adapter.UI.UiBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `op_Equality`

<a id="api-ec3b35df55f8cd23"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.op_Equality(Inno.Adapter.UI.UiBackendId,Inno.Adapter.UI.UiBackendId) 87c0c6926dc3166ea90ecaaac7522248c801923ef9182ee194f6d85652c0bc21 -->

```csharp
public static bool Inno.Adapter.UI.UiBackendId.operator ==(Inno.Adapter.UI.UiBackendId left, Inno.Adapter.UI.UiBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `op_Inequality`

<a id="api-c602ee901cb5fdf0"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.op_Inequality(Inno.Adapter.UI.UiBackendId,Inno.Adapter.UI.UiBackendId) e5b95da9b25af7f3604eac320929ae8457cac4cf4bd00e5455e09133a35e6165 -->

```csharp
public static bool Inno.Adapter.UI.UiBackendId.operator !=(Inno.Adapter.UI.UiBackendId left, Inno.Adapter.UI.UiBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L8).

## `ToString`

<a id="api-bfda0188ec834796"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendId.ToString c6783aec45532a8b6dfa7b65e928defd27d85376b78e52e76f07be01803f56fe -->

```csharp
public override string Inno.Adapter.UI.UiBackendId.ToString()
```

Returns the stable identifier.

**Returns:** The identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L46).

## `isValid`

<a id="api-bcf25dfb2272f201"></a>
<!-- api: P:Inno.Adapter.UI.UiBackendId.isValid ea03d49ce70aeebd0acbdbb79c86e9d037494793c4a4b3c7890ebe7a259aaf7b -->

```csharp
public bool Inno.Adapter.UI.UiBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L38).

## `rmlUi`

<a id="api-e39eb8f08a26eb25"></a>
<!-- api: P:Inno.Adapter.UI.UiBackendId.rmlUi ef3f0df1a05d32ccb5974123297d4f8605205ee0b57d0691e95521e0e2bcfa3d -->

```csharp
public static Inno.Adapter.UI.UiBackendId Inno.Adapter.UI.UiBackendId.rmlUi { get; }
```

Gets the identifier of the bundled RmlUi implementation, not a closed backend list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L28).

## `value`

<a id="api-95c3b2c80431ada6"></a>
<!-- api: P:Inno.Adapter.UI.UiBackendId.value bff0c0cfe6c2849e88695d26e983391a17727f92880a7a95c699ec9534856f75 -->

```csharp
public string Inno.Adapter.UI.UiBackendId.value { get; }
```

Gets the stable identifier; the default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendId.cs#L33).
