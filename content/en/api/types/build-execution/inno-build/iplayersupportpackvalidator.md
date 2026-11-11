---
title: "IPlayerSupportPackValidator"
description: "Reference for IPlayerSupportPackValidator in Inno.Build."
uid: api.inno.build.585520529c88e48c
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `IPlayerSupportPackValidator`

This reference describes `IPlayerSupportPackValidator` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-8005fc69f4ec3288) | Method |

## Type declaration

<a id="api-585520529c88e48c"></a>
<!-- api: T:Inno.Build.IPlayerSupportPackValidator 94457341ac2006b1fe022eee2f00c9ed8343134c62abedb7cb663d5ca469a3de -->

```csharp
public interface Inno.Build.IPlayerSupportPackValidator
```

Validates platform-owned runtime or link inputs without coupling the pack catalog to target names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/IPlayerSupportPackValidator.cs#L6).

## `Validate`

<a id="api-8005fc69f4ec3288"></a>
<!-- api: M:Inno.Build.IPlayerSupportPackValidator.Validate(System.String) ab7ccde80cc1ed48a95c3085c6275c369fc24ce3f065c0c7ba6a725e5bedbb3d -->

```csharp
void Inno.Build.IPlayerSupportPackValidator.Validate(string directory)
```

Rejects an incomplete or incompatible platform closure.

**Parameter `directory`:** The prepared or installed Support Pack directory.

**Throws `System.IO.InvalidDataException`:** A required platform input is absent or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Player/IPlayerSupportPackValidator.cs#L17).
