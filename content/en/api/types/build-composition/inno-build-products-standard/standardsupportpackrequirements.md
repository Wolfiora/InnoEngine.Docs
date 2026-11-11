---
title: "StandardSupportPackRequirements"
description: "Reference for StandardSupportPackRequirements in Inno.Build.Products.Standard."
uid: api.inno.build.products.standard.660299cc7e807fa0
kind: api
owners:
  - Inno.Build.Products.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-products-standard
---
# `StandardSupportPackRequirements`

This reference describes `StandardSupportPackRequirements` in `Inno.Build.Products.Standard`. Read the [shared contract](../../../projects/inno-build-products-standard.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateDynamic`](#api-0a6162089e00223f) | Method |
| [`CreateStatic`](#api-85d806cd2a868c7e) | Method |

## Type declaration

<a id="api-660299cc7e807fa0"></a>
<!-- api: T:Inno.Build.Products.Standard.StandardSupportPackRequirements ce08dd65ef3058715621eaad32d91987fc656e828b94d77c4bdd9507c930e3a7 -->

```csharp
public static class Inno.Build.Products.Standard.StandardSupportPackRequirements
```

Composes validated standard product Support Pack requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardSupportPackRequirements.cs#L13).

## `CreateDynamic`

<a id="api-0a6162089e00223f"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardSupportPackRequirements.CreateDynamic(Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.BuildTargetId,System.String) 5507ecf8c7019c53fe27a1c5967aa2a65504bc6fa1e21334bc66efe54daf4baa -->

```csharp
public static Inno.Build.SupportPacks.PlayerSupportPackRequirements Inno.Build.Products.Standard.StandardSupportPackRequirements.CreateDynamic(Inno.Build.Toolchains.ProductNativeBuildPlan plan, Inno.Build.BuildTargetId target, string extension)
```

Declares the complete standard Player inputs for the selected linkage.

**Parameter `plan`:** The platform-configured component graph.

**Parameter `target`:** The exact platform target.

**Parameter `extension`:** The platform runtime-library suffix.

**Returns:** Requirements matching the plan's actual component closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardSupportPackRequirements.cs#L30).

## `CreateStatic`

<a id="api-85d806cd2a868c7e"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardSupportPackRequirements.CreateStatic(Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.BuildTargetId,Inno.Build.Toolchains.NativeLinkPlan) ddbdc4fec18062bbe10d8ff8634f6e0b57df68ac1c9cd57494830ea0ea182eb6 -->

```csharp
public static Inno.Build.SupportPacks.PlayerSupportPackRequirements Inno.Build.Products.Standard.StandardSupportPackRequirements.CreateStatic(Inno.Build.Toolchains.ProductNativeBuildPlan plan, Inno.Build.BuildTargetId target, Inno.Build.Toolchains.NativeLinkPlan linkPlan)
```

Declares the complete standard Player inputs for the selected linkage.

**Parameter `plan`:** The platform-configured component graph.

**Parameter `target`:** The exact platform target.

**Returns:** Requirements matching the plan's actual component closure.

**Parameter `linkPlan`:** The explicit platform archive naming plan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardSupportPackRequirements.cs#L58).
