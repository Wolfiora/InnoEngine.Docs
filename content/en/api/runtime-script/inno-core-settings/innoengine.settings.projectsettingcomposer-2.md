---
title: "ProjectSettingComposer`2"
description: "Reference for ProjectSettingComposer`2 in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.e31c97eddecda6a4
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# ``ProjectSettingComposer`2``

This reference describes ``ProjectSettingComposer`2`` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Settings.ProjectSettingComposer`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb85e2707715003e) | Method |
| [`CaptureContribution`](#api-dd72e714bf3aad8f) | Method |
| [`Compose`](#api-151fb79350a7b262) | Method |
| [`IsEmpty`](#api-5961ad34eb4c79ab) | Method |

## Type declaration

<a id="api-e31c97eddecda6a4"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingComposer`2 99d2cb8d366614d90048d46d62083b03f9d25139893b18d186d6f90042e7a42e -->

```csharp
public abstract class InnoEngine.Settings.ProjectSettingComposer<TSetting, TContribution> where TSetting : class, InnoEngine.Serialization.ISerializable where TContribution : class, InnoEngine.Serialization.ISerializable : InnoEngine.Settings.ProjectSettingComposer
```

Lets one setting protocol define deterministic delta capture and multi-contributor composition.

**Type parameter `TSetting`:** The exact effective setting type.

**Type parameter `TContribution`:** The exact serializable delta type stored in Plugin and project records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L163).

## `#ctor`

<a id="api-cb85e2707715003e"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposer`2.#ctor 299eebf9b70f6d22a1f72956c0c2f1259ec868ccff0373278cac2d0b66e75025 -->

```csharp
protected InnoEngine.Settings.ProjectSettingComposer<TSetting, TContribution>.ProjectSettingComposer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L163).

## `CaptureContribution`

<a id="api-dd72e714bf3aad8f"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposer`2.CaptureContribution(`0,`0) bacc09010dd0934a7cdada8076d4895661f775ca452bc09fcb687ab7d3c697fe -->

```csharp
protected abstract TContribution InnoEngine.Settings.ProjectSettingComposer<TSetting, TContribution>.CaptureContribution(TSetting baseline, TSetting value)
```

Captures the contribution introduced by the supplied project setting value.

**Parameter `baseline`:** The value composed from lower-precedence contributors.

**Parameter `value`:** The complete authored value.

**Returns:** A detached neutral contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L179).

## `Compose`

<a id="api-151fb79350a7b262"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposer`2.Compose(`0,System.Collections.Generic.IReadOnlyList{InnoEngine.Settings.ProjectSettingContribution{`1}}) 62c54fb6a6d21b155a88f1ad01ab67c2ac4d7f4c45ee2a937d9bedfc827701b7 -->

```csharp
protected abstract void InnoEngine.Settings.ProjectSettingComposer<TSetting, TContribution>.Compose(TSetting target, System.Collections.Generic.IReadOnlyList<InnoEngine.Settings.ProjectSettingContribution<TContribution>> contributions)
```

Composes dependency-ordered Plugin deltas and the optional final project delta into a host default.

**Parameter `target`:** The newly created host default to mutate into the effective value.

**Parameter `contributions`:** Decoded contributions in deterministic precedence order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L204).

## `IsEmpty`

<a id="api-5961ad34eb4c79ab"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposer`2.IsEmpty(`1) cdead9882acf11fa4e5d3df83d2e8470e0c353e4422b1c074d17354ddac6fc6b -->

```csharp
protected abstract bool InnoEngine.Settings.ProjectSettingComposer<TSetting, TContribution>.IsEmpty(TContribution contribution)
```

Gets whether a captured contribution contains no semantic operation.

**Parameter `contribution`:** The contribution to inspect.

**Returns:** `true` when the record should be omitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L193).
