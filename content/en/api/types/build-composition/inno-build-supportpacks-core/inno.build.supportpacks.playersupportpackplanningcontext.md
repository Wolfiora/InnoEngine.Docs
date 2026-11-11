---
title: "Inno.Build.SupportPacks.PlayerSupportPackPlanningContext"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackPlanningContext in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.7315a4679f5dc69e
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackPlanningContext`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackPlanningContext` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-aaa1875757ee78af) | Method |
| [`dotnetHost`](#api-18882ce33f5f9384) | Property |
| [`engineRoot`](#api-e7678432d376ffb0) | Property |

## Type declaration

<a id="api-7315a4679f5dc69e"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackPlanningContext ade583460ad5a9b6c4b8e6ac0edbccce45b217a9df38660113eb78271b63fb93 -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackPlanningContext
```

Supplies read-only discovery inputs before a publication directory exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlanningContext.cs#L8).

## `#ctor`

<a id="api-aaa1875757ee78af"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.#ctor(System.String,System.String) 47f3c4e16152c220655546bce02fca3a695011b13532fcdd7369314a797cfb5e -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.PlayerSupportPackPlanningContext(string engineRoot, string dotnetHost)
```

Captures the checkout and host from which project-scoped tools are resolved.

**Parameter `engineRoot`:** The complete checkout to inspect without modifying publication output.

**Parameter `dotnetHost`:** The explicitly selected managed host executable.

**Throws `System.ArgumentException`:** A required input is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlanningContext.cs#L22).

## `dotnetHost`

<a id="api-18882ce33f5f9384"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.dotnetHost 507a99dc436ddefe4d3a240c187e4e5c0a737c0ea103f925e34e66d3eac5967c -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.dotnetHost { get; }
```

Gets the explicit host from which the source freezes its SDK selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlanningContext.cs#L40).

## `engineRoot`

<a id="api-e7678432d376ffb0"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.engineRoot 9e36d98dffa85846e8d1b2af8512683b659cda717a750cec95d469fe15bc8aad -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackPlanningContext.engineRoot { get; }
```

Gets the borrowed source checkout used for preflight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlanningContext.cs#L35).
