---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.407678fc45cab480529ca8029372a80b2fc8a286cf6234be3e00d686a04d5f9c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.WithBindings(Inno.Build.Toolchains.NativeBindingGenerationResult)
title: NativeBuildContext.WithBindings
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 8bbd38433226e5f5f123755cb843818f343667d38e0cdd7a6a705c8e7b13267c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a scoped operation with an immutable, explicitly prepared target binding closure.

## Parameters

**Parameter `bindings`:** Borrowed completed generations indexed by their Native owners. Retain this result until all derived contexts finish.

## Returns

A context sharing the existing tool selection, inputs and statistics.
