---
title: "TextRuntimeFactory"
description: "Reference for TextRuntimeFactory in Inno.Text.Runtime."
uid: api.inno.text.runtime.c281d2b76bba5817
kind: api
owners:
  - Inno.Text.Runtime
apiSurface: source-clr
contracts:
  - project.inno-text-runtime#font-lifetime-contract
---
# `TextRuntimeFactory`

This reference describes `TextRuntimeFactory` in `Inno.Text.Runtime`. Read the [shared contract](../../projects/inno-text-runtime.md#font-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e612fa257175ebc4) | Method |
| [`Create`](#api-11b0686ea06ba0a0) | Method |
| [`descriptor`](#api-eb35c7a9b79d72c4) | Property |

## Type declaration

<a id="api-c281d2b76bba5817"></a>
<!-- api: T:Inno.Text.Runtime.TextRuntimeFactory d565ebd5f183d1b507b6e23053bb3925e2cbc203974780c6d51db03053f214f9 -->

```csharp
public sealed class Inno.Text.Runtime.TextRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one text service for every isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-e612fa257175ebc4"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Text.Runtime.TextRuntime}) b6ae54845518e7a89637630fc1f073e66b62c5a9865ca2074bd028924804be85 -->

```csharp
public Inno.Text.Runtime.TextRuntimeFactory.TextRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Text.Runtime.TextRuntime> runtimeFactory)
```

Creates a reusable text runtime factory.

**Parameter `runtimeFactory`:** The callback that creates one runtime per session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntimeFactory.cs#L21).

## `Create`

<a id="api-11b0686ea06ba0a0"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 93d88a5d0f7e48c0664fbc4c4367444d4fd6d2371a3b181b3e6a1ed05ce6629d -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Text.Runtime.TextRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates one session-owned text runtime.

**Parameter `context`:** The isolated session construction context.

**Returns:** The unattached runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntimeFactory.cs#L42).

## `descriptor`

<a id="api-eb35c7a9b79d72c4"></a>
<!-- api: P:Inno.Text.Runtime.TextRuntimeFactory.descriptor a343ebeba889ceb09193617015ba9372b0937f26ba6fbc20adf629a437e744a4 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Text.Runtime.TextRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata that makes text available before scene simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntimeFactory.cs#L29).
