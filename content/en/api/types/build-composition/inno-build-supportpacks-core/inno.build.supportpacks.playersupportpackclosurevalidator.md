---
title: "Inno.Build.SupportPacks.PlayerSupportPackClosureValidator"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackClosureValidator in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.d28d7ced5151e52e
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackClosureValidator`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackClosureValidator` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5aa101ecfe68f660) | Method |
| [`Validate`](#api-e1de6e22a6edac7e) | Method |

## Type declaration

<a id="api-d28d7ced5151e52e"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator e09fedcd4ab5a8a13a8b47c5a28969652faacea212b8fba08b60dd1359bc57b7 -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackClosureValidator : Inno.Build.IPlayerSupportPackValidator
```

Combines a platform's layout checks with distribution-selected managed, binding and native requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackClosureValidator.cs#L11).

## `#ctor`

<a id="api-5aa101ecfe68f660"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.#ctor(Inno.Build.SupportPacks.PlayerSupportPackRequirements,Inno.Build.IPlayerSupportPackValidator,Inno.Build.IPlayerSupportPackValidator) eaae159952080850f32d7fbd66f633812d993198280a757c6ab3e4de8c69ef72 -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.PlayerSupportPackClosureValidator(Inno.Build.SupportPacks.PlayerSupportPackRequirements requirements, Inno.Build.IPlayerSupportPackValidator platform, Inno.Build.IPlayerSupportPackValidator? deployment)
```

Borrows validators while retaining only the immutable selected closure requirements.

**Parameter `requirements`:** The distribution's frozen input requirements.

**Parameter `platform`:** The borrowed layout and ABI validator.

**Parameter `deployment`:** An optional implementation-owned deployment metadata validator.

**Throws `System.ArgumentNullException`:** Requirements or the platform validator are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackClosureValidator.cs#L32).

## `Validate`

<a id="api-e1de6e22a6edac7e"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.Validate(System.String) c8eca44d7451675244da8e0f597b1e6bbf2eab11cf4567bf214d462a5409f0e9 -->

```csharp
public void Inno.Build.SupportPacks.PlayerSupportPackClosureValidator.Validate(string directory)
```

Rejects missing selected inputs, undeclared native groups and invalid deployment metadata.

**Parameter `directory`:** The complete Pack directory whose content manifest is independently verified by its publisher.

**Throws `System.IO.InvalidDataException`:** A selected input or native group is missing or a library belongs to an undeclared group.

**Throws `System.IO.IOException`:** An input escapes ownership, crosses a link or cannot be read.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackClosureValidator.cs#L54).
