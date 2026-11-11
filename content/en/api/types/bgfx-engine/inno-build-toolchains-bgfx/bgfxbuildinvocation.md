---
title: "BgfxBuildInvocation"
description: "Reference for BgfxBuildInvocation in Inno.Build.Toolchains.Bgfx."
uid: api.inno.build.toolchains.bgfx.9c08ad1b177688d5
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx
---
# `BgfxBuildInvocation`

This reference describes `BgfxBuildInvocation` in `Inno.Build.Toolchains.Bgfx`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b9a0bd857ae4542) | Method |
| [`arguments`](#api-970024d9c94199ea) | Property |
| [`tool`](#api-b704b4c0dee79094) | Property |

## Type declaration

<a id="api-9c08ad1b177688d5"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation 63d1b19f036c2d810679bf17f5a3845b3422603af6f2c75d575c7cd10b68c9f2 -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation
```

Freezes an SDK tool name and ordered arguments for execution from the component source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxBuildInvocation.cs#L10).

## `#ctor`

<a id="api-2b9a0bd857ae4542"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String}) 30cc91956f116ee964e75531fa8caea5553f74f3c251d97f69446707a84ff1e7 -->

```csharp
public Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.BgfxBuildInvocation(string tool, System.Collections.Generic.IEnumerable<string> arguments)
```

Snapshots the invocation so later caller mutations cannot change its fingerprint or execution.

**Parameter `tool`:** The logical executable declared by the selected native toolchain.

**Parameter `arguments`:** Ordered arguments, with source paths relative to the owned source root.

**Throws `System.ArgumentException`:** The tool is blank or an argument is null.

**Throws `System.ArgumentNullException`:** The argument sequence is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxBuildInvocation.cs#L27).

## `arguments`

<a id="api-970024d9c94199ea"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.arguments be76344e9e436a2f04b32cb9bc6f24215a886b1175f961a5f55f1ae3ff01b6aa -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.arguments { get; }
```

Gets immutable, ordered compiler arguments included in the recipe identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxBuildInvocation.cs#L48).

## `tool`

<a id="api-b704b4c0dee79094"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.tool 7b0df42077b042a2138526be044b246e24e35beec726a720decb9954fd175509 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation.tool { get; }
```

Gets the declared tool name resolved by the operation's frozen toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxBuildInvocation.cs#L43).
