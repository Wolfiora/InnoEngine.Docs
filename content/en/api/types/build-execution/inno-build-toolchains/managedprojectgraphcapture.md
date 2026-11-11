---
title: "ManagedProjectGraphCapture"
description: "Reference for ManagedProjectGraphCapture in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.e059af60e56f5680
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ManagedProjectGraphCapture`

This reference describes `ManagedProjectGraphCapture` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureAsync`](#api-803304126f68d862) | Method |

## Type declaration

<a id="api-e059af60e56f5680"></a>
<!-- api: T:Inno.Build.Toolchains.ManagedProjectGraphCapture a22e24db053bedc612d43cb42774802f045c86aeac1cad89283794470f4d169b -->

```csharp
public static class Inno.Build.Toolchains.ManagedProjectGraphCapture
```

Evaluates repository project inputs in one selected SDK process without executing project targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedProjectGraphCapture.cs#L15).

## `CaptureAsync`

<a id="api-803304126f68d862"></a>
<!-- api: M:Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureAsync(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken,System.Boolean) 207a40418a4761b0d96675232421a3d98e0a9191f2a11d4172a067b712c8225a -->

```csharp
public static System.Threading.Tasks.Task<string> Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureAsync(string engineRoot, string dotnetHost, System.Collections.Generic.IReadOnlyList<string> projects, System.Collections.Generic.IReadOnlyDictionary<string, string> properties, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), bool resolveReferences = false)
```

Captures effective properties, references, source items and imports using the shared SDK evaluator.

**Parameter `engineRoot`:** The checkout owning the evaluator and its temporary request.

**Parameter `dotnetHost`:** The explicitly selected managed host executable.

**Parameter `projects`:** Existing absolute project paths evaluated together with identical global properties.

**Parameter `properties`:** The complete evaluation properties, including configuration and any explicit output owner.

**Parameter `cancellationToken`:** Cancels preparation or evaluation and drains child processes before releasing owners.

**Parameter `resolveReferences`:** Resolves compile references and implicit symbols after restore without building project references or native products.

**Returns:** A JSON array of SDK snapshots. An empty request or failed evaluation throws instead of returning partial evidence.

**Throws `System.ArgumentException`:** No projects are supplied or a project path is not absolute.

**Throws `System.IO.FileNotFoundException`:** A project or selected SDK input is absent.

**Throws `System.OperationCanceledException`:** The caller cancels owned work.

**Throws `System.InvalidOperationException`:** SDK discovery or evaluation fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/ManagedProjectGraphCapture.cs#L53).
