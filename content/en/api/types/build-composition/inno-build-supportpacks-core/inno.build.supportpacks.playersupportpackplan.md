---
title: "Inno.Build.SupportPacks.PlayerSupportPackPlan"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackPlan in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.29f8e879e058a428
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackPlan`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackPlan` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5f3283047c32d1b3) | Method |
| [`PrepareAsync`](#api-b84b621eed025526) | Method |
| [`VerifyInputsAsync`](#api-f7108439477f7bab) | Method |
| [`preparationIdentity`](#api-92f95fb7d731911e) | Property |
| [`target`](#api-4965555ebcbb2757) | Property |

## Type declaration

<a id="api-29f8e879e058a428"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackPlan 55bd9b580c71aa2df669bdf57bf42743288428c762597faa4a876b1e0c14c0ba -->

```csharp
public abstract class Inno.Build.SupportPacks.PlayerSupportPackPlan
```

Holds validated, frozen preparation inputs without owning running processes or staging resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L11).

## `#ctor`

<a id="api-5f3283047c32d1b3"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPlan.#ctor(Inno.Build.BuildTargetId,System.String) e6feef06bb3ed47999230a19df8f6a9f389af4c4200ec0f8ef3cdeb25f5b6253 -->

```csharp
protected Inno.Build.SupportPacks.PlayerSupportPackPlan.PlayerSupportPackPlan(Inno.Build.BuildTargetId target, string preparationIdentity)
```

Fixes the publication identity before preparation is permitted.

**Parameter `target`:** The nonempty target whose closure this plan prepares.

**Parameter `preparationIdentity`:** The complete lowercase SHA-256 input identity captured without preparing product output.

**Throws `System.ArgumentException`:** The target has no stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L25).

## `PrepareAsync`

<a id="api-b84b621eed025526"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(System.String,System.Threading.CancellationToken) 1e52db006f7c9fbb1174b8e7f89896afcd2af50e4875dbadb0b26067782fe0c1 -->

```csharp
public abstract System.Threading.Tasks.ValueTask Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(string stagingDirectory, System.Threading.CancellationToken cancellationToken)
```

Executes frozen inputs in publisher-owned staging without selecting tools again.

**Parameter `stagingDirectory`:** The isolated empty directory borrowed for this execution only.

**Parameter `cancellationToken`:** Cancels execution and drains owned work before returning.

**Returns:** Completion when the full closure is prepared; failures propagate without publishing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L76).

## `VerifyInputsAsync`

<a id="api-f7108439477f7bab"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPlan.VerifyInputsAsync(System.Threading.CancellationToken) 166d7c400572183c9a631af913f65bbc0f3c8c7cac58a11d5ba36925e02d55a1 -->

```csharp
public abstract System.Threading.Tasks.ValueTask Inno.Build.SupportPacks.PlayerSupportPackPlan.VerifyInputsAsync(System.Threading.CancellationToken cancellationToken)
```

Freshly verifies the planned source graph after an ownership wait or preparation work.

**Parameter `cancellationToken`:** Cancels verification before selecting any Pack.

**Returns:** Completion only when all current inputs still match the frozen preparation identity.

**Throws `System.InvalidOperationException`:** The planned inputs changed and cannot be accepted.

**Throws `System.OperationCanceledException`:** Verification was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L62).

## `preparationIdentity`

<a id="api-92f95fb7d731911e"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPlan.preparationIdentity d339573730bef6f69d65eb4da7e280831b057478901c37c287d27123094e910a -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackPlan.preparationIdentity { get; }
```

Gets the complete source preparation identity, independently of the resulting Pack content fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L45).

## `target`

<a id="api-4965555ebcbb2757"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPlan.target 93adcd9b1e1892b23270b33dcf7677ba78fba4cc249be88615f311a59b668dca -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.SupportPacks.PlayerSupportPackPlan.target { get; }
```

Gets the immutable target checked by the publisher before creating output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPlan.cs#L40).
