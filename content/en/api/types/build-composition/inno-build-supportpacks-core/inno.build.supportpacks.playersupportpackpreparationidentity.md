---
title: "Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.73b4749e02c9cda1
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureAsync`](#api-ce8322f01b4d882b) | Method |
| [`CreateExecutionAsync`](#api-7b3ea35551752358) | Method |
| [`VerifyAsync`](#api-d2afff3d8c77fe91) | Method |
| [`fingerprint`](#api-5c06c7ba54908770) | Property |

## Type declaration

<a id="api-73b4749e02c9cda1"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity 4b99e6869d10c80cdd92a51b609ade3633733faa5843fc0063a1ceb0d0b358f5 -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity
```

Freezes a Support Pack's source preparation identity independently of reconstructible build outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPreparationIdentity.cs#L14).

## `CaptureAsync`

<a id="api-ce8322f01b4d882b"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.DotNetSdkDescriptor,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken) 12441352a5b8e4560985974d8cfcc7b3b658d45ab20fe260880232bccceebef2 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity> Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.CaptureAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan nativePlan, Inno.Build.Toolchains.DotNetSdkDescriptor sdk, string project, System.Collections.Generic.IReadOnlyDictionary<string, string> properties, System.Collections.Generic.IReadOnlyList<string> preparationInputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures Native declarations, selected binding inputs, the managed graph and explicit packaging inputs.

**Parameter `context`:** The borrowed operation with a frozen SDK and binding input provider.

**Parameter `nativePlan`:** The exact product component closure used by preparation.

**Parameter `sdk`:** The selected managed SDK also used for the actual Player build.

**Parameter `project`:** The existing Player entry project whose graph supplies managed sources.

**Parameter `properties`:** The compiler and product properties used by the managed preparation build.

**Parameter `preparationInputs`:** The complete explicit platform layout, template, validator and preparation implementation inputs.

**Parameter `cancellationToken`:** Cancels input evaluation and hashing without publishing a Pack.

**Returns:** A frozen identity; no Native compilation, binding generation or Player build is executed.

**Throws `System.ArgumentNullException`:** A required operation or input declaration is null.

**Throws `System.InvalidOperationException`:** The selected source, SDK or generator input graph cannot be resolved.

**Throws `System.OperationCanceledException`:** Input capture was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPreparationIdentity.cs#L81).

## `CreateExecutionAsync`

<a id="api-7b3ea35551752358"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.CreateExecutionAsync(System.Threading.CancellationToken) 9cdb9b2e8343b332a556b78b1528bf33f0fd1cc71bfb3b9df723fb885a7a3fe7 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.ManagedBuildExecution> Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.CreateExecutionAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Creates the exclusively owned fixed managed execution planned by this preparation identity.

**Parameter `cancellationToken`:** Cancels materialization without changing any installed Pack.

**Returns:** Caller-owned input copies for compilation and source extraction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPreparationIdentity.cs#L113).

## `VerifyAsync`

<a id="api-d2afff3d8c77fe91"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.VerifyAsync(System.Threading.CancellationToken) 1f2b1c6991e1306b55ad25b3c9c6f222dbb0be4b82a380cdcf347f36c55d2cb4 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.VerifyAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Freshly verifies the complete current source input closure after waiting or preparing output.

**Parameter `cancellationToken`:** Cancels verification before cache acceptance or publication.

**Returns:** Completion when the current graph and bytes still match the frozen preparation identity.

**Throws `System.InvalidOperationException`:** Preparation inputs changed; no candidate may be selected.

**Throws `System.OperationCanceledException`:** Verification was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPreparationIdentity.cs#L131).

## `fingerprint`

<a id="api-5c06c7ba54908770"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.fingerprint 885c3591550b3bd397037efcf8cb718d4cb545c1a7c2b70175d6996090c953a4 -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.fingerprint { get; private set; }
```

Gets the frozen source input identity used to find a complete prepared Pack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPreparationIdentity.cs#L43).
