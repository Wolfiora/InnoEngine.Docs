---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6ffcded4bd951f515bc2a7af7d187d1a5dac99faf71f2248b90bfa5f835be78c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingPreparation.PrepareAsync(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor},System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions})
title: NativeBindingPreparation.PrepareAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 4c5803d08ab926d7a1130a36381a6531953b7dd09d933e664cbcd32336e45c90
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The operation owning a frozen target selection and configured generator.

**Parameter `components`:** The declared component closure; components without bindings are excluded.

**Parameter `cancellationToken`:** Cancels generation and drains active work before returning.

**Parameter `componentOptions`:** Exact per-owner component choices, or null for component defaults.

## Returns

An owned generation closure, empty for a product without bindings. Retain it through final consumption.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The tool selection or required binding generator is absent.
