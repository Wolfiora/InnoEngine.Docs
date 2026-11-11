---
title: "NativeBindingProfile"
description: "Reference for NativeBindingProfile in Inno.Build.Bindings."
uid: api.inno.build.bindings.503652649b30b0db
kind: api
owners:
  - Inno.Build.Bindings
apiSurface: source-clr
contracts:
  - project.inno-build-bindings
---
# `NativeBindingProfile`

This reference describes `NativeBindingProfile` in `Inno.Build.Bindings`. Read the [shared contract](../../../projects/inno-build-bindings.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-36cfa46071120b8b) | Method |
| [`importMode`](#api-f0766fe50b74a3de) | Property |
| [`inputPaths`](#api-f29bc469b5f12a92) | Property |
| [`runtime`](#api-dc275bfe6affcbdb) | Property |
| [`target`](#api-425e0e5b6913867f) | Property |
| [`targetId`](#api-8a722321463b942a) | Property |

## Type declaration

<a id="api-503652649b30b0db"></a>
<!-- api: T:Inno.Build.Bindings.NativeBindingProfile 54fcaf54f2c720efad4f8e258567666026881bc8213fa9fbc111f3d4ef1800af -->

```csharp
public sealed class Inno.Build.Bindings.NativeBindingProfile
```

Captures one platform's official BGCS target and managed projection choices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L17).

## `#ctor`

<a id="api-36cfa46071120b8b"></a>
<!-- api: M:Inno.Build.Bindings.NativeBindingProfile.#ctor(System.String,BGCS.Configuration.TargetConfiguration,System.Nullable{BGCS.Core.Targets.ManagedRuntimeId},System.Collections.Generic.IEnumerable{System.String},System.Action{BGCS.BindingHostBuilder},System.Nullable{BGCS.Core.BindingImportMode}) e580738ea557569e211163ff809f58544b6d141a3cebae412e7886e2859d3181 -->

```csharp
public Inno.Build.Bindings.NativeBindingProfile.NativeBindingProfile(string targetId, BGCS.Configuration.TargetConfiguration target, BGCS.Core.Targets.ManagedRuntimeId? runtime = null, System.Collections.Generic.IEnumerable<string>? inputPaths = null, System.Action<BGCS.BindingHostBuilder>? configureGenerator = null, BGCS.Core.BindingImportMode? importMode = null)
```

Creates a target profile without discovering an SDK or executing a generator.

**Parameter `targetId`:** The engine target identity that may consume this profile.

**Parameter `target`:** The official BGCS native target selection.

**Parameter `runtime`:** The official BGCS managed runtime selection.

**Parameter `inputPaths`:** Checkout-relative implementation inputs owned by this profile.

**Parameter `configureGenerator`:** An immutable platform-owned registration action for official BGCS extensions, or null for the standard SDK.
The action must not capture mutable state; its implementation and extension assemblies participate in input identity.

**Parameter `importMode`:** The platform's official import mechanism, or null to preserve the component choice.

**Throws `System.ArgumentException`:** An identity is empty, uses implicit host selection, or a path escapes the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L46).

## `importMode`

<a id="api-f0766fe50b74a3de"></a>
<!-- api: P:Inno.Build.Bindings.NativeBindingProfile.importMode fcb3aacdab5b905ec28bb2bff198d8cd94404059b7c65db9a900de11ca65db93 -->

```csharp
public BGCS.Core.BindingImportMode? Inno.Build.Bindings.NativeBindingProfile.importMode { get; }
```

Gets the explicit platform import mechanism, or null for the component's mechanism.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L85).

## `inputPaths`

<a id="api-f29bc469b5f12a92"></a>
<!-- api: P:Inno.Build.Bindings.NativeBindingProfile.inputPaths 6bece7ed193b007f003560c741c94a0992ecd8d47749a870ddd1a4a6ee1198c6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Bindings.NativeBindingProfile.inputPaths { get; }
```

Gets the profile's exact checkout implementation inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L89).

## `runtime`

<a id="api-dc275bfe6affcbdb"></a>
<!-- api: P:Inno.Build.Bindings.NativeBindingProfile.runtime 8e1a0f3862da7a5708b37617860bb0f79deb5faa2230c3cc5cfe8f486e5ecaf7 -->

```csharp
public BGCS.Core.Targets.ManagedRuntimeId? Inno.Build.Bindings.NativeBindingProfile.runtime { get; }
```

Gets the managed projection runtime, or null for the component's portable default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L81).

## `target`

<a id="api-425e0e5b6913867f"></a>
<!-- api: P:Inno.Build.Bindings.NativeBindingProfile.target 3a3a6f06a994dbe8ddd2613744f9d636af4d7b1c899d9b1a252cf2ccd333d5df -->

```csharp
public BGCS.Configuration.TargetConfiguration Inno.Build.Bindings.NativeBindingProfile.target { get; }
```

Gets the immutable official BGCS target configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L77).

## `targetId`

<a id="api-8a722321463b942a"></a>
<!-- api: P:Inno.Build.Bindings.NativeBindingProfile.targetId 7284e5f7207883962134f0b64c72c0d36726cc738a7fc0fb5f0f02130a01db74 -->

```csharp
public string Inno.Build.Bindings.NativeBindingProfile.targetId { get; }
```

Gets the engine target authorized to consume this profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Configuration/NativeBindingProfile.cs#L73).
