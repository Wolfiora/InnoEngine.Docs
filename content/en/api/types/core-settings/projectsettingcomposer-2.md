---
title: "ProjectSettingComposer`2"
description: "Reference for ProjectSettingComposer`2 in Inno.Core.Settings."
uid: api.inno.core.settings.02177eda4a3a4117
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# ``ProjectSettingComposer`2``

This reference describes ``ProjectSettingComposer`2`` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Settings.ProjectSettingComposer`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d1baf26cf4939775) | Method |
| [`CaptureContribution`](#api-698bb549b538aaed) | Method |
| [`Compose`](#api-0a3bbdc0f4954766) | Method |
| [`IsEmpty`](#api-ed31dad718efbb0b) | Method |

## Type declaration

<a id="api-02177eda4a3a4117"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingComposer`2 c3b2229c83ea08d8af2228f6d38f24205a7623212742535adbe2f5e4497d1a9d -->

```csharp
public abstract class Inno.Core.Settings.ProjectSettingComposer<TSetting, TContribution> where TSetting : class, Inno.Core.Serialization.ISerializable where TContribution : class, Inno.Core.Serialization.ISerializable : Inno.Core.Settings.ProjectSettingComposer
```

Lets one setting protocol define deterministic delta capture and multi-contributor composition.

**Type parameter `TSetting`:** The exact effective setting type.

**Type parameter `TContribution`:** The exact serializable delta type stored in Plugin and project records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L163).

## `#ctor`

<a id="api-d1baf26cf4939775"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingComposer`2.#ctor 5fc3e144434a688ef536790b6fb29e78e5bd6debd97c356c4e0704e10d5384c7 -->

```csharp
protected Inno.Core.Settings.ProjectSettingComposer<TSetting, TContribution>.ProjectSettingComposer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L163).

## `CaptureContribution`

<a id="api-698bb549b538aaed"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingComposer`2.CaptureContribution(`0,`0) 82e9665c65a26647e5bc3692b1b0756e8d36183d4e2b363e80e14c9ffc63fe28 -->

```csharp
protected abstract TContribution Inno.Core.Settings.ProjectSettingComposer<TSetting, TContribution>.CaptureContribution(TSetting baseline, TSetting value)
```

Captures the contribution introduced by the supplied project setting value.

**Parameter `baseline`:** The value composed from lower-precedence contributors.

**Parameter `value`:** The complete authored value.

**Returns:** A detached neutral contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L179).

## `Compose`

<a id="api-0a3bbdc0f4954766"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingComposer`2.Compose(`0,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingContribution{`1}}) 4bba4a81669144172837da202f3408abcbe90c7c4e2be5adfabeeec8bea33f56 -->

```csharp
protected abstract void Inno.Core.Settings.ProjectSettingComposer<TSetting, TContribution>.Compose(TSetting target, System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingContribution<TContribution>> contributions)
```

Composes dependency-ordered Plugin deltas and the optional final project delta into a host default.

**Parameter `target`:** The newly created host default to mutate into the effective value.

**Parameter `contributions`:** Decoded contributions in deterministic precedence order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L204).

## `IsEmpty`

<a id="api-ed31dad718efbb0b"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingComposer`2.IsEmpty(`1) 4a569d9bae47be3170a593cf71794b59e09713132466749008bb82ed3df1161c -->

```csharp
protected abstract bool Inno.Core.Settings.ProjectSettingComposer<TSetting, TContribution>.IsEmpty(TContribution contribution)
```

Gets whether a captured contribution contains no semantic operation.

**Parameter `contribution`:** The contribution to inspect.

**Returns:** `true` when the record should be omitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L193).
