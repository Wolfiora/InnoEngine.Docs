---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a51c22cc60956999f9efd07039008d890432becb438ec501530fe79e011714c0
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingPreparation.PrepareAsync(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Threading.CancellationToken)
title: NativeBindingPreparation.PrepareAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: cecbba257c67821226821c51ed5de219c7b0ed845c9b781b920b299d5dac4f4f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The operation owning a frozen target selection and configured generator.

**Parameter `components`:** The declared component closure; components without bindings are excluded.

**Parameter `componentOptions`:** Exact per-owner component choices, or null for component defaults.

**Parameter `cancellationToken`:** Cancels generation and drains active work before returning.

## Returns

An owned generation closure, empty for a product without bindings. Retain it through final consumption.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The tool selection or required binding generator is absent.
