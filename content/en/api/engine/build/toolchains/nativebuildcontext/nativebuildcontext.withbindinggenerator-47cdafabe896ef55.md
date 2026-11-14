---
uid: api.47cdafabe896ef5534ab36ebd00298a051b1340ecf51bf36047fcef9e22a76a8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithBindingGenerator(Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: 225e93af250b43fddc99ee1b5deaf6d15ac91852b5a7c3e5566eb06bd56dae34
title: "NativeBuildContext.WithBindingGenerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Borrows a generator while preserving this operation's input and tool ownership.

## Parameters

**Parameter `generator`:** The shared generation implementation selected by composition.

## Returns

A derived context; neither context owns or disposes the provider.
