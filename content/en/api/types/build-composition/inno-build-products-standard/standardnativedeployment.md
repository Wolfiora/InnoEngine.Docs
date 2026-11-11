---
title: "StandardNativeDeployment"
description: "Reference for StandardNativeDeployment in Inno.Build.Products.Standard."
uid: api.inno.build.products.standard.f8a7c4af670eb12c
kind: api
owners:
  - Inno.Build.Products.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-products-standard
---
# `StandardNativeDeployment`

This reference describes `StandardNativeDeployment` in `Inno.Build.Products.Standard`. Read the [shared contract](../../../projects/inno-build-products-standard.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateMetadata`](#api-4e6d420c82ea8b41) | Method |
| [`CreateValidator`](#api-86488ba3f218e2a4) | Method |

## Type declaration

<a id="api-f8a7c4af670eb12c"></a>
<!-- api: T:Inno.Build.Products.Standard.StandardNativeDeployment cf99372eb9bc379f21925be2dda4799abf6467076b2e744562608abe9f60f14b -->

```csharp
public static class Inno.Build.Products.Standard.StandardNativeDeployment
```

Composes validated standard product deployment metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeDeployment.cs#L14).

## `CreateMetadata`

<a id="api-4e6d420c82ea8b41"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeDeployment.CreateMetadata(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 84cb74d563fc2fba46db3196bb9b5605528941e38aa73bd99cea8bcc718926e2 -->

```csharp
public static System.Collections.Generic.IReadOnlyDictionary<string, byte[]> Inno.Build.Products.Standard.StandardNativeDeployment.CreateMetadata(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, System.Collections.Generic.IReadOnlyDictionary<string, string> payloads)
```

Encodes the exact runtime payload selected by the platform layout.

**Parameter `products`:** The validated product closure.

**Parameter `payloads`:** The exact destination mapping.

**Returns:** Native loading metadata for the complete closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeDeployment.cs#L45).

## `CreateValidator`

<a id="api-86488ba3f218e2a4"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeDeployment.CreateValidator(Inno.Build.BuildTargetId,System.String) 1934b827669361c8bf173548f21778886614dc208ac5abe0a09983051af741e8 -->

```csharp
public static Inno.Build.IPlayerSupportPackValidator Inno.Build.Products.Standard.StandardNativeDeployment.CreateValidator(Inno.Build.BuildTargetId target, string extension)
```

Creates a validator for the platform-selected native suffix.

**Parameter `target`:** The platform target.

**Parameter `extension`:** The platform runtime-library suffix.

**Returns:** A validator that rejects foreign or incomplete deployment metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeDeployment.cs#L28).
