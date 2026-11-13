---
uid: api.47cdafabe896ef5534ab36ebd00298a051b1340ecf51bf36047fcef9e22a76a8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithBindingGenerator(Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: a0d89ffe4de98460cd6d104d44c992a7a04535d4ed44eca3a6bc7fa925af34e2
title: "WithBindingGenerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Borrows a generator while preserving this operation's input and tool ownership.

**Parameter `generator`:** The shared generation implementation selected by composition.

**Returns:** A derived context; neither context owns or disposes the provider.
