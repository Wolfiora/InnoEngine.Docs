---
title: "IGenerationChange"
description: "Reference for IGenerationChange in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.c57b148c97d895eb
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `IGenerationChange`

This reference describes `IGenerationChange` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-e8d14225d4e3cbc0) | Method |
| [`Complete`](#api-b61ea336afae53ef) | Method |
| [`PrepareForActivation`](#api-da4a04a90ec170b5) | Method |
| [`RestorePreviousState`](#api-11c77f8d2f5f9141) | Method |
| [`RollbackStructure`](#api-19e4ac64b5e519ca) | Method |

## Type declaration

<a id="api-c57b148c97d895eb"></a>
<!-- api: T:Inno.Extensibility.Reload.IGenerationChange 788ba5bb9d9f49118a1764ca5e830fb1d9282c9718550a8459fda50f5bde6b9c -->

```csharp
public interface Inno.Extensibility.Reload.IGenerationChange
```

Stages domain-owned state around an atomic generation publication without retaining it after completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L6).

## `Apply`

<a id="api-e8d14225d4e3cbc0"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationChange.Apply 08e9587792fdf1a4e3ec48d8c9ea3cf4f0f711491198c755d5c4a620eb799d6a -->

```csharp
void Inno.Extensibility.Reload.IGenerationChange.Apply()
```

Applies captured state after candidate publication; partial changes must be rollback-safe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L15).

## `Complete`

<a id="api-b61ea336afae53ef"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationChange.Complete 4c72692b296091e35c8199c2b55faf70d479d282e3c9a361fb8b0beb8a2f030d -->

```csharp
void Inno.Extensibility.Reload.IGenerationChange.Complete()
```

Releases old instances after irreversible publication; cleanup failures fault the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L19).

## `PrepareForActivation`

<a id="api-da4a04a90ec170b5"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationChange.PrepareForActivation 500eab8993ac8310f523c922acf56ef85770549f786944ac426ee3210bf70caa -->

```csharp
void Inno.Extensibility.Reload.IGenerationChange.PrepareForActivation()
```

Quiesces old instances while the old publication remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L11).

## `RestorePreviousState`

<a id="api-11c77f8d2f5f9141"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationChange.RestorePreviousState 74ee2847df8aab0131d1034016f16919e0f780218e282c9bbf4ed79bc7affb4d -->

```csharp
void Inno.Extensibility.Reload.IGenerationChange.RestorePreviousState()
```

Restores old values and lifecycle after the previous publication has been restored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L27).

## `RollbackStructure`

<a id="api-19e4ac64b5e519ca"></a>
<!-- api: M:Inno.Extensibility.Reload.IGenerationChange.RollbackStructure 85815898126eca2766cc7e318d984e3cb85dc05490e256c4f35ffcf60f1e6203 -->

```csharp
void Inno.Extensibility.Reload.IGenerationChange.RollbackStructure()
```

Removes provisional structures before restoring the old publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IGenerationChange.cs#L23).
