---
title: "AssetImportFailure"
description: "Reference for AssetImportFailure in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.e0df66f40562ebd3
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImportFailure`

This reference describes `AssetImportFailure` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.Pipeline.AssetImportFailure>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fc880fb51041f28e) | Method |
| [`Deconstruct`](#api-113dafad24fd26d4) | Method |
| [`Equals`](#api-d4c353f31496868b) | Method |
| [`Equals`](#api-6b92d6d03f7afc3e) | Method |
| [`GetHashCode`](#api-d1c021aab51391d0) | Method |
| [`op_Equality`](#api-e5ca434cf6d82f0a) | Method |
| [`op_Inequality`](#api-d3e33e3d7d6ce18d) | Method |
| [`ToString`](#api-dc2fd0c19da7cb59) | Method |
| [`assetPath`](#api-bcac56a3944653a8) | Property |
| [`diagnostics`](#api-755d7e3b07eb57c5) | Property |

## Type declaration

<a id="api-e0df66f40562ebd3"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportFailure 36fce7d4ac5067eb8bd2fa48c4e9c90731c17e6ca11feb745fa971c2df185b9a -->

```csharp
public readonly record struct Inno.Assets.Pipeline.AssetImportFailure : System.IEquatable<Inno.Assets.Pipeline.AssetImportFailure>
```

Describes a writable-source import failure introduced after an earlier health snapshot.

**Parameter `assetPath`:** The isolated path of the source that failed to import.

**Parameter `diagnostics`:** The deterministic importer diagnostics associated with the failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `#ctor`

<a id="api-fc880fb51041f28e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.#ctor(System.String,System.String) 2e30d5afa8df7534a1d29912648aa595f2bf3e76ca6c6dd2f4594de6adfe2c51 -->

```csharp
public Inno.Assets.Pipeline.AssetImportFailure.AssetImportFailure(string assetPath, string diagnostics)
```

Describes a writable-source import failure introduced after an earlier health snapshot.

**Parameter `assetPath`:** The isolated path of the source that failed to import.

**Parameter `diagnostics`:** The deterministic importer diagnostics associated with the failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `Deconstruct`

<a id="api-113dafad24fd26d4"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.Deconstruct(System.String@,System.String@) 81e3dd723c038bd098cba17134ffc8b0631d743c4e101300074e75457fe14bb0 -->

```csharp
public void Inno.Assets.Pipeline.AssetImportFailure.Deconstruct(out string assetPath, out string diagnostics)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `Equals`

<a id="api-d4c353f31496868b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.Equals(Inno.Assets.Pipeline.AssetImportFailure) 11dc4c2789aa0a27cafe3608ec5b8cc2a265dfb6b27067cfd9970128a2aed041 -->

```csharp
public bool Inno.Assets.Pipeline.AssetImportFailure.Equals(Inno.Assets.Pipeline.AssetImportFailure other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `Equals`

<a id="api-6b92d6d03f7afc3e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.Equals(System.Object) 0f0ecbc4aef0e09c7904bc0da47a31754fa3e8dc4c10e8ad194bed6429bcfc17 -->

```csharp
public override bool Inno.Assets.Pipeline.AssetImportFailure.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `GetHashCode`

<a id="api-d1c021aab51391d0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.GetHashCode ad11a40a89db81faeb156c7a26ccbed8e179c64695c6f49c06d4fedddeab938f -->

```csharp
public override int Inno.Assets.Pipeline.AssetImportFailure.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `op_Equality`

<a id="api-e5ca434cf6d82f0a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.op_Equality(Inno.Assets.Pipeline.AssetImportFailure,Inno.Assets.Pipeline.AssetImportFailure) cf2a9a8f82633b23a8d8a003ff6eb0a4c4ca425af0f3ebefd0ae05e6684b8545 -->

```csharp
public static bool Inno.Assets.Pipeline.AssetImportFailure.operator ==(Inno.Assets.Pipeline.AssetImportFailure left, Inno.Assets.Pipeline.AssetImportFailure right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `op_Inequality`

<a id="api-d3e33e3d7d6ce18d"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.op_Inequality(Inno.Assets.Pipeline.AssetImportFailure,Inno.Assets.Pipeline.AssetImportFailure) af7c371f46919e6e53f61e58e8aa89a4c1db0adbda57b395d405eb901e2ce40e -->

```csharp
public static bool Inno.Assets.Pipeline.AssetImportFailure.operator !=(Inno.Assets.Pipeline.AssetImportFailure left, Inno.Assets.Pipeline.AssetImportFailure right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `ToString`

<a id="api-dc2fd0c19da7cb59"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImportFailure.ToString 8a2c99cd187bb89c446219dafe06c3c715e316b38e3e8837a9f9390772e88471 -->

```csharp
public override string Inno.Assets.Pipeline.AssetImportFailure.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L44).

## `assetPath`

<a id="api-bcac56a3944653a8"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportFailure.assetPath cc6d7c8a78c30c9fc8bac4dbd667bf6f8ae8ad54efda61d0e6c6508006a956c7 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportFailure.assetPath { get; init; }
```

The isolated path of the source that failed to import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L45).

## `diagnostics`

<a id="api-755d7e3b07eb57c5"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportFailure.diagnostics e2564fd6e65b269ba2a135ae8f9f0ddb875aaa4a5268754777a80c57ea0b9992 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportFailure.diagnostics { get; init; }
```

The deterministic importer diagnostics associated with the failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L46).
